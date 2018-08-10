import objectMap from 'object.map';
import getByPath from 'lodash.get';
import { UNILEVER, APPLE, NIKE, FORD, STANDARD_PRICES } from '../../constants';

export default function calculatePrices (company, adQuantities) {
    let priceInfo = addStandardPrices(adQuantities, STANDARD_PRICES)
    priceInfo = addDiscounts(adQuantities, company, priceInfo)
    priceInfo = addTotals(priceInfo)
    console.log("totals", priceInfo)

    return priceInfo
}


export const addStandardPrices = (adQuantities) => {
    return {
        subtotals: objectMap(adQuantities, (qty, key) => parseInt(qty) * STANDARD_PRICES[key])
    }
}

const addDiscounts = (adQuantities, company, priceInfo) => {
    return {
        subtotals: objectMap(priceInfo.subtotals, (price, productName) => {
            const pricingRule = getByPath(pricingRules, `${company}.${productName}`);

            if (pricingRule) {
                const discountedPrice = pricingRule({
                    quantity: adQuantities[productName],
                    originalPrice: STANDARD_PRICES[productName]
                });

                return {
                    price: discountedPrice,
                    discount: price - discountedPrice
                }
            } else {
                return {
                    price,
                    discount: 0
                }
            }
        })
    }
}

const addTotals = (priceInfo) => {
    const total = Object.keys(priceInfo.subtotals).reduce((acc, curr) => {
        return acc + priceInfo.subtotals[curr].price;
    }, 0)

    return {
        subtotals: priceInfo.subtotals,
        total
    }
}

export const buyXGetY = ({x, y}) => ({quantity, originalPrice}) => {
    const leftOver = quantity % y;
    const numDiscounts = Math.floor(quantity / y);
    const discountedProductQuantity = numDiscounts * x + leftOver;
    return discountedProductQuantity * originalPrice;
}

export const dropTo = ({discountedPrice}) => ({quantity}) => discountedPrice * quantity
export const buyXDropTo = ({discountedPrice, requiredQuantity}) => ({quantity, originalPrice}) => {
    return (quantity >= requiredQuantity)
        ? discountedPrice * quantity
        : originalPrice * quantity;
}

const pricingRules = {
    [UNILEVER]: {
        classic: buyXGetY({x: 2, y: 3})
    },
    [APPLE]: {
        standout: dropTo({discountedPrice: 299.99})
    }
}



// example price structure
const adQuantities = {
    classic: 3,
    standout: 4,
    premium: 2
}

// example output
const output = {
    subtotals: {
        classic: {
            price: 324.23,
            discount: 0
        },
        standout: {
            price: 524.23,
            discount: 25.23
        },
        premium: {
            price: 123.23,
            discount: 0
        }
    },
    total: 482.23,
    totalDiscount: 123.12
}

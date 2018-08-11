import objectMap from 'object.map';
import getByPath from 'lodash.get';
import { standardPrices } from '../../constants';
import { cleanQty } from '../misc';
import priceRules from './price-rules';

export default function calculatePrices (company, adQuantities) {
    let priceInfo = addStandardPrices(adQuantities, standardPrices)
    priceInfo = addDiscounts(adQuantities, company, priceInfo)
    priceInfo = addTotals(priceInfo)
    return priceInfo
}


export const addStandardPrices = (adQuantities) => {
    return {
        subtotals: objectMap(adQuantities, (qty, key) => (cleanQty(qty)) * standardPrices[key])
    }
}

const addDiscounts = (adQuantities, company, priceInfo) => {
    return {
        subtotals: objectMap(priceInfo.subtotals, (price, productName) => {
            const pricingRule = getByPath(priceRules, `${company}.${productName}`);

            if (pricingRule) {
                const discountedPrice = pricingRule({
                    quantity: cleanQty(adQuantities[productName]),
                    originalPrice: standardPrices[productName]
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

    const totalDiscount = Object.keys(priceInfo.subtotals).reduce((acc, curr) => {
        return acc + priceInfo.subtotals[curr].discount;
    }, 0)

    return {
        subtotals: priceInfo.subtotals,
        total,
        totalDiscount
    }
}

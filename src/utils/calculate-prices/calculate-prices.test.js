import calculatePrices, {
    addStandardPrices,
    buyXGetY,
    buyXDropTo
 } from './index.js';
import { UNILEVER, APPLE, NIKE, FORD, STANDARD_PRICES } from '../../constants';

describe('calculatePrices(company, adQuantities)', () => {
    it('UNILEVER example scenario', () => {
        const company = UNILEVER;
        const adQuantities = {
            classic: 3,
            standout: 0,
            premium: 1
        }

        expect(calculatePrices(company, adQuantities).total).toEqual(934.97)
    })

    it('APPLE example scenario', () => {
        const company = APPLE;
        const adQuantities = {
            classic: 0,
            standout: 3,
            premium: 1
        }

        expect(calculatePrices(company, adQuantities).total).toEqual(1294.96)
    })
})

describe('addStandardPrices(adQuantities, standardPrices)', () => {
    it('should multiply the standardPrices by the adQuantities', () => {
        const adQuantities = {
            classic: 2,
            standout: 2,
            premium: 3
        }
        const result = addStandardPrices(adQuantities, STANDARD_PRICES)
        expect(result).toEqual({subtotals: {
            classic: 539.98,
            standout: 645.98,
            premium: 1184.97
        }})
    })
})

describe('buyXGetY({x, y})({quantity, originalPrice})', () => {
    const tests = [
        {x: 2, y: 3, quantity: 5, originalPrice: 1, expectedFinalPrice: 4},
        {x: 4, y: 5, quantity: 16, originalPrice: 1, expectedFinalPrice: 13},
        {x: 3, y: 5, quantity: 29, originalPrice: 1, expectedFinalPrice: 19}
    ]

    tests.forEach(test => {
        const {x, y, quantity, originalPrice, expectedFinalPrice} = test;
        it(`when x is ${x} and y is ${y}, ${quantity} products should cost $${expectedFinalPrice}`, () => {
            const result = buyXGetY({x, y})({quantity, originalPrice});
            expect(result).toEqual(expectedFinalPrice)
        })
    })
})

describe('buyXDropTo({discountedPrice, requiredQuantity})({quantity, originalPrice})', () => {
    const tests = [{
        discountedPrice: 12,
        requiredQuantity: 3,
        quantity: 2,
        originalPrice: 14,
        expectedFinalPrice: 28
    }, {
        discountedPrice: 12,
        requiredQuantity: 3,
        quantity: 3,
        originalPrice: 14,
        expectedFinalPrice: 36
    }, {
        discountedPrice: 5,
        requiredQuantity: 3,
        quantity: 4,
        originalPrice: 8,
        expectedFinalPrice: 20
    }]

    tests.forEach(test => {
        const {discountedPrice, requiredQuantity, quantity, originalPrice, expectedFinalPrice} = test;
        it(`when discountedPrice is ${discountedPrice} and requiredQuantity is ${requiredQuantity}, ${quantity} products should cost $${expectedFinalPrice}`, () => {
            const result = buyXDropTo({discountedPrice, requiredQuantity})({quantity, originalPrice});
            expect(result).toEqual(expectedFinalPrice)
        })
    })
})

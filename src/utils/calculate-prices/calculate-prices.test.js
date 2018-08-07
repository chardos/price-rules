import calculatePrices, {
    addStandardPrices,
    buyXGetY
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

        calculatePrices(company, adQuantities);
    })
})

describe('addStandardPrices(adQuantities, standardPrices)', () => {
    it('should multiply the standardPrices by the adQuantities', () => {
        const adQuantities = {
            classic: 2,
            standout: 2,
            premium: 2
        }
        const result = addStandardPrices(adQuantities, STANDARD_PRICES)
        expect(result).toEqual({subtotals: {
            classic: 539.98,
            premium: 789.98,
            standout: 645.98
        }})
    })
})

describe('buyXGetY => ({x, y}) => ({quantity, price})', () => {
    const tests = [
        {x: 2, y: 3, quantity: 5, price: 1, expectedCost: 4},
        {x: 4, y: 5, quantity: 16, price: 1, expectedCost: 13},
        {x: 3, y: 5, quantity: 29, price: 1, expectedCost: 19}
    ]

    tests.forEach(test => {
        const {x, y, quantity, price, expectedCost} = test;
        it(`when x is ${x} and y is ${y}, ${quantity} products should cost $${expectedCost}`, () => {
            const result = buyXGetY({x, y})({quantity, price});
            expect(result).toEqual(expectedCost)
        })
    })
})

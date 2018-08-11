import { UNILEVER, APPLE, NIKE, FORD, standardPrices } from '../../constants';
import calculatePrices, {
    addStandardPrices,
    buyXGetY,
    buyXDropTo
 } from './index.js';

describe('calculatePrices(company, adQuantities)', () => {
    it('DEFAULT example scenario', () => {
        const company = null;
        const adQuantities = {
            classic: 1,
            standout: 1,
            premium: 1
        }

        expect(calculatePrices(company, adQuantities).total).toEqual(987.97)
    })

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

    it('NIKE example scenario', () => {
        const company = NIKE;
        const adQuantities = {
            classic: 0,
            standout: 0,
            premium: 4
        }

        expect(calculatePrices(company, adQuantities).total).toEqual(1519.96)
    })
})

describe('addStandardPrices({adQuantities, company, standardPrices})', () => {
    it('should multiply the standardPrices by the adQuantities', () => {
        const adQuantities = {
            classic: 2,
            standout: 2,
            premium: 3
        }
        const result = addStandardPrices({adQuantities, standardPrices}).priceInfo;
        expect(result).toEqual({subtotals: {
            classic: 539.98,
            standout: 645.98,
            premium: 1184.97
        }})
    })
})

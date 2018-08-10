import { UNILEVER, APPLE, NIKE, FORD, STANDARD_PRICES } from '../../constants';
import { buyXGetY, dropTo, buyXDropTo } from './discounters';

const priceRules = {
    [UNILEVER]: {
        classic: buyXGetY({x: 2, y: 3})
    },
    [APPLE]: {
        standout: dropTo({discountedPrice: 299.99})
    },
    [NIKE]: {
        premium: buyXDropTo({
            requiredQuantity: 4,
            discountedPrice: 379.99
        })
    },
    [FORD]: {
        classic: buyXGetY({x: 4, y: 5}),
        standout: dropTo({discountedPrice: 309.99}),
        premium: buyXDropTo({
            requiredQuantity: 3,
            discountedPrice: 389.99
        })
    },
}

export default priceRules;

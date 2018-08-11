import {
    UNILEVER,
    APPLE,
    NIKE,
    FORD,
    CLASSIC,
    STANDOUT,
    PREMIUM
} from '../../constants';

import { buyXGetY, dropTo, buyXDropTo } from './discounters';

const priceRules = {
    [UNILEVER]: {
        [CLASSIC]: buyXGetY({x: 2, y: 3})
    },
    [APPLE]: {
        [STANDOUT]: dropTo({discountedPrice: 299.99})
    },
    [NIKE]: {
        [PREMIUM]: buyXDropTo({
            requiredQuantity: 4,
            discountedPrice: 379.99
        })
    },
    [FORD]: {
        [CLASSIC]: buyXGetY({x: 4, y: 5}),
        [STANDOUT]: dropTo({discountedPrice: 309.99}),
        [PREMIUM]: buyXDropTo({
            requiredQuantity: 3,
            discountedPrice: 389.99
        })
    },
}

export default priceRules;

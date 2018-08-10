export const buyXGetY = ({x, y}) => ({quantity, originalPrice}) => {
    const leftOver = quantity % y;
    const numDiscounts = Math.floor(quantity / y);
    const discountedProductQuantity = numDiscounts * x + leftOver;
    return discountedProductQuantity * originalPrice;
}

export const dropTo = ({discountedPrice}) => ({quantity}) => discountedPrice * quantity;

export const buyXDropTo = ({discountedPrice, requiredQuantity}) => ({quantity, originalPrice}) => {
    return (quantity >= requiredQuantity)
        ? discountedPrice * quantity
        : originalPrice * quantity;
}

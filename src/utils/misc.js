import pipe from 'ramda.pipe';

export const toTitleCase = (str) => {
    return str
        .split(' ')
        .map(word => {
            const [first, ...rest] = word.split('');
            return `${first.toUpperCase()}${rest.join('')}`;
        })
        .join(' ');
}

// Handle NaN's coming from inputs
export const cleanQty = qty => (parseInt(qty, 10) || 0);

export const toFixed = (fixedNum) => (num) => num.toFixed(fixedNum);
export const addDollars = (num) => `$${num}`;
export const addCommas = (num, arr = [], fractional = '') => {
    if (!num) {
        return arr.join(',') + fractional;
    }

    // handle decimal points
    let numString = num.toString();
    let decimalSplit = numString.split('.');
    const hasDecimalPoint = decimalSplit.length > 1;
    if (hasDecimalPoint) {
        fractional = `.${decimalSplit[decimalSplit.length - 1]}`;
        decimalSplit.pop();
        numString = decimalSplit.join();
    }

    const mod = numString.length % 3 || 3;
    const newArr = [
        ...arr,
        numString.substring(0, mod)
    ];
    const newNum = numString.substring(mod);
    return addCommas(newNum, newArr, fractional);
}

export const displayPrice = pipe(
    toFixed(2),
    addCommas,
    addDollars
);

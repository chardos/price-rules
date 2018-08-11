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
export const cleanQty = qty => (parseInt(qty) || 0)

export const toFixed = (num) => num.toFixed(2)
export const dollarize = (num) => `$${num}`;
export const displayPrice = pipe(toFixed, dollarize);

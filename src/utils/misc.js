export const toTitleCase = (str) => {
    return str
        .split(' ')
        .map(word => {
            const [first, ...rest] = word.split('');
            return `${first.toUpperCase()}${rest.join('')}`;
        })
        .join(' ');
}

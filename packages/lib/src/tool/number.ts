export function numberToString(num: number, input: string) {
    // formatter num et input ici
    try {
        return `${num}`;
    } catch (e) {
        return input;
    }
}

export function parseNumber(input: string) {
    const result = parseFloat(input);
    return !isNaN(result) ? result : null;
}
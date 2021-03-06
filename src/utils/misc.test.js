import { addCommas } from './misc';

describe("addCommas(num, arr, fractional)", () => {
    it("when passed a number, it should add commas", () => {
        const result = addCommas(1234);

        expect(result).toEqual("1,234");
    });

    it("when passed a string, it should add commas", () => {
        const result = addCommas("1234");

        expect(result).toEqual("1,234");
    });

    it("should handle decimal points", () => {
        const result = addCommas(1234.23);

        expect(result).toEqual("1,234.23");
    });

    it("should handle large numbers", () => {
        const result = addCommas(1234567891234.23);

        expect(result).toEqual("1,234,567,891,234.23");
    });
});

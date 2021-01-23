const numberToRomanNumerals = require('./numberToRomanNumerals');
var tests = [
    {'input': 1, 'expected': 'I'},
    {'input': 2, 'expected': 'II'},
    {'input': 3, 'expected': 'III'},
    {'input': 4, 'expected': 'IV'},
    {'input': 5, 'expected': 'V'},
    {'input': 9, 'expected': 'IX'},
    {'input': 12, 'expected': 'XII'},
    {'input': 16, 'expected': 'XVI'},
    {'input': 29, 'expected': 'XXIX'},
    {'input': 44, 'expected': 'XLIV'},
    {'input': 45, 'expected': 'XLV'},
    {'input': 55, 'expected': 'LV'},
    {'input': 68, 'expected': 'LXVIII'},
    {'input': 83, 'expected': 'LXXXIII'},
    {'input': 97, 'expected': 'XCVII'},
    {'input': 99, 'expected': 'XCIX'},
    {'input': 500, 'expected': 'D'},
    {'input': 501, 'expected': 'DI'},
    {'input': 649, 'expected': 'DCXLIX'},
    {'input': 798, 'expected': 'DCCXCVIII'},
    {'input': 891, 'expected': 'DCCCXCI'},
    {'input': 1000, 'expected': 'M'},
    {'input': 1004, 'expected': 'MIV'},
    {'input': 1006, 'expected': 'MVI'},
    {'input': 1023, 'expected': 'MXXIII'},
    {'input': 2014, 'expected': 'MMXIV'},
    {'input': 3999, 'expected': 'MMMCMXCIX'},
    ]

describe('numberToRomanNumerals', () => {
  tests.forEach((test) => {
    it(`returns ${test.expected} if the number is ${test.input}`, () => {
        expect(numberToRomanNumerals(test.input)).toBe(test.expected);
    });
  })
  it('returns 2,200 M bars (4400 total characters) if the number is 2200000000', () => {
    const expectedString = "M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅M̅"

    expect(expectedString.length).toBe(4400);
    expect(numberToRomanNumerals(2200000000)).toBe(expectedString);
  });
  it('returns empty string if NaN is provided', () => {
    expect(numberToRomanNumerals('this is not a number')).toBe('');
  });
  it('returns empty string if number is negative', () => {
    expect(numberToRomanNumerals(-10)).toBe('');
  });
});

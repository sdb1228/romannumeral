const BASE_ROMAN_NUMERALS_HASH = {
  M̅: 1000000,
  D̅: 500000,
  C̅: 100000,
  L̅: 50000,
  X̅L̅: 40000,
  X̅: 10000,
  I̅X̅: 9000,
  V̅: 5000,
  I̅V̅: 4000,
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function numberToRomanNumerals(integer) {
    let integerCopy = integer;
    let finalRomanNumeral = '';
    if(isNaN(integer) || Math.sign(integer) === -1) return finalRomanNumeral;
    Object.entries(BASE_ROMAN_NUMERALS_HASH).forEach(([romanNumeral, number]) => {
      for(let i = 0; i < Math.floor(integerCopy/ number); i++) {
        finalRomanNumeral = finalRomanNumeral + romanNumeral;
      }
      integerCopy = integerCopy % number;
    });
    return finalRomanNumeral;
}

module.exports = numberToRomanNumerals;

'use strict'

const numberToRomanNumeral = n => {
   return numerals.reduce(({result, n}, numeral) => {
        while(n >= numeral.value) {
          result += numeral.roman
          n -= numeral.value
        }
        return {result, n}
    }, {result: "", n}).result
}

const numerals = [
    {value: 5, roman: 'V'},
    {value: 4, roman: 'IV'},
    {value: 1, roman: 'I'}
]


module.exports = numberToRomanNumeral


'use strict'

const numberToRomanNumeral = n => {
   const nextState = ({result, n}, numeral) => {
       while(n >= numeral.value) {
          result += numeral.roman
          n -= numeral.value
        }
        return {result, n}
    }

   return numerals.reduce(nextState, {result: "", n}).result
}

const numerals = [
    {value: 5, roman: 'V'},
    {value: 4, roman: 'IV'},
    {value: 1, roman: 'I'}
]


module.exports = numberToRomanNumeral


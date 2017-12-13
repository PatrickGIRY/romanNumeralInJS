'use strict'

const numberToRomanNumeral = n => {
   const nextState = ({result, n}, numeral) => {
       if(n >= numeral.value) {
          return nextState({result: result + numeral.roman, n: n - numeral.value}, numeral)
       }
       return {result, n}
    }

   return numerals.reduce(nextState, {result: "", n}).result
}

const numerals = [
    {value: 40, roman: 'XL'},
    {value: 10, roman: 'X'},
    {value: 9, roman: 'IX'},
    {value: 5, roman: 'V'},
    {value: 4, roman: 'IV'},
    {value: 1, roman: 'I'}
]


module.exports = numberToRomanNumeral


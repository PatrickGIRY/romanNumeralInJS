'use strict'

const numberToRomanNumeral = n => {
    let result = ""
    for (let numeral of numerals) {
        while(n >= numeral.value) {
          result += numeral.roman
          n -= numeral.value
        }
    }
    return result
}

const numerals = [
    {value: 5, roman: 'V'},
    {value: 4, roman: 'IV'},
    {value: 1, roman: 'I'}
]


module.exports = numberToRomanNumeral


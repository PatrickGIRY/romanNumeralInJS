'use strict'

const numberToRomanNumeral = n => {
    if (n === 4) return 'IV'
    return 'I'.repeat(n)
}

module.exports = numberToRomanNumeral


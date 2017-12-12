'use strict'

const numberToRomanNumeral = n => {
    if (n === 4) return 'IV'
    if (n === 5) return 'V'
    return 'I'.repeat(n)
}

module.exports = numberToRomanNumeral


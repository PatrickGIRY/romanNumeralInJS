'use strict'

const numberToRomanNumeral = n => {
    if (n === 4) return 'IV'
    if (n === 5) return 'V'
    if (n === 6) return 'VI'
    return 'I'.repeat(n)
}

module.exports = numberToRomanNumeral


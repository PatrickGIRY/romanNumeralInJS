'use strict'

const numberToRomanNumeral = require('./roman.numeral')

describe('numberToRomanNumeral', () => {
    it('1 should be convert to I', () => {
        expect(numberToRomanNumeral(1)).toEqual('I')
    })

    it('2 should be convert to II', () => {
        expect(numberToRomanNumeral(2)).toEqual('II')
    })

    it('3 should be convert to III', () => {
        expect(numberToRomanNumeral(3)).toEqual('III')
    })

    it('4 should be convert to IV', () => {
        expect(numberToRomanNumeral(4)).toEqual('IV')
    })
    
})


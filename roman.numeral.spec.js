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

    it('5 should be convert to V', () => {
        expect(numberToRomanNumeral(5)).toEqual('V')
    })

    it('6 should be convert to VI', () => {
        expect(numberToRomanNumeral(6)).toEqual('VI')
    })

    it('9 should be convert to IX', () => {
        expect(numberToRomanNumeral(9)).toEqual('IX')
    })

    it('10 should be convert to X', () => {
        expect(numberToRomanNumeral(10)).toEqual('X')
    })

    it('40 should be convert to XL', () => {
        expect(numberToRomanNumeral(40)).toEqual('XL')
    })

    it('50 should be convert to L', () => {
        expect(numberToRomanNumeral(50)).toEqual('L')
    })

    it('90 should be convert to XC', () => {
        expect(numberToRomanNumeral(90)).toEqual('XC')
    })

    it('100 should be convert to C', () => {
        expect(numberToRomanNumeral(100)).toEqual('C')
    })

    it('400 should be convert to CD', () => {
        expect(numberToRomanNumeral(400)).toEqual('CD')
    })

    it('500 should be convert to D', () => {
        expect(numberToRomanNumeral(500)).toEqual('D')
    })

    it('900 should be convert to CM', () => {
        expect(numberToRomanNumeral(900)).toEqual('CM')
    })

    it('1000 should be convert to M', () => {
        expect(numberToRomanNumeral(1000)).toEqual('M')
    })
    
})


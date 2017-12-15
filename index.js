
const numberToRomanNumeral = require('./roman.numeral')

process.stdout.write(numberToRomanNumeral(parseInt(process.argv[2])) + '\n')

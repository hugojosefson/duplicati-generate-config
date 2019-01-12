require('@babel/register')(require('../package.json').babel)

module.exports = require('./api')

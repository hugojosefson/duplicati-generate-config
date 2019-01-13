require('engine-check')()
require = require('esm')(module) // eslint-disable-line no-global-assign
module.exports = require('./src/cli')

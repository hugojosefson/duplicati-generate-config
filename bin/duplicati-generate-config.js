#!/usr/bin/env node

require('engine-check')()
require('babel-register')(require('../package.json').babel)
require('../src/cli')

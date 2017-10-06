import yargs from 'yargs'
import generate from './cli-commands/generate'
import { readFile, writeFile, generateWriteSpecs } from './api'

const yargsChain = yargs
  .command(generate({ readFile, writeFile, generateWriteSpecs }))
  .demandCommand()
  .help()
  .wrap(100)

/* Runs yargs, strange as it may look: */
// noinspection BadExpressionStatementJS
yargsChain.argv // eslint-disable-line no-unused-expressions

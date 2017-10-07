import yargs from 'yargs'
import termSize from 'term-size'
import generate from './cli-commands/generate'
import { readFile, writeFile, generateWriteSpecs } from './api'

const yargsChain = yargs
  .command(generate({ readFile, writeFile, generateWriteSpecs }))
  .demandCommand()
  .help()
  .wrap(termSize().columns)

/* Runs yargs, strange as it may look: */
// noinspection BadExpressionStatementJS
yargsChain.argv // eslint-disable-line no-unused-expressions

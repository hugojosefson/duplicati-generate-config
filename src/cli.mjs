#!/usr/bin/env node

import yargs from 'yargs'
import termSize from 'term-size'
import generate from './cli-commands/generate.mjs'
import { generateWriteSpecs, readFile, writeFile } from './api.mjs'

yargs
  .command(generate({ readFile, writeFile, generateWriteSpecs }))
  .demandCommand()
  .help()
  .wrap(termSize().columns)
  .parse()

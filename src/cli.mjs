import yargs from 'yargs'
import termSize from 'term-size'
import commands from './cli-commands'
import plugins from './plugins'
import { readFile, writeFile, generateWriteSpecs } from './api'

const makePluginFriendly = yargsInstance => {

  return {
    ...yargsInstance,
    updateCommand: (commandName, options) => {
      if (!Object.keys(commands).includes(commandName)) {
        throw new Error(`${commands} is not already declared. Use .command() instead.`)
      }

      const command = commands[commandName]
      yargsInstance.command(command({readFile, writeFile, generateWriteSpecs}))
    }
  }
}

const pluginFriendly = makePluginFriendly(yargs)

const plugged = plugins.reduce((acc, plugin) => plugin(acc).yargs, pluginFriendly)

plugged
  .demandCommand()
  .help()
  .wrap(termSize().columns)
  .parse()

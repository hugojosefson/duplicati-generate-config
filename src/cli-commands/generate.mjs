export default ({readFile, writeFile, generateWriteSpecs}) => ({

  command: [`generate <template-file> <definitions-file> [output-dir]`, '*'],

  description: 'Generates duplicati config files.',

  builder: argv => argv
    .option('o', {
      alias: 'output-dir',
      default: '.',
      description: 'Where to write the generated config files.',
      type: 'string'
    })
    .option('n', {
      alias: 'dry-run',
      description: 'Don\'t actually write any files.',
      type: 'boolean'
    })
    .option('name-prefix', {
      default: '',
      description: 'Prepended to each backup set name the definitions, to the resulting config file',
      type: 'string'
    })
    .option('name-suffix', {
      default: '',
      description: 'Appended to each backup set name the definitions, to the resulting config file',
      type: 'string'
    })
    .option('source-path-prefix', {
      default: '/source',
      description: 'Prepended to each source path in the definitions, to the resulting config file.',
      type: 'string'
    })
    .option('output-filename-prefix', {
      default: '',
      description: 'Prepended to each written config filename.',
      type: 'string'
    })
    .option('output-filename-suffix', {
      default: '-duplicati-config.json',
      description: 'Appended to each written config filename.',
      type: 'string'
    }),

  handler: ({
              templateFile,
              definitionsFile,
              outputDir,
              dryRun,
              namePrefix,
              nameSuffix,
              sourcePathPrefix,
              outputFilenamePrefix,
              outputFilenameSuffix
            }) =>
    generateWriteSpecs({
      template: readFile(templateFile),
      definitions: readFile(definitionsFile),
      outputDir,
      namePrefix,
      nameSuffix,
      sourcePathPrefix,
      outputFilenamePrefix,
      outputFilenameSuffix
    })
      .then(writeSpecs => writeSpecs
        .map(({filename, contents}) => dryRun ? Promise.resolve(filename) : writeFile(filename, contents))
        .map(writePromise => writePromise
          .then(writtenFilename => console.log(`${dryRun ? 'NOT ' : ''}Written: ${writtenFilename}`))
        )
      )
      .then(() => console.log('Done.'))
      .catch(err => {
        console.error('Caught error:', err.stack)
        process.exit(1)
      })
})

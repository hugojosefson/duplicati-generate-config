import { path } from 'ramda'

import { cleanFilename } from '../extractable-modules/string-manipulation'

export default ({
  outputDir = '.',
  outputFilenamePrefix = '',
  outputFilename = path('Backup.Name'.split('.')),
  outputFilenameSuffix = '-duplicati-config.json'
}) =>
  config =>
    ({
      contents: JSON.stringify(config, null, 2),
      filename: [
        outputDir,
        '/',
        outputFilenamePrefix,
        cleanFilename(outputFilename(config)),
        outputFilenameSuffix
      ].join('')
    })

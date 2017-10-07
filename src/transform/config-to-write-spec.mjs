import { cleanFilename } from '../extractable-modules/string-manipulation'

export default ({
                  outputDir,
                  outputFilenamePrefix,
                  outputFilenameSuffix
                }) =>
  config =>
    ({
      contents: JSON.stringify(config, null, 2),
      filename: [
        outputDir,
        '/',
        outputFilenamePrefix,
        cleanFilename(config.Backup.Name),
        outputFilenameSuffix
      ].join('')
    })

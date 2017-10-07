import { cleanFilename } from '../extractable-modules/string-manipulation'

export default ({outputDir, outputFilenameSuffix}) => config => ({
  contents: JSON.stringify(config, null, 2),
  filename: `${outputDir}/${cleanFilename(config.Backup.Name)}${outputFilenameSuffix}`
})

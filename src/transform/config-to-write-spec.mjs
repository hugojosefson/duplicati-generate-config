import { cleanFilename } from '../extractable-modules/string-manipulation'

export default outputDir => config => ({
  contents: JSON.stringify(config, null, 2),
  filename: `${outputDir}/${cleanFilename(config.Backup.Name)}-duplicati-config.json`
})

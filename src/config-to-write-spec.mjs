import { cleanFilename } from './string-manipulation'

export default config => ({
  contents: JSON.stringify(config, null, 2),
  filename: `${cleanFilename(config.Backup.Name)}-duplicati-config.json`
})

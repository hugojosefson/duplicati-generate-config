const cleanName = name => name
  .replace(/[^a-zA-Z0-9_.-]+/g, '-')
  .replace(/^[^a-zA-Z0-9]+/g, '')

export default config => ({
  contents: JSON.stringify(config, null, 2),
  filename: `${cleanName(config.Backup.Name)}-duplicati-config.json`
})

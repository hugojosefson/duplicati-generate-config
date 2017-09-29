const filterExpression = ignore => /^\//.test(ignore) ? `/source${ignore}` : ignore

export default template => ({name, source, ignores}) => ({
  ...template,
  Backup: {
    ...template.Backup,
    Name: name,
    TargetURL: template.Backup.TargetURL.replace(
      /^(b2:\/\/[^/]+)\/[^?]+/,
      '$1/' + name
        .replace(/^\/+/, '')
        .replace(/ to b2.*/, '')
    ),
    DBPath: undefined,
    Metadata: undefined,
    Sources: [
      `/source${source}`
    ],
    Filters: ignores.map((ignore, index) => ({
      Order: index,
      Include: false,
      Expression: filterExpression(ignore)
    }))
  },
  DisplayNames: {
    [`/source${source}`]: source
  }
})

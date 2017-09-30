import { URL } from 'url'
import compose from './compose'
import {
  removeRegex,
  removeAnyLeadingSlash,
  cleanFilename,
  startsWithSlash
} from './string-manipulation'

const filterExpression = ignore => startsWithSlash(ignore) ? `/source${ignore}` : ignore

const targetUrl = (templateTargetUrl, name) => {
  const url = new URL(templateTargetUrl)
  url.hostname = compose(
    removeRegex(/ to b2.*$/),
    removeAnyLeadingSlash,
    cleanFilename
  )(name)
  url.path = ''
}

export default template => ({name, source, ignores}) => ({
  ...template,
  Backup: {
    ...template.Backup,
    Name: name,
    TargetURL: targetUrl(template.Backup.TargetURL),
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

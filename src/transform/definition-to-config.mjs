import { URL } from 'url'
import { compose } from 'ramda'
import {
  prepend,
  removeRegex,
  removeAnyLeadingSlash,
  cleanHostname,
  filterExpression
} from '../extractable-modules/string-manipulation'

const targetUrl = (templateTargetUrl, name) => {
  const url = new URL(templateTargetUrl)

  url.hostname = compose(
    prepend('duplicati-'),
    removeAnyLeadingSlash,
    cleanHostname,
    removeRegex(/ to b2.*$/)
  )(name)

  url.pathname = '/'

  return url.toString()
}

export default ({template, sourcePathPrefix = '/source'}) => ({name, source, ignores}) => ({
  ...template,
  Backup: {
    ...template.Backup,
    Name: name,
    TargetURL: targetUrl(template.Backup.TargetURL, name),
    DBPath: undefined,
    Metadata: undefined,
    Sources: [
      `${sourcePathPrefix}${source}`
    ],
    Filters: ignores.map((ignore, index) => ({
      Order: index,
      Include: false,
      Expression: filterExpression(sourcePathPrefix)(ignore)
    }))
  },
  DisplayNames: {
    [`${sourcePathPrefix}${source}`]: source
  }
})

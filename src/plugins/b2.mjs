import { URL } from 'url'
import { compose } from 'ramda'

export default yargs => ({
  yargs: yargs
    .updateCommand('generate', {
      builder: originalBuilder => argv => originalBuilder(argv).option('name-suffix', {
        default: ' to b2 backblaze',
        description: 'Appended to each backup set name the definitions, to the resulting config file',
        type: 'string'
      })
    }),
  targetUrl: ({
                templateTargetUrl,
                name,
                stringManipulation: {
                  prepend,
                  removeAnyLeadingSlash,
                  cleanHostname
                }
              }) => {
    const url = new URL(templateTargetUrl)

    url.hostname = compose(
      prepend('duplicati-'),
      removeAnyLeadingSlash,
      cleanHostname
    )(name)

    url.pathname = '/'

    return url.toString()
  }
})

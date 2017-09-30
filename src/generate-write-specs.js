import definitionToConfig from './definition-to-config'
import configToWriteSpec from './config-to-write-spec'

export default (templateFileContents, definitionsFlatfileContents) => templateFileContents
  .map(s => JSON.parse(s))
  .flatMap(template => definitionsFlatfileContents
    .splitBy('\n\n')
    .map(definition => definition.split('\n'))
    .map(lines => lines.filter(line => line[0] !== '#'))
    .map(lines => lines.filter(line => line.length))
    .filter(lines => lines.length)
    .map(([name, source, ...ignores]) => ({name, source, ignores}))
    .map(definitionToConfig(template))
  )
  .map(configToWriteSpec)

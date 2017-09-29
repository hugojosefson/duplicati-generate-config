import definitionToConfig from './definition-to-config'
import configToWriteSpec from './config-to-write-spec'

export default (template, definitionsFlat) => template
  .map(s => JSON.parse(s))
  .flatMap(template => definitionsFlat
    .splitBy('\n\n')
    .map(definition => definition.split('\n'))
    .map(lines => lines.filter(line => line[0] !== '#'))
    .map(lines => lines.filter(line => line.length))
    .filter(lines => lines.length)
    .map(([name, source, ...ignores]) => ({name, source, ignores}))
    .map(definitionToConfig(template))
  )
  .map(configToWriteSpec)

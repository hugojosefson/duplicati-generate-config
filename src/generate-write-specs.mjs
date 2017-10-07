import definitionToConfig from './transform/definition-to-config'
import configToWriteSpec from './transform/config-to-write-spec'

export default ({
                  template: templateFileContentsPromise,
                  definitions: definitionsFlatfileContentsPromise,
                  outputDir = '.',
                  sourcePathPrefix = '/source'
                }) =>
  templateFileContentsPromise
    .then(s => JSON.parse(s))
    .then(template => definitionsFlatfileContentsPromise
      .then(definitions => definitions
        .split('\n\n')
        .map(definition => definition.split('\n'))
        .map(lines => lines.filter(line => line[0] !== '#'))
        .map(lines => lines.filter(line => line.length))
        .filter(lines => lines.length)
        .map(([name, source, ...ignores]) => ({name, source, ignores}))
        .map(definitionToConfig({template, sourcePathPrefix}))
      )
    )
    .then(configs => configs.map(configToWriteSpec(outputDir)))

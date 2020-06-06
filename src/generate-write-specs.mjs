import definitionToConfig from './transform/definition-to-config.mjs'
import configToWriteSpec from './transform/config-to-write-spec.mjs'

export default ({
  template: templateFileContentsPromise,
  definitions: definitionsFlatfileContentsPromise,
  outputDir,
  namePrefix,
  nameSuffix,
  sourcePathPrefix,
  outputFilenamePrefix,
  outputFilenameSuffix
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
        .map(([name, source, ...ignores]) => ({ name, source, ignores }))
        .map(definitionToConfig({ template, sourcePathPrefix, namePrefix, nameSuffix }))
      )
    )
    .then(
      configs => configs.map(
        configToWriteSpec({
          outputDir,
          outputFilenamePrefix,
          outputFilenameSuffix
        })
      )
    )

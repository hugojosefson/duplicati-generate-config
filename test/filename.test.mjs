/* eslint-env mocha */

import chai from 'chai'
import configToWriteSpec from '../src/transform/config-to-write-spec.mjs'

const { expect } = chai

describe('filename', () => {
  it('default filename is "./name-duplicati-config.json"', () => {
    const { filename: actual } = configToWriteSpec({
      outputFilename: () => 'name'
    })()
    expect(actual).to.equal('./name-duplicati-config.json')
  })
  it('prefix is prepended, suffix is appended', () => {
    const { filename: actual } = configToWriteSpec({
      outputDir: 'myOutputDir',
      outputFilenamePrefix: 'myOutputFilenamePrefix',
      outputFilename: () => 'middle',
      outputFilenameSuffix: 'myOutputFilenameSuffix'
    })()
    expect(actual).to.equal('myOutputDir/myOutputFilenamePrefixmiddlemyOutputFilenameSuffix')
  })
  it('default prefix is ""', () => {
    const { filename: actual } = configToWriteSpec({
      outputDir: 'myOutputDir',
      outputFilename: () => 'middle',
      outputFilenameSuffix: 'myOutputFilenameSuffix'
    })()
    expect(actual).to.equal('myOutputDir/middlemyOutputFilenameSuffix')
  })
  it('default suffix is "-duplicati-config.json"', () => {
    const { filename: actual } = configToWriteSpec({
      outputDir: 'myOutputDir',
      outputFilenamePrefix: 'myOutputFilenamePrefix',
      outputFilename: () => 'middle'
    })()
    expect(actual).to.equal('myOutputDir/myOutputFilenamePrefixmiddle-duplicati-config.json')
  })
  it('is applied as-is, without cleaning up', () => {
    const { filename: actual } = configToWriteSpec({
      outputDir: 'myOutputDir',
      outputFilenamePrefix: 'my Output Filename/Prefix',
      outputFilename: () => 'middle',
      outputFilenameSuffix: 'my Output Filename/Suffix'
    })()
    expect(actual).to.equal('myOutputDir/my Output Filename/Prefixmiddlemy Output Filename/Suffix')
  })
})

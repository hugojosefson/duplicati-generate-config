/* eslint-env mocha */

import { expect } from 'chai'
import { generateWriteSpecs } from '../src/api'

import templateConfig from './fixtures/template-config'
import definitions from './fixtures/backup-definitions'
import expectedWriteSpecs from './fixtures/expected-write-specs'

const compare = prop => (a, b) => {
  if (a[prop] < b[prop]) {
    return -1
  }

  if (a[prop] > b[prop]) {
    return 1
  }

  return 0
}

const parseJson = prop => obj => ({...obj, [prop]: JSON.parse(obj[prop])})

const pluck = prop => obj => obj[prop]

const expecteds = expectedWriteSpecs
  .map(parseJson('contents'))
  .sort(compare('filename'))

const produceActuals = () => generateWriteSpecs({
  template: Promise.resolve(JSON.stringify(templateConfig)),
  definitions: Promise.resolve(definitions)
})
  .then(actualWriteSpecs => actualWriteSpecs
    .map(parseJson('contents'))
    .sort(compare('filename'))
  )

describe('generateWriteSpecs', () => {
  let actuals

  before(
    () => produceActuals().then(result => { actuals = result })
  )

  it('generates correct number of writeSpecs', () => {
    expect(actuals.length).to.equal(expecteds.length)
  })

  it('filenames are in order', () => {
    expect(actuals.map(pluck('filename'))).to.deep.equal(expecteds.map(pluck('filename')))
  })

  expectedWriteSpecs.forEach((_, index) => {
    const expected = expecteds[index]
    it(`generates correct writeSpec for ${expected.filename}`, () => {
      const actual = actuals[index]
      expect(actual).to.deep.equal(expected)
    })
  })
})

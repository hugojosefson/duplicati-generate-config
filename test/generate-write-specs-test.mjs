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

const produceResult = () => generateWriteSpecs(
  Promise.resolve(JSON.stringify(templateConfig)),
  Promise.resolve(definitions)
)
  .then(actualWriteSpecs => {
    const actual = actualWriteSpecs
      .map(parseJson('contents'))
      .sort(compare('filename'))

    const expected = expectedWriteSpecs
      .map(parseJson('contents'))
      .sort(compare('filename'))

    return {actual, expected}
  })

describe('generateWriteSpecs', () => {
  it('generates correct number of writeSpecs', done => {
    produceResult()
      .then(({actual, expected}) => {
        expect(actual.length).to.equal(expected.length)
      })
      .then(() => done(), done)
  })
  it('generates correct writeSpecs', done => {
    produceResult()
      .then(({actual, expected}) => {
        expect(actual).to.deep.equal(expected)
      })
      .then(() => done(), done)
  })
})

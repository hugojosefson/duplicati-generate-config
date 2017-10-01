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

describe('generateWriteSpecs', () => {
  it('generates expected write specs from inputs', done => {
    generateWriteSpecs(
      Promise.resolve(JSON.stringify(templateConfig)),
      Promise.resolve(definitions)
    )
      .then(actualWriteSpecs => {
        const actual = actualWriteSpecs
          .map(parseJson('contents'))
          .sort(compare('filename'))[5]

        const expected = expectedWriteSpecs
          .map(parseJson('contents'))
          .sort(compare('filename'))[0]

        // console.log(actual)
        // console.log(expected)

        expect(actual).to.deep.equal(expected)
      })
      .then(() => done(), done)
  })
})

/* eslint-env mocha */

import { expect } from 'chai'
import R from 'ramda'
import { generateWriteSpecs } from '../src/api'

import {
  expectToStartWith,
  expectToNotStartWith,
  expectToEndWith
} from './expectation-utils'
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

const parseJson = prop => obj => ({ ...obj, [prop]: JSON.parse(obj[prop]) })

const expecteds = expectedWriteSpecs
  .map(parseJson('contents'))
  .sort(compare('filename'))

const produceActuals = options => generateWriteSpecs({
  template: Promise.resolve(JSON.stringify(templateConfig)),
  definitions: Promise.resolve(definitions),
  ...options
})
  .then(actualWriteSpecs => actualWriteSpecs
    .map(parseJson('contents'))
    .sort(compare('filename'))
  )

const expectAtPath = ({
  options,
  path = '',
  expector = () => expect(true).to.equal(false),
  splitArrays // array value will be split up into several calls
}) =>
  produceActuals(options)
    .then(actuals => actuals
      .map(R.path(typeof path === 'string' ? path.split('.') : path))
      .map(value => splitArrays ? (Array.isArray(value) ? value.map(item => Promise.resolve(item)) : [Promise.resolve(value)]) : [Promise.resolve(value)])
      .map(valuePromises => valuePromises.map(valuePromise => valuePromise.then(expector)))
    )
    .then(promises => Promise.all(promises))

describe('generateWriteSpecs', () => {
  describe('with default arguments', () => {
    let actuals

    before(
      () => produceActuals().then(result => { actuals = result })
    )

    it('generates correct number of writeSpecs', () => {
      expect(actuals.length).to.equal(expecteds.length)
    })

    it('filenames are in order', () => {
      expect(actuals.map(R.pluck('filename'))).to.deep.equal(expecteds.map(R.pluck('filename')))
    })

    expectedWriteSpecs.forEach((_, index) => {
      const expected = expecteds[index]
      it(`generates correct writeSpec for ${expected.filename}`, () => {
        const actual = actuals[index]
        expect(actual).to.deep.equal(expected)
      })
    })
  })

  describe('sourcePathPrefix', () => {
    it('has default value of "/source"', () =>
      expectAtPath({
        path: 'contents.Backup.Sources',
        splitArrays: true,
        expector: source => expectToStartWith(source, '/source')
      })
    )
    it('can be empty', () =>
      expectAtPath({
        options: {
          sourcePathPrefix: ''
        },
        path: 'contents.Backup.Sources',
        splitArrays: true,
        expector: source => expectToNotStartWith(source, '/source')
      })
    )
    it('can be another string', () =>
      expectAtPath({
        options: {
          sourcePathPrefix: 'another-string'
        },
        path: 'contents.Backup.Sources',
        splitArrays: true,
        expector: source => expectToStartWith(source, 'another-string')
      })
    )
    it('is applied as-is, without cleaning up', () =>
      expectAtPath({
        options: {
          sourcePathPrefix: 'Another String'
        },
        path: 'contents.Backup.Sources',
        splitArrays: true,
        expector: source => expectToStartWith(source, 'Another String')
      })
    )
  })

  describe('namePrefix', () => {
    it('is prepended to Backup.Name', () =>
      expectAtPath({
        options: {
          namePrefix: 'myPrefix'
        },
        path: 'contents.Backup.Name',
        expector: name => expectToStartWith(name, 'myPrefix')
      })
    )
    it('is applied as-is, without cleaning up', () =>
      expectAtPath({
        options: {
          namePrefix: 'Another String/. '
        },
        path: 'contents.Backup.Name',
        splitArrays: true,
        expector: name => expectToStartWith(name, 'Another String/. ')
      })
    )
  })

  describe('nameSuffix', () => {
    it('has default value " to b2 backblaze"', () =>
      expectAtPath({
        path: 'contents.Backup.Name',
        expector: name => expectToEndWith(name, ' to b2 backblaze')
      })
    )
    it('is appended to Backup.Name', () =>
      expectAtPath({
        options: {
          nameSuffix: 'mySuffix'
        },
        path: 'contents.Backup.Name',
        expector: name => expectToEndWith(name, 'mySuffix')
      })
    )
    it('is applied as-is, without cleaning up', () =>
      expectAtPath({
        options: {
          nameSuffix: 'Another String/. '
        },
        path: 'contents.Backup.Name',
        expector: name => expectToEndWith(name, 'Another String/. ')
      })
    )
  })
})

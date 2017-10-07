/* eslint-env mocha */

import { expect } from 'chai'
import R from 'ramda'
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
                        splitArrays  // array value will be split up into several calls
                      }) =>
  produceActuals(options)
    .then(actuals => actuals
      .map(({contents}) => contents)
      .map(R.path(typeof path === 'string' ? path.split('.') : path))
      .map(value => splitArrays ? (value.length ? value.map(item => Promise.resolve(item)) : value) : value)
      .map(valuePromises => valuePromises.map(valuePromise => valuePromise.then(expector)))
    )
    .then(promises => Promise.all(promises))

const expectToStartWith = (actual, expectedStart) => expect(actual.substring(0, expectedStart.length)).to.equal(expectedStart)
const expectToNotStartWith = (actual, expectedStart) => expect(actual.substring(0, expectedStart.length)).to.not.equal(expectedStart)

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

  describe('sourcePathPrefix', () => {
    it('has default value of "/source"', () =>
      expectAtPath({
        path: 'Backup.Sources',
        splitArrays: true,
        expector: source => expectToStartWith(source, '/source')
      })
    )
    it('can be empty', () =>
      expectAtPath({
        options: {
          sourcePathPrefix: ''
        },
        path: 'Backup.Sources',
        splitArrays: true,
        expector: source => expectToNotStartWith(source, '/source')
      })
    )
    it('can be another string', () =>
      expectAtPath({
        options: {
          sourcePathPrefix: 'another-string'
        },
        path: 'Backup.Sources',
        splitArrays: true,
        expector: source => expectToStartWith(source, 'another-string')
      })
    )
    it('is applied as-is, without cleaning up', () =>
      expectAtPath({
        options: {
          sourcePathPrefix: 'Another String'
        },
        path: 'Backup.Sources',
        splitArrays: true,
        expector: source => expectToStartWith(source, 'Another String')
      })
    )
  })
})

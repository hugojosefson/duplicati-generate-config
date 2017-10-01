import { test, threw } from 'tap'
import { deepEqual } from 'assert'
import { generateWriteSpecs } from '../src/api'

import templateConfig from './fixture-template-config'
import definitions from './fixture-definitions'
import expectedWriteSpecs from './fixture-expected-write-specs'

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

test('flow', Promise.resolve())
  .then(() =>
    generateWriteSpecs(
      Promise.resolve(JSON.stringify(templateConfig)),
      Promise.resolve(definitions)
    )
      .then(actualWriteSpecs => {
        // console.log(actualWriteSpecs.map(parseJson('contents')).sort(compare('filename')))
        console.log(expectedWriteSpecs.map(parseJson('contents')).sort(compare('filename')))
        deepEqual(
          [actualWriteSpecs
            .map(parseJson('contents'))
            .sort(compare('filename'))[5]],
          expectedWriteSpecs
            .map(parseJson('contents'))
            .sort(compare('filename'))
        )
      })
  )
  .catch(threw)

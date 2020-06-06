/* eslint-env mocha */

import chai from 'chai'
import ramda from 'ramda'

const { compose } = ramda
const { expect } = chai

describe('compose', () => {
  it('should compose functions in expected order', () => {
    const expected = 'ABHELLO--THERE--ASDAD--3'

    const actual = compose(
      s => s.toUpperCase(),
      s => `A${s}`,
      (...args) => `B${args.join('--')}`
    )('hello', 'there', 'asdad', 3)

    expect(actual).to.equal(expected)
  })
})

/* eslint-env mocha */

import { expect } from 'chai'
import { compose } from '../src/functional'

describe('compose', () => {
  it('should compose functions in correct order', () => {
    const expected = 'ABHELLO--THERE--ASDAD--3'

    const actual = compose(
      s => s.toUpperCase(),
      s => `A${s}`,
      (...args) => `B${args.join('--')}`
    )('hello', 'there', 'asdad', 3)

    expect(actual).to.equal(expected)
  })
})

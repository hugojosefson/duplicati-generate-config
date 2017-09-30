import { equal } from 'tap'
import { compose } from '../src/functional'

const expected = 'ABHELLO--THERE--ASDAD--3'

const actual = compose(
  s => s.toUpperCase(),
  s => `A${s}`,
  (...args) => `B${args.join('--')}`
)('hello', 'there', 'asdad', 3)

equal(actual, expected)

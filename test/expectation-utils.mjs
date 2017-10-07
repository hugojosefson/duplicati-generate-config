import { expect } from 'chai'

export const expectToStartWith = (actual, expectedStart) => expect(actual.substring(0, expectedStart.length)).to.equal(expectedStart)
export const expectToNotStartWith = (actual, expectedStart) => expect(actual.substring(0, expectedStart.length)).to.not.equal(expectedStart)

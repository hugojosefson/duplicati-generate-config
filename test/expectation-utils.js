import { expect } from 'chai'

export const expectToStartWith = (actual, expectedStart) => expect(actual.substring(0, expectedStart.length)).to.equal(expectedStart)
export const expectToNotStartWith = (actual, expectedStart) => expect(actual.substring(0, expectedStart.length)).to.not.equal(expectedStart)

export const expectToEndWith = (actual, expectedEnd) => expect(actual.substring(actual.length - expectedEnd.length)).to.equal(expectedEnd)

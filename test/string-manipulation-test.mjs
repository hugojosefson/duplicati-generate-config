/* eslint-env mocha */

import { expect } from 'chai'

import {
  cleanFilename,
  replaceRegex
} from '../src/string-manipulation'

describe('string-manipulation', () => {
  it('replaceRegex should replace', () => {
    expect(replaceRegex(/ugo/)('UGO')('Hugo Josefson')).to.equal('HUGO Josefson')
  })

  it('cleanFilename should clean up a filename', () => {
    expect(cleanFilename('/Important Downloads/here')).to.equal('Important-Downloads-here')
  })
})

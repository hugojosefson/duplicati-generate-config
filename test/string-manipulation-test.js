/* eslint-env mocha */

import { expect } from 'chai'

import {
  cleanFilename,
  cleanHostname,
  replaceRegex,
  filterExpression
} from '../src/extractable-modules/string-manipulation'

describe('string-manipulation', () => {
  describe('replaceRegex', () => {
    it('should replace', () => {
      expect(replaceRegex(/ugo/)('UGO')('Hugo Josefson')).to.equal('HUGO Josefson')
    })
  })

  describe('cleanFilename', () => {
    it('should clean up a filename', () => {
      expect(cleanFilename('/Important Downloads/here')).to.equal('Important-Downloads-here')
    })
  })

  describe('cleanHostname', () => {
    it('is the same function as cleanFilename', () => {
      expect(cleanHostname).to.equal(cleanFilename)
    })
  })

  describe('filterExpression', () => {
    it('should prepend sourcePathPrefix to paths starting with "/"', () => {
      expect(filterExpression('myPrefix')('/home/me')).to.equal('myPrefix/home/me')
    })
    it('should not touch paths that don\'t start with "/"', () => {
      expect(filterExpression('myPrefix')('*/node_modules/')).to.equal('*/node_modules/')
    })
  })
})

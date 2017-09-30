import { test } from 'tap'

import {
  cleanFilename,
  replaceRegex
} from '../src/string-manipulation'

test('replaceRegex', ({equal, done}) => equal(replaceRegex(/ugo/)('UGO')('Hugo Josefson'), 'HUGO Josefson') && done())
test('cleanFilename', ({equal, done}) => equal(cleanFilename('/Important Downloads/here'), 'Important-Downloads-here') && done())

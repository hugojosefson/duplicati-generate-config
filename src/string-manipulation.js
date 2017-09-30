import { compose } from './functional'

const leadingSlashes = /^\/+/

const invalidFilenameChars = /[^a-zA-Z0-9]+/g
const invalidLeadingFilenameChars = /^[^a-zA-Z0-9]+/

export const startsWithSlash = s => leadingSlashes.test(s)
export const replaceRegex = regexToReplace => replaceWith => s => s.replace(regexToReplace, replaceWith)
export const removeRegex = regexToRemove => s => replaceRegex(regexToRemove)('')(s)
export const removeAnyLeadingSlash = removeRegex(leadingSlashes)

const replaceInvalidFilenameCharsWith = replaceRegex(invalidFilenameChars)
const removeInvalidLeadingFilenameChars = removeRegex(invalidLeadingFilenameChars)

export const cleanFilename = compose(
  removeInvalidLeadingFilenameChars,
  replaceInvalidFilenameCharsWith('-')
)

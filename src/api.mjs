/**
 * Converts duplicati template file contents, and backup definition flat file contents, into
 * definitions of what to write to disk.
 *
 * @param {Highland} templateFileContents - Highland Stream of the contents of the duplicati
 * template config file.
 * @param {Highland} definitionsFlatfileContents - Highland Stream of the contents of the backup
 * definitions flat file.
 * @return {Highland.<{filename, contents}>} A Highland Stream definitions of what to write to disk
 */
export { default as generateWriteSpecs } from './generate-write-specs'

/**
 * Reads a file into a Highland Stream.
 *
 * @param {string} filename - Filename to read from.
 * @return {Highland.<String>} A Highland Stream of one String, the entire contents of the file.
 */
export { default as readFile } from './read-file.mjs'

/**
 * Writes a Highland Stream to a file.
 *
 * @param {string} filename - Filename to write to.
 * @param {Highland.<String>} contents - Highland Stream of one String, to write.
 * @return {Highland.<String>} A Highland Stream of one String, the filename written.
 */
export { default as writeFile } from './write-file.mjs'

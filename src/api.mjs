/**
 * Converts duplicati template file contents, and backup definition flat file contents, into
 * definitions of what to write to disk.
 *
 * @param {Promise.<String>} templateFileContents - Promise of the contents of the duplicati
 * template config file.
 * @param {Promise.<String>} definitionsFlatfileContents - Promise of the contents of the backup
 * definitions flat file.
 * @param {String} outputDir - Where to say in the returned writeDefinition to write the files.
 * @returns {Promise.<[{filename, contents}]>} A Promise definitions of what to write to disk
 * @name generateWriteSpecs
 */
export { default as generateWriteSpecs } from './generate-write-specs'

/**
 * Reads a file.
 *
 * @param {string} filename - Filename to read from.
 * @returns {Promise.<String>} A Promise of the contents of the file.
 * @name writeFile
 */
export { default as readFile } from './io/read-file'

/**
 * Writes to a file.
 *
 * @param {string} filename - Filename to write to.
 * @param {string} contents - String to write.
 * @returns {Promise.<String>} A Promise of the filename written.
 * @name writeFile
 */
export { default as writeFile } from './io/write-file'

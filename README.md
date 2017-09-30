# duplicati-config-generate

*Generate [duplicati](https://www.duplicati.com/) backup configs from a flat file*

## Prerequisite

  * Node.js, quite new version. Works with 8.6.0.

## Installation

```bash
npm install -g duplicati-config-generate
```

## Usage

```bash
duplicati-config-generate template-duplicati-config.json definitions.txt
```

Will read from `definitions.txt`, outputting config files to current directory, using exported `template-duplicati-config.json` as template.

### Template file format

Export an existing configuration from duplicati, and use that file.

### Definitions file format

Example `definitions.txt`:

```
# 1st line of every block is name of backup set.
# 2nd line is source directory.
# Following lines are exclusions.
# Empty line denotes end of block, and that backup set.

virtual-machines/Keep to b2 backblaze
/home/me/virtual-machines/Keep

Videos/programming to b2 backblaze
/home/me/Videos/Programming

Important Downloads to b2 backblaze
/home/me/Important Downloads

code/old-stuff to b2 backblaze
/home/me/code/old-stuff
*/node_modules/
*/target/

code to b2 backblaze
/home/me/code
/home/me/code/old-stuff/
*/node_modules/
*/target/

/home/me to b2 backblaze
/home/me
/home/me/code/
/home/me/virtual-machines/
/home/me/Important Downloads/
/home/me/Downloads/
/home/me/duplicati/backups/
/home/me/lost+found/
/home/me/Videos/
/home/me/.Trash-1000/
*/node_modules/
*/target/
```
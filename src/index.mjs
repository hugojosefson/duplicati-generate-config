import { readFile as fsReadFile } from 'fs'
import { wrapCallback } from 'highland'

const readFile = wrapCallback(fsReadFile)

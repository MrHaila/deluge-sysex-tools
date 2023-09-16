/**
 * Wrap text in ANSI escape codes to make it bold.
 * @param text The text to wrap.
 */
export function asDim (text: string) {
  return `\x1b[2m${text}\x1b[0m`
}

/**
 * Wrap text in ANSI escape codes to make it bright.
 * @param text The text to wrap.
 */
export function asBright (text: string) {
  return `\x1b[1m${text}\x1b[0m`
}

/**
 * 
 * @param text The text to wrap.
 */
export function asGreen (text: string) {
  return `\x1b[32m${text}\x1b[0m`
}

/**
 * 
 * @param text The text to wrap.
 */
export function asRed (text: string) {
  return `\x1b[31m${text}\x1b[0m`
}
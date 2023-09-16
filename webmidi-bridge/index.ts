import { WebMidi } from "webmidi"

let midi: typeof WebMidi | undefined

/**
 * Enable the WebMidi interface if it's not already enabled.
 * Note: The interface stays open until manually closed with the `close` function.
 */
async function enableWebMidiIfNeeded () {
  if (!midi) {
    // console.debug('Enabling WebMidi...')
    midi = await WebMidi.enable({ sysex: true })
  }
}

/**
 * Close the WebMidi interface.
 */
export function close () {
  if (midi) {
    // console.debug('Closing WebMidi...')
    midi.disable()
  }
}

/**
 * List all connected MIDI devices from the WebMidi interface.
 */
export async function listConnectedDevices () {
  await enableWebMidiIfNeeded()

  return {
    inputs: WebMidi.inputs,
    outputs: WebMidi.outputs
  }
}

// TODO: Something like this is probably a good first test.
export async function isDelugeConnected () {
  await enableWebMidiIfNeeded()

  return WebMidi.inputs.some(input => input.name === 'Deluge')
}

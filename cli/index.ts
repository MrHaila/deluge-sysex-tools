import { createCommand } from 'commander'

import { listConnectedDevices, close } from '@deluge/webmidi-bridge'
import { asBright, asDim, asGreen } from './terminal'

// https://github.com/tj/commander.js
const program = createCommand()

// Command to list all connected MIDI devices.
program
  .command('list')
  .description('List all connected MIDI devices.')
  .action(async () => {
    const { inputs, outputs } = await listConnectedDevices()

    console.log(asBright('Connected MIDI devices:'))
    console.log('Inputs')
    inputs.forEach(input => console.log(`  ${asGreen('→')} ${asBright(input.name)} by ${input.manufacturer}`))
    if (!inputs.length) console.log(asDim('  (none)'))

    console.log('Outputs')
    outputs.forEach(output => console.log(`  ${asGreen('←')} ${asBright(output.name)} by ${output.manufacturer}`))
    if (!outputs.length) console.log(asDim('  (none)'))

    close()
  })

// Parse the command line arguments.
const options = program.parse().opts()

// If no command was specified, show the help.
if (!program.args.length) {
  program.help()
}

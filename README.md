# Deluge Sysex Tools

This is a monorepo (multiple projects in one repo) for tools to work with the Synthstom Deluge synthesizer over MIDI. Written in TypeScript and [Bun](https://bun.sh).

## webmidi-bridge

An ESM library that facilitates communication with the Deluge over MIDI system exclusive (sysex) messages. The library is written in TypeScript and can be used in Node.js, Bun and browser environments.

## cli

A command line tool that uses `webmidi-bridge` to send and receive sysex messages to and from the Deluge. Good for testing and debugging.

## webapp

TBD single-page web app that uses `webmidi-bridge` to send and receive sysex messages to and from the Deluge.

## Development

To install dependencies:

```bash
bun install
```

Individual project tasks TBD.

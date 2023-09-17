# Deluge Sysex Tools Monorepo (proposal - doesn't actually do anything yet)

This is a monorepo (multiple projects in one repo) for tools to work with the Synthstom Deluge synthesizer over MIDI. Written in TypeScript and [Bun](https://bun.sh).

## webmidi-bridge

An ESM library that facilitates communication with the Deluge over MIDI system exclusive (sysex) messages. The library is written in TypeScript and can be used in Node.js, Bun and browser environments.

In the long term, it would make sense to publish this library into NPM so other projects can use it easily. It might even make sense to split it into two libraries: one for the Deluge sysex and one for webmidi, so the Deluge sysex library can be used with other MIDI APIs.

## cli

A command line tool that uses `webmidi-bridge` to send and receive sysex messages to and from the Deluge. Good for testing and debugging.

## webapp

Single-page web app written in Vue that uses `webmidi-bridge` to send and receive sysex messages to and from the Deluge.

## Development

Development environment setup:

* Install [Bun](https://bun.sh).
* Install project dependencies by running `bun install` in the root directory of the project. (you need to re-run this command every time someone changes the dependencies)

Run the CLI tool by running `bun run index.ts` in the `cli` directory.

Run the web app by running `bun run dev` in the `webapp` directory.

## Notes

This is a fairly minimal-but-functional example of how to quickly iterate on three projects. It lacks examples/tooling for release management, linting, testing, CI/CD, and so on. These are thigns that can be added at any point later.

Using Bun instead of Node keeps the webmidi-bridge and cli projects super simple as there's basically zero tools to install and learn.

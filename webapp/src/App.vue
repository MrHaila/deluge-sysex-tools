<template>
  <p>This page attempts to load all connected MIDI devices and display them as JSON.</p>
  <p>Obvious future things to do would be local web MIDI API permission management and nice buttons for triggering actions with good feedback on success/error.</p>
  <pre>{{ JSON.stringify(devices, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { listConnectedDevices, close } from '@deluge/webmidi-bridge'

const devices = ref<Awaited<ReturnType<typeof listConnectedDevices>>>()
onMounted(async () => {
  devices.value = await listConnectedDevices()
  close()
})
</script>

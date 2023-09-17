<template>
<div class="max-w-3xl mx-auto my-8 space-y-3">
  <h1 class="font-bold text-lg">This page attempts to load all connected MIDI devices and display them as JSON.</h1>
  <p>Obvious future things to do would be local web MIDI API permission management and nice buttons for triggering actions with good feedback on success/error.</p>
  <pre class="text-sm font-mono bg-neutral-100 rounded-md border border-neutral-200 shadow-sm p-3">{{ JSON.stringify(devices, null, 2) }}</pre>
</div>
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

<template>
<Toast/>
<div class="max-w-3xl mx-auto my-8 space-y-3">
  <Card>
    <template #title>Connected MIDI Devices</template>
    <template #content>
      <p>Obvious future things to do would be local web MIDI API permission management and nice buttons for triggering actions with good feedback on success/error.</p>
      <pre
        class="mt-3 text-sm font-mono bg-neutral-100 rounded-md border border-neutral-200 shadow-sm p-3"
        v-if="devices"
        >{{ JSON.stringify(devices, null, 2) }}</pre>
    </template>
    <template #footer>
      <Button label="Scan for devices" @click="listDevices"></Button>
    </template>
  </Card>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { listConnectedDevices } from '@deluge/webmidi-bridge'

import Button from 'primevue/button'
import Card from 'primevue/card'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

const devices = ref<Awaited<ReturnType<typeof listConnectedDevices>>>()
  
const toast = useToast()
async function listDevices () {
  try {
    devices.value = await listConnectedDevices()
  } catch (err) {
    if (err instanceof DOMException && err.name === 'SecurityError') {
      console.error('No permission:', err)
      toast.add({
        severity: 'error',
        summary: 'No permission',
        detail: 'Permission denied. Please grant permission to access MIDI devices.',
        life: 5000
      })
      return
    }

    throw err
  }
}
</script>

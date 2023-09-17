import { createApp } from 'vue'

import PrimeVue from "primevue/config"
import Tailwind from "primevue/passthrough/tailwind"

import './style.css'
import RootComponent from './RootComponent.vue'

// Create the Vue app instace.
const app = createApp(RootComponent)

// Register the PrimeVue plugin.
app.use(PrimeVue, { unstyled: true, pt: Tailwind })

// Mount the app instance to the DOM.
app.mount('#app')

import { createApp } from 'vue'

import PrimeVue from "primevue/config"
import Tailwind from "primevue/passthrough/tailwind"
import ToastService from 'primevue/toastservice'

import './style.css'
import RootComponent from './RootComponent.vue'

// Create the Vue app instace.
const app = createApp(RootComponent)

// Register the PrimeVue plugins.
app.use(PrimeVue, { unstyled: true, pt: Tailwind })
app.use(ToastService)

// Mount the app instance to the DOM.
app.mount('#app')

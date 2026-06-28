import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import aboutUs from './components/AboutUs.vue'

createApp(App).mount('#app')

createApp(aboutUs).mount('#about-us')

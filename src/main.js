import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import '@/main.css'
import App from '@/App.vue'
import router from '@/router'

library.add(faSearch, faLocationDot)
const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

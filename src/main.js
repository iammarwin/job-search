import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import '@/main.css'
import App from '@/App.vue'
import router from '@/router'

library.add(faSearch, faLocationDot)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

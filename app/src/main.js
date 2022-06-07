import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'


import App from './App.vue'
import router from './router'
import './index.css'

library.add(faBell)
library.add(faPlus)
library.add(faCheck)

const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')

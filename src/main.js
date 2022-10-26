import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = "https://8080-barbaraport-bptopics-78ip1ooq506.ws-us72.gitpod.io/"

createApp(App).use(store).use(router).mount('#app')

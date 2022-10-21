import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { SwapiApi } from './services/api'

createApp(App).use(router).mount('#app')
SwapiApi.getPeoples(1).then(console.log)

// main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/main.css';
import VueProgressBar from "@aacassandra/vue3-progressbar";
const options = {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
};


const app = createApp(App);
app.use(store);
app.use(VueProgressBar, options)
app.mount('#app');

export default app
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/main.css';
import VueLazyLoad from 'vue3-lazyload'
import VueProgressBar from "@aacassandra/vue3-progressbar";
const options = {
    color: '#C29440',
    failedColor: 'red',
    
};


const app = createApp(App);
app.use(store);
app.use(VueLazyLoad, {
    loading: '',
    error: '',
    lifecycle: {
        loading: (el) => {
            console.log('loading', el)
        },
        error: (el) => {
            console.log('error', el)
        },
        loaded: (el) => {
            console.log('loaded', el)
        }
    }
})
app.use(VueProgressBar, options)
app.mount('#app');

export default app
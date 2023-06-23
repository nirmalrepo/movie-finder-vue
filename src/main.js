import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/main.css';
import VueLazyLoad from 'vue3-lazyload'
import VueProgressBar from "@aacassandra/vue3-progressbar";
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App);
app.use(store);
app.use(VueLazyLoad, {
    loading: '',
    error: '',
})
app.use(VueProgressBar, {
    color: '#C29440',
    failedColor: 'red',
    thickness: "4px",

})
app.use(VueAwesomePaginate)
app.mount('#app');

export default app
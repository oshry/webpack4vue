import Vue from 'vue'
import '../assets/app.css'
import App from './components/app.vue'
// This will pull in our App component and render it into the DOM element with id “app”.
new Vue({
    el: '#app',
    render: h => h(App)
})
import Vue from 'vue'
// import '../assets/app.css'
import '../assets/app.styl'
import App from './components/app.vue'
// This will pull in our App component and render it into the DOM element with id “app”.
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

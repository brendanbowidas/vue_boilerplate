import Vue from 'vue'
import './scss/src.scss'

const App = new Vue({
  template: '<div><h1 class="text-center">{{msg}}</h1><div class="red text-center">hi</div></div>',
  data: {
    msg: 'Hello World',
  },
  el: '#app',
})

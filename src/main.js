import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.component('component-m', {
  template: '#component-m',
  data: function() {
      return { clicked:false }
  },
  props: {
      title: String,
      message: String,
      icon: String
  },
  methods: {
      blowUp: function() {
          var ele = event.currentTarget;
          ele.classList.add('blowUp');
      },
      collapse: function() {
          var ele = event.currentTarget;
          ele.classList.remove('blowUp');
          ele.classList.add('collapse');
          
          setTimeout(function() { 
              //ele.classList.remove('blowUp');
              ele.classList.remove('collapse'); 
          }, 1000);
      },
      animateRight: function() {
          var ele = event.currentTarget;
          ele.classList.add('moveRight');
      },
      animateLeft: function() {
          var ele = event.currentTarget;
          ele.classList.add('moveLeft');
          
          setTimeout(function() { 
              ele.classList.remove('moveRight');
              ele.classList.remove('moveLeft'); 
          }, 500);
      },
      click: function() {
          var ele = event.currentTarget;
          if (!this.clicked) {
              ele.parentElement.parentElement.style.flexGrow = '3';
              ele.style.transform = 'scaleX(-1)';
              this.clicked = true;
          } else {
              ele.parentElement.parentElement.style.flexGrow = '0';
              ele.style.transform = 'scaleX(1)';
              this.clicked = false;
          }           
      }
  }
});

new Vue ({
  el: '#app',
  router,
  render: h => h(App)
});

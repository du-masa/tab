import Vue from 'vue/dist/vue.esm.js';
import '../scss/vue-style.scss';

document.addEventListener('DOMContentLoaded', function() {

  // タブ処理
  (function() {
    new Vue({
      el: "#tabContent",
      data: function() {
        return {
          activeTab: 'tab1'
        }
      },
      methods: {
        setActiveTab(selectedTabName) {
          this.activeTab = selectedTabName;
        }
      }
    });
  }());
})

import Vue from 'vue/dist/vue.esm.js';
import axios from 'axios';

import '../scss/vue-style.scss';

document.addEventListener('DOMContentLoaded', function() {

  // タブ処理
  (function() {
    new Vue({
      el: "#tabContent",
      data: function() {
        return {
          activeTab: 'tab1',
          tabList: []
        }
      },
      methods: {
        setActiveTab(selectedTabName) {
          this.activeTab = selectedTabName;
        }
      },
      created: function() {
        const self = this;
        axios.get('http://localhost:3000/tabList').then(function(res) {
          self.tabList = res.data;
        });
      }
    });
  }());
})

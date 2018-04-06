import Vue from 'vue/dist/vue.esm.js';
import '../scss/vue-style.scss';

document.addEventListener('DOMContentLoaded', function() {

  // タブ処理
  (function() {
    new Vue({
      el: "#tabContent",
      data: function() {
        return {
          activeTab: 'tab1',
          tabList: [
            {
              title: 'tab1',
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ut.'
            },
            {
              title: 'tab2',
              text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, cum dolorem quisquam consequatur ex placeat ratione soluta nulla tenetur quos!'
            },
            {
              title: 'tab3',
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, atque ipsum aspernatur et sit quod accusantium corporis tempora ea quia dignissimos nisi fugit fuga saepe impedit culpa similique eum illum pariatur! Ea corrupti eius voluptates error eum assumenda labore aperiam!'
            },
            {
              title: 'tab4',
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque eveniet ipsum possimus blanditiis consequatur inventore aliquid nobis. Unde alias ullam nulla eveniet, nihil accusamus rem voluptatem iure corporis fuga commodi eos temporibus, error minus, cupiditate laborum dignissimos reiciendis eligendi autem! Illum, sit quasi deleniti vitae consequatur sunt? Dolores, officiis.'
            },
          ]
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

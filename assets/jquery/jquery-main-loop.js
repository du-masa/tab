import $ from 'jquery';
import '../scss/jquery-style.scss';

$(document).ready(function() {

  // タブ処理
  (function() {

    var tabList = [
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
    ];
    var $tabItemWrap = $('.tab');
    var $tabMainWrap = $('.tabMain');

    for(var i = 0; i < tabList.length; i++) {
      var tabItem = tabList[i];
      var $tabItemEl = $('<li class="tab__item"><div data-target="#' + tabItem.title + '" class="tab__target">' + tabItem.title + '</div></li>');
      var $tabMainSectionEl = $('<div class="tabMain__section" id="'+ tabItem.title +'">' + tabItem.text + '</div>');

      if (i === 0) {
        $tabItemEl.children('div').addClass('tab__target--active');
        $tabMainSectionEl.addClass('tabMain__section--active');
      }

      $tabItemWrap.append($tabItemEl);
      $tabMainWrap.append($tabMainSectionEl);
    }

    var $tabItem = $('.tab__target');
    var $tabMainSection = $('.tabMain__section');

    $tabItem.on('click', function() {
      var target = $(this).data('target');

      $tabItem.removeClass('tab__target--active');
      $(this).addClass('tab__target--active');

      $tabMainSection.removeClass('tabMain__section--active');
      $(target).addClass('tabMain__section--active');
    });
  }());

});

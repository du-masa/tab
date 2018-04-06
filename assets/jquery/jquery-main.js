import $ from 'jquery';
import '../scss/jquery-style.scss';

$(document).ready(function() {

  // タブ処理
  (function() {

    var $tabItem = $('.tab__target');
    var $tabMainSectio = $('.tabMain__section');

    $tabItem.on('click', function() {
      var target = $(this).data('target');

      $tabItem.removeClass('tab__target--active');
      $(this).addClass('tab__target--active');

      $tabMainSectio.removeClass('tabMain__section--active');
      $(target).addClass('tabMain__section--active');
    });
  }());

});

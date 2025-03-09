//ハンバーガーメニュの記述

$('.hamburger_menu').on('click',function(){ //"hamburger_menu"をクリックしたら、
  $('.hamburger_menu').toggleClass('cross'); //ハンバーガーボタンに"cross"というclassをつけたり外したりする
  $('.header__block').fadeToggle(300); //ヘッダーナビゲーションを300ミリ秒でフェードイン、フェードアウトさせる
  $('body').toggleClass('noscroll') //bodyに対して"noscroll"というclassをつけたり外したりする
});

$(window).on('resize', function() {
  if ($(window).width() >= 1040) {
    $('.header__block').show();            // メニューを表示
    $('.hamburger_menu').removeClass('cross'); // ハンバーガーの×印を解除
    $('body').removeClass('noscroll');       // スクロール禁止を解除
  }
});
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".js-jigyou-naiyou__scroll");
  // topBtn.hide();
  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // scroll位置情報取得
  $(window).scroll(function () {
    var test = $(this).scrollTop();
    console.log(test);
  });

  // ボタンの表示設定（header）
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".js-kigyou-naiyou__header").css("background", "rgba(17, 17, 17, 1)");
      // 指定px以上のスクロールでボタンを表示
      // topBtn.fadeIn();
    } else {
      $(".js-kigyou-naiyou__header").css("background", "rgba(17, 17, 17, 0.5)");
      // 画面が指定pxより上ならボタンを非表示
      // topBtn.fadeOut();
    }
  });

  // ボタンの表示設定（js-jigyou-naiyou__scroll）
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".js-jigyou-naiyou__scroll").css("display", "block");
      // 指定px以上のスクロールでボタンを表示
      // topBtn.fadeIn();
    } else {
      $(".js-jigyou-naiyou__scroll").css("display", "none");
      // 画面が指定pxより上ならボタンを非表示
      // topBtn.fadeOut();
    }
  });

  //ドロワーメニュー
  $(".js-drawer-menu").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-menu-wrap").toggleClass("js-drawer-menu-wrap__open");
    $(".sp-menu__layout").toggleClass("sp-menu__layout-open");
    // $("html").toggleClass("is-fixed");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });
});

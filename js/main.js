$(function () {
  // ------ Кнопка бургер-меню для адаптива ------------
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});

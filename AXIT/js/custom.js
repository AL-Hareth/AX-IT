$(function () {
  $(".tabs .tab").click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#startchange");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".main-menu").css("background-color", "#f0f0f0");
      } else {
        $(".main-menu").css("background-color", "transparent");
      }
    });
  }
});

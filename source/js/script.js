$(document).ready(function () {
  $.fn.animate_Text = function () {
    var string = this.text();
    return this.each(function () {
      var $this = $(this);
      $this.html(string.replace(/./g, '<span class="new">$&</span>'));
      $this.find("span.new").each(function (i, el) {
        setTimeout(function () {
          $(el).addClass("div_opacity");
        }, 40 * i);
      });
    });
  };
  $("#example").css("display", "flex");
  $("#example").animate_Text();

  $(".js-menu-burger").on("click", () => {
    $(".js-menu-panel").addClass("show");
  });
  $(".js-menu-cross").on("click", () => {
    $(".js-menu-panel").removeClass("show");
  });
});

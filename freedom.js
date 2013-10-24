(function() {
  function freedom() {
    $(".slider").slider();

  };

  function slider(element) {
    var $slider = $(this);
    var hours_a_day = 24;
    var hour_width = ($slider.width() / hours_a_day) - 1;
    var $notch = $("<div>");

    $notch.addClass("notch");
    $slider.append($notch)

    $.each(Array(hours_a_day), function() {
      var $hour = $("<div>");
      $hour.addClass("hour");
      $hour.width(hour_width);
      $slider.append($hour);
    });
  };

  $.fn.freedom = freedom;
  $.fn.slider = slider;
}());
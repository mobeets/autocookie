function initSlider(selector, valSelector) {
  $(selector).slider({
    value:100,
    min: 0,
    max: 500,
    step: 50,
    slide: function( event, ui ) {
      $(valSelector).text(ui.value);
    }
  });
  val = $(selector).slider("value");
  $(valSelector).text(val);
}


function init() {
  initSlider('#slider1', '#val1');
  initSlider('#slider2', '#val2');
  initSlider('#slider3', '#val3');
}

$(document).ready(init);

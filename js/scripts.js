$(document).ready(function() {
  $(".clickable").click(function() {
    $("#oxygen-showing").toggle();
    $("#oxygen-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".hover").hover(function() {
    $("#flotation-showing").fadeToggle();
  });
});

$(document).ready(function() {
  $(".slidetoggle").hover(function() {
    $("#evacuation-showing").slideToggle();
  });
});

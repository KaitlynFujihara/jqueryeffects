$(document).ready(function() {
  $(".clickable").click(function() {
    $("#oxygen-showing").toggle();
    $("#oxygen-hidden").toggle();
    $("#oxygen-showing").removeClass();
    $("#oxygen-showing").addClass("green-background");
  });
});

$(document).ready(function() {
  $(".hover").hover(function() {
    $("#flotation-showing").fadeToggle();
    $("#flotation-showing").removeClass();
    $("#flotation-showing").addClass("red-background");
  });
});

$(document).ready(function() {
  $(".slidetoggle").hover(function() {
    $("#evacuation-showing").slideToggle();
    $("#evacuation-showing").removeClass();
    $("#evacuation-showing").addClass("blue-background");
  });
});

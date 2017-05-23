var $animation_elements = $('.animation-element');
var $window = $(window);

$(document).ready(function () {
  // Force top position after page refresh
  $("html, body").scrollTop(0);

  //Cache reference to window and animation items

  var $window = $(window);

  $(window).on('scroll', check_if_in_view);


});

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var offset = 250;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position - offset) && $element.data("viewed") == 0) {
      $element.data("viewed",1);
      incrementreceipt($element.data());
    } else {
      $element.removeClass('in-view');
    }
  });
}


// Increment receipt number
function incrementreceipt(dataset) {
  if (dataset.media == "photo") {
    var likes = +$(".photoLikes").html();
    $(".photoLikes").html(likes+1);
  }
  else if (dataset.media == "video") {
    var likes = +$(".videoLikes").html();
    $(".videoLikes").html(likes+1);
  }
  else if (dataset.media == "text") {
    var likes = +$(".textLikes").html();
    $(".textLikes").html(likes+1);
  }
  console.log(dataset.media);
  console.log(dataset.country);
  console.log(dataset.subject);

  updateTotalView();
}

// Every time i call this update total like amount
function updateTotalView() {
  var likes = +$(".totalLikes").html();
  $(".totalLikes").html(likes+1);

}

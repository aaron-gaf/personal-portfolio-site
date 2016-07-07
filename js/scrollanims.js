// Aside from the custom animations, the code for this is from https://www.sitepoint.com/scroll-based-animations-jquery-css3/
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
    
    var elClass = $element.attr('class');
    
    if (inView(elClass)) {
      var id = $element.attr('id');
      if (id === 'animationelement1') {
        
      } else if (id === 'animationelement2') {
        
      } else if (id === 'animationelement3') {
        
      } else if (id === 'animationelement4') {
        
      }
    }
  });
}

function inView(classStr) {
  return classStr.indexOf('in-view') != -1;
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
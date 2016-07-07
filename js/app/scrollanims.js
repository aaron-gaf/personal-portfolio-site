// Wait for the DOM to be ready
$(function() {
  var controller = new ScrollMagic.Controller();
  var tweenAnim1 = TweenMax.fromTo('#animationelement1', 0.5, {
    x: "50%",
    y: "15%"
  },
  {
    left:-10,
    right: 10,
    repeat: -1
  });
  
  var scene1 = new ScrollMagic.Scene({
    offset: 25,
    duration: 250
  }).setTween(tweenAnim1).addTo(controller);
});
// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
// this = Object.create(Dancer.prototype)
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

var lineup = function () {
  var dancers = $('.dancer').slice(0);
  for (var i = 0; i < dancers.length; i++) {
    console.log(dancers[i]);
  }
}

Dancer.prototype.step = function(context){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  context = context || this;
  setTimeout(function() {
    context.step(context);
  }, context.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // console.log('top ' + top);
  // console.log('left ' + left);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

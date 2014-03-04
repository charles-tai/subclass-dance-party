var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<span class = "blinkyDancer shake shake-slow"></span>')
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(context){
  Dancer.prototype.step.call(this, context);
  this.$node.toggle();
};

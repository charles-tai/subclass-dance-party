var BlinkyDancer = function(top, left, timeBetweenSteps){
  console.log('oldStep' + JSON.stringify(this));
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"></span>');


};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(context){
  Dancer.prototype.step.call(this, context);
  this.$node.toggle();
};

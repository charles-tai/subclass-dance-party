var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.oldStep = Dancer.prototype.step;
  console.log('oldStep' + JSON.stringify(this));
  Dancer.call(this, top, left, timeBetweenSteps);


};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(context,timeBetweenSteps){
  console.log(timeBetweenSteps);
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(context, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

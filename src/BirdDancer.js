var BirdDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="picture"><img src="src/bird.gif"></img></span>');
};

BirdDancer.prototype = Object.create(Dancer.prototype);
BirdDancer.prototype.constructor = BirdDancer;

BirdDancer.prototype.oldStep = Dancer.prototype.step;

BirdDancer.prototype.step = function() {
  this.oldStep();
};

BirdDancer.prototype.lineUp = function(newLeft) {
  this.$node.css({top: 200, left: newLeft});
}
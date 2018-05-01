var makeBirdDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="picture"><img src="src/bird.gif"></img></span>');
};

makeBirdDancer.prototype = Object.create(makeDancer.prototype);
makeBirdDancer.prototype.constructor = makeBirdDancer;

makeBirdDancer.prototype.oldStep = makeDancer.prototype.step;

makeBirdDancer.prototype.step = function() {
  this.oldStep();
};

makeBirdDancer.prototype.lineUp = function(newLeft) {
  this.$node.css({top: 200, left: newLeft});
}
var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="picture"><img src="src/pusheen.gif"></img></span>');
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.oldStep = makeDancer.prototype.step;

makeCatDancer.prototype.step = function() {
  this.oldStep();
};


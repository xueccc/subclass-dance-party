var DogeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="picture"><img src="src/shiba.gif"></img></span>');
};

DogeDancer.prototype = Object.create(Dancer.prototype);
DogeDancer.prototype.constructor = DogeDancer;

DogeDancer.prototype.oldStep = Dancer.prototype.step;

DogeDancer.prototype.step = function() {
  this.oldStep();
};

DogeDancer.prototype.lineUp = function(newLeft) {
  this.$node.css({top: 650, left: newLeft});
}


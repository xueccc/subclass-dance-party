var makeDogeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<span class="picture"><img src="src/shiba.png"></img></span>');
}

makeDogeDancer.prototype = Object.create(makeDancer.prototype);
makeDogeDancer.prototype.constructor = makeDogeDancer;

makeDogeDancer.prototype.oldStep = makeDancer.prototype.step;

makeDogeDancer.prototype.step = function(){
  this.oldStep();
} 


$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').prepend(dancer.$node);

    for (var i = 0; i < window.dancers.length; i++) {
      if (Math.abs(window.dancers[i].left - dancer.left) < 150 && Math.abs(window.dancers[i].top - dancer.top) < 150) {
        dancer.$node.animate({
          left: '-=20',
        });
        dancer.$node.toggleClass('rotate'); 
        window.dancers[i].$node.toggleClass('rotate');
      }
    }
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var dogeLeft = 0;
    var blinkyLeft = 0;
    var birdLeft = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].constructor.name === DogeDancer.prototype.constructor.name) {
        window.dancers[i].lineUp(dogeLeft);
        dogeLeft += 50;
      } else if (window.dancers[i].constructor.name === BlinkyDancer.prototype.constructor.name) {
        window.dancers[i].lineUp(blinkyLeft);
        blinkyLeft += 50;
      } else {
        window.dancers[i].lineUp(birdLeft);
        birdLeft += 50;
      }
    }
  });

  $('body').on('mouseover', '.dancer', function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });

});
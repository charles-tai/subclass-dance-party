$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineupButton").on("click", function() {
    var x = 0;
    var y = 0;
    window.dancers.forEach(function(item) {
      item.setPosition(y, x);
      x += 500;
    });
  });

  $(".checkPosition").on("click", function() {
    var dancers = window.dancers;
    for (var i = 0; i < dancers.length; i++) {
      for (var j = (i + 1); j < dancers.length; j++) {
        var diffY = dancers[i].top - dancers[j].top;
        var diffX = dancers[i].left - dancers[j].left;
        var hypotenuse = Math.sqrt((diffY * diffY) + (diffX * diffX));
        console.log('diffY: ' + diffY);
        console.log('diffX: ' + diffX);
        console.log('hypot: ' + hypotenuse);
        if (hypotenuse < 500) {
          alert('too close for comfort');
        }
      }
    }
  });
});


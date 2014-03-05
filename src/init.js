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
    var objDancers = {};
    var closest = Infinity;
    var closestPairValue = Infinity;
    var closestEdge = [];
    var closestPair = [];
    var currentClosestPair;
    for (var i = 0; i < dancers.length; i++) {
      for (var j = (i + 1); j < dancers.length; j++) {
        var diffY = dancers[i].top - dancers[j].top;
        var diffX = dancers[i].left - dancers[j].left;
        var hypotenuse = Math.sqrt((diffY * diffY) + (diffX * diffX));
        if (hypotenuse < closest) {
          closest = hypotenuse;
          closestDancer = dancers[j];
          // console.log('closest: ' + closest);
        }
        // console.log('diffY: ' + diffY);
        // console.log('diffX: ' + diffX);
        // console.log('hypot: ' + hypotenuse);
        if (hypotenuse < 500) {
          console.log('too close for comfort');
        }
      }
      // creating an array of edges
      // which consists of arrays that look like [dancerA, dancerB, closest]
      closestEdge.push([dancers[i], closestDancer, closest]);
      closest = Infinity;
    }
    //iterate through dancers check if it exists in each bucket of closestEdge
    // store dancers elements into an object:
    for (var i = 0; i < dancers.length; i++) {
      objDancers[i] = dancers[i];
    }
    console.log(objDancers)
    // loop through all Dancers
    for (var key in objDancers) {
      // console.log('object currently iterating on');
      // console.log(objDancers[key]);
      console.log('closetEdge');
      console.log(closestEdge);
      closestEdge.forEach(function (item) {
      // check if dancer matches current edge
        console.log('Dancer:')
        console.log(objDancers[key]);
        console.log('edge')
        console.log(item);
        if (objDancers[key] === item[0] || item[1]) {
          console.log('matched!')
          // if current edge has lower value than any other edge we've checked thus far
          if (item[2] < closestPairValue) {
            console.log('does this only run once?')
            closestPairValue = item[2];
            currentClosestPair = [item[0], item[1]];
            item[2] = Infinity;
          }
        }
      });
      closetPairValue = Infinity;
      // console.log('currentClosestPair push');
      // console.log(currentClosestPair);
      closestPair.push(currentClosestPair);
      // console.log('closestPair array:');
      // console.log(closestPair);


      for (var key in objDancers) {
        closestPair.forEach( function (item) {
          // console.log(objDancers[key]);
          // console.log(item);
          if (objDancers[key] === item[0] || item[1]) {
            delete objDancers[key];
          }
        });
      // console.log(objDancers);
      }
      currentClosestPair = undefined;
    }




    // console.log('closestPairValue: ' + closestPairValue);
    // console.dir(closestPair);
    // console.log(objDancers);
    // after finding closest pair,
  });
});



function newCar(newMake, newModel, newYear) {
  var speed= 0;
  return {
    make:newMake,
    model:newModel,
    year:newYear,
    getSpeed: function() { return speed;},
    accelerate: function() {
      while (speed < 88) {
        speed= speed + 10;}
      if (speed >= 88) {
        speed = 88;}
      },

    brake: function() {

      while (speed > 0){speed= speed + (Math.floor(Math.random()*(-50)));};
      if  (speed < 0){speed = 0; console.log(speed) }
     },
  }
};

var myCar =  newCar("Mini", "Convertible", 2001);

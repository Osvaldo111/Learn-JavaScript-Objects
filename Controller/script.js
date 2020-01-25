/**
 * Initialize the app
 */
function init() {
  // Get the Bttn submission
  var getBttn = document.getElementById("submitBttn");

  getBttn.addEventListener("click", event => {
    // Check all the fields.
    var carModel = document.getElementById("carModel").value;
    var carColor = document.getElementById("carColor").value;
    var carName = document.getElementById("carName").value;
    event.preventDefault();
    if (carName === "" || carColor === "" || carModel === "") {
      alert("Please enter all the values");
    } else {
      getBttn.disabled = "true";
      getBttn.innerHTML = "Results";
      displayObjectExplanation(carName, carModel, carColor);
    }
  });
}
init();

/**
 * Display explanation about object, methods and properties
 */
function displayObjectExplanation(carName, carModel, carColor) {
  function car(carName, carModel, carColor) {
    this.carName = carName;
    this.carModel = carModel;
    this.carColor = carColor;
  }

  //Inheritance
  function carMethods(carName, carModel, carColor) {
    car.call(this, carName, carModel, carColor);
    this.carAverageWeigth = "750 KG";
    this.carStart = function() {
      alert("Driving the Car!");
    };
    this.carStop = function() {
      alert("Stop the Car!");
    };
  }

  // Creating new Object
  var yourCar = new car(carName, carModel, carColor);

  var carMethodsObj = new carMethods(carName, carModel, carColor);

  // Display the Objects Properties
  document.getElementById("results").style.display = "block";
  document.getElementById("object").innerHTML = JSON.stringify(yourCar);
  document.getElementById("otherObject").innerHTML =
    JSON.stringify(carMethodsObj) +
    " ***With the function car.start() & car.stop()";

  // /Fire the new methods.
  document.getElementById("startCar").addEventListener("click", event => {
    event.preventDefault();
    carMethodsObj.carStart();
  });

  document.getElementById("stopCar").addEventListener("click", event => {
    event.preventDefault();
    carMethodsObj.carStop();
  });
}

function restart() {
  var restart = document.getElementById("restartBttn");
  restart.addEventListener("click", () => {});
}

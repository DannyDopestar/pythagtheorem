console.log("test");
//HYPOTENUSE EXERCISE
const calc = document.querySelector("#calculate");
calc.addEventListener("click", function () {
  let lego1 = document.querySelector("#leg1").value;
  console.log(lego1);
  let lego2 = document.querySelector("#leg2").value;
  console.log(lego2);
  let sq1 = lego1 ** 2 + lego2 ** 2;
  console.log(sq1);
  let divio = Math.sqrt(sq1);
  console.log(divio);
  document.querySelector("#answer").textContent = "Hypotenuse = " + divio;
});

//CIRCLE EXERCISE
const calc2 = document.querySelector("#findarea");
calc2.addEventListener("click", function () {
  let radiusjs = document.querySelector("#radius").value;
  console.log(radiusjs);
  let squario = radiusjs ** 2;
  console.log(squario);
  let squario2 = squario * Math.PI;
  console.log(squario2);
  document.querySelector("#answer2").textContent = "Area = " + squario2;
});
//SLOPE EXERCISE
const calc3 = document.querySelector("#findslope");
calc3.addEventListener("click", function () {
  let xx1 = document.querySelector("#x1").value;
  let yy1 = document.querySelector("#y1").value;
  let xx2 = document.querySelector("#x2").value;
  let yy2 = document.querySelector("#y2").value;
  let dy = yy2 - yy1;
  let dx = xx2 - xx1;
  let supra = dy / dx;
  console.log(supra);
  document.querySelector("#answer3").textContent = "SLOPE = " + supra;
});

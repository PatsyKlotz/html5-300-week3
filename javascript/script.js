//Write a function to determine if input is number or string.//


function myFunction() {
  var x, text;

  // Get the value of the input field with id="form-number"
  x = document.getElementById("form-number").value;

  // If x is Not a Number
  if (isNaN(x)) {
  text = "Input numbers only, please!";
  } else {
  text = "Input valid";
  }
  document.getElementById("numbers").innerHTML = text;
}
         

/*If input element is number, update the display to show how many numbers have been entered, the sum of numbers, and the average of numbers.-->*/





  /*function myFunction() {
    var x = document.getElementById("form-number").length;
    document.getElementById("numbers").innerHTML = x;
  }
*/
/*
<!--If input element is a string, concatenate it onto all of the other strings that have been entered. Display the number of strings that have been entered and the accumulated concatenation.
*/


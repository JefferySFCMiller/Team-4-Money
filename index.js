function testOnClick() {
    alert("I am testing the on click");
  }
  
  function testingConditional() {
    if(confirm("Do you want to proceed")) {
      alert("you have shown me your skills and want to proceed");
    } else {
      alert("Don't be that person, keep going");
    }
  }
  
  function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
      if ( i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if ( i % 5 === 0 ) {
        console.log("Buzz");
      } else if ( i % 3 === 0) {
        console.log("Fizz")
      } else {
        console.log(i);
      }
    }
    console.warn("I am finished with FizzBuzz, run me again");
  }
  
  function testOnChange() {
    var value = document.getElementById('testInput').value;
    document.getElementById('setValue').innerText = value;
  }
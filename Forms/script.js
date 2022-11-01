document.getElementById("myForm").onsubmit = function() {myFunction()};

function myFunction() {
  window.open("page2.html");
  return results
}


function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}


function validateForm() {
  let x = document.forms["feedBack"]["email"].value;
  if (x == "") {
    alert("All Fields Are Required");
    return false;
  }
}




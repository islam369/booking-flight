function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var flight = document.getElementById("flight").value;
    var date = document.getElementById("date").value;
    var passengers = document.getElementById("passengers").value;
    var cls = document.getElementById("class").value;
    var error = "";
    
    if (name === "") {
      error += "Please enter your name.\n";
    }
    
    if (email === "") {
      error += "Please enter your email.\n";
    }
    
    if (flight === "") {
      error += "Please select a flight.\n";
    }
    
    if (date === "") {
      error += "Please select a date.\n";
    }
    
    if (passengers === "") {
      error += "Please enter the number of passengers.\n";
    }
    
    if (cls === "") {
      error += "Please select a class.\n";
    }
    
    if (error !== "") {
      alert(error);
      return false;
    }
    
    return true;
  }

  function myFunction() {
    var txt;
    if (confirm("are you sure you want to book")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
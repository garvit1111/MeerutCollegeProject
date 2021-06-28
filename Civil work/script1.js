//hide("gen");
//hide("email");
//
//hide("contact");
//
//hide("submitfinal");
//hide("selectCurrency");
//hide("selectPass");

var name;
var password;
var vehicle;
var id;

function fname(item) {
  var key = this.event.keyCode;
  if (key == 13) {
    if (item.value.length > 0) {
      if (
        item.value.search(/[!@#$%^&*]+/) == -1 &&
        item.value.search(/[0-9]+/) == -1 &&
        item.value.length >= 2
      ) {
        item.style = "border:2px solid blue ";
        document.getElementById("errorname").innerHTML = " ";
        this.name = item.value;
        //item.style = "display:none ";
//        display("gen");
//        document.getElementById("genmessage").innerHTML =
//          "Hi " + item.value + ", please enter your gender ";
          alert( "Hi " + item.value + ", please enter your email ");
      } else {
        item.style = "border:2px solid red ";
        document.getElementById("errorname").innerHTML =
          "*Name must be >=2 characters and have only alphabets*";
      }
    } else {
      item.style = "border:2px solid red ";
      document.getElementById("errorname").innerHTML = "*please enter the name*";
    }
  }
}

//function fgender(item) {
//  var key = this.event.keyCode;
//  document.getElementById("emailmessage").innerHTML =
//    "Hi " + this.name + ", please enter your email ";
//  //hide("gen");
//  display("email");
//}

function femail(item) {
  var key = this.event.keyCode;
  if (key == 13) {
    if (item.value.length > 0) {
      if (item.value.search(/[a-zA-Z0-9]+[@]+[a-zA-Z]+[.]+[a-zA-Z]/) != -1) {
        item.style = "border:2px solid blue ";
        document.getElementById("emailerror").innerHTML = " ";
       // item.style = "display:none ";
//        document.getElementById("contact").style = "display:block";
//        display("contact");
//        document.getElementById("contactmessage").innerHTML =
//          "Hi " + this.name + ", enter contact number ";
          alert("Hi " + this.name + ", enter contact number ");
      } else {
        item.style = "border:2px solid red ";
        document.getElementById("emailerror").innerHTML =
          "*please enter valid email* ";
      }
    } else {
      item.style = "border:2px solid red ";
      document.getElementById("emailerror").innerHTML = "*please enter the email* ";
    }
  }
}

//function fpassword(item) {
//  var key = this.event.keyCode;
//  if (key == 13) {
//    if (item.value.length > 0) {
//      if (
//        item.value.search(/[0-9]+/) != -1 &&
//        item.value.search(/[!@#$%^&*(){}?><]+/) != -1 &&
//        item.value.search(/[A-Z]+/) != -1 &&
//        item.value.length >= 8
//      ) {
//        item.style = "border:2px solid blue ";
//        document.getElementById("error").innerHTML = " ";
//        password = item.value;
//        item.style = "display:none ";
//        display("confirmPassword");
//        document.getElementById("message").innerHTML =
//          "Hi " + this.name + ", confirm your password ";
//      } else {
//        item.style = "border:2px solid red ";
//        document.getElementById("error").innerHTML =
//          "password must be >=8 characters and also have any special character, and number ";
//      }
//    } else {
//      item.style = "border:2px solid red ";
//      document.getElementById("error").innerHTML = "please enter the password ";
//    }
//  }
//}

//function fconfirmPassword(item) {
//  var key = this.event.keyCode;
//  if (key == 13) {
//    if (item.value.length > 0) {
//      if (password == item.value) {
//        item.style = "border:2px solid blue ";
//        document.getElementById("error").innerHTML = " ";
//        item.style = "display:none ";
//        document.getElementById("contact").style = "display:block";
//        display("contact");
//        document.getElementById("message").innerHTML =
//          "Hi " + this.name + ", enter contact number ";
//      } else {
//        document.getElementById("error").innerHTML = " password not matched";
//      }
//    } else {
//      item.style = "border:2px solid red ";
//      document.getElementById("error").innerHTML = "please enter the password ";
//    }
//  }
//}

function fcontact(item) {
  var key = this.event.keyCode;
  if (key == 13) {
    if (item.value.length > 0) {
      var pattern = new RegExp("[789][0-9]{9}");
      if (pattern.test(item.value) && item.value.length > 8) {
        item.style = "border:2px solid blue ";
        document.getElementById("contacterror").innerHTML = " ";
        //item.style = "display:none ";
//         display("selectCurrency");
//        document.getElementById("currencymessage").innerHTML =
//          "Hi " + this.name + ", select currency to Pay ";
          alert("Hi " + this.name + ", select currency to Pay ");
          
      } else {
        item.style = "border:2px solid red ";
        document.getElementById("contacterror").innerHTML =
          "*please enter valid contact number* ";
      }
    } else {
      item.style = "border:2px solid red ";
      document.getElementById("contacterror").innerHTML =
        "*please enter the contact number* ";
    }
  }
}

//function fvehicleCompany(item) {
//  var key = this.event.keyCode;
//  if (key == 13) {
//    if (item.value.length > 0) {
//      if (
//        item.value.search(/[!@#$%^&*]+/) == -1 &&
//        item.value.search(/[0-9]+/) == -1
//      ) {
//        item.style = "border:2px solid blue ";
//        document.getElementById("error").innerHTML = " ";
//        item.style = "display:none ";
//        display("model");
//        document.getElementById("message").innerHTML =
//          "Hi " + this.name + ", enter your vehicle model ";
//      } else {
//        item.style = "border:2px solid red ";
//        document.getElementById("error").innerHTML =
//          "please enter valid vehicle company Name ";
//      }
//    } else {
//      item.style = "border:2px solid red ";
//      document.getElementById("error").innerHTML =
//        "please enter the company name ";
//    }
//  }
//}

//function fvehicleType(item) {
//  var key = this.event.keyCode;
//  document.getElementById("error").innerHTML = " ";
//  item.style = "display:none ";
//  display("number");
//  vehicle = item.value;
//  document.getElementById("message").innerHTML =
//    "Hi " + this.name + ", enter your vehicle number ";
//}

//function fvehicleModel(item) {
//  var key = this.event.keyCode;
//  if (key == 13) {
//    if (item.value.length > 0) {
//      if (item.value.length > 2) {
//        item.style = "border:2px solid blue ";
//        document.getElementById("error").innerHTML = " ";
//        item.style = "display:none ";
//        display("type");
//        document.getElementById("message").innerHTML =
//          "Hi " + this.name + ", select your vehicle type ";
//      } else {
//        item.style = "border:2px solid red ";
//        document.getElementById("error").innerHTML =
//          "please enter valid vehicle Model more than 2 characters ";
//      }
//    } else {
//      item.style = "border:2px solid red ";
//      document.getElementById("error").innerHTML =
//        "please enter the vehicle model ";
//    }
//  }
//}

//function fvehicleNumber(item) {
//  var key = this.event.keyCode;
//  if (key == 13) {
//    if (item.value.length > 0) {
//      const pattern = new RegExp("[A-Za-z]{2}[0-9]{2}[A-Za-z]{2}[0-9]{4}");
//      if (item.value.length > 4 && pattern.test(item.value)) {
//        item.style = "border:2px solid blue ";
//        document.getElementById("error").innerHTML = " ";
//        item.style = "display:none ";
//        display("empid");
//        document.getElementById("message").innerHTML =
//          "Hi " + this.name + ", Enter your Employee ID ";
//      } else {
//        item.style = "border:2px solid red ";
//        document.getElementById("error").innerHTML =
//          'please enter valid vehicle number like "RJ14GJ4509" ';
//      }
//    } else {
//      item.style = "border:2px solid red ";
//      document.getElementById("error").innerHTML =
//        "please enter the vehicle number ";
//    }
//  }
//}
//function fid(item) {
//  var key = this.event.keyCode;
//  if (key == 13) {
//    if (item.value.length > 0) {
//      item.style = "border:2px solid blue ";
//      document.getElementById("error").innerHTML = " ";
//      item.style = "display:none ";
//      display("identification");
//      id = item.value;
//      document.getElementById("message").innerHTML =
//        "Hi " + this.name + ", more about vehicle ";
//    } else {
//      item.style = "border:2px solid red ";
//      document.getElementById("error").innerHTML = "please enter Employee ID ";
//    }
//  }
//}

//function fvehicleIdentication(item) {
//  var key = this.event.keyCode;
//  if (key == 13) {
//    if (item.value.length > 0) {
//      if (item.value.length > 4) {
//        item.style = "border:2px solid blue ";
//        document.getElementById("error").innerHTML = " ";
//        item.style = "display:none ";
//        display("selectCurrency");
//        document.getElementById("message").innerHTML =
//          "Hi " + this.name + ", select currency to Pay ";
//      } else {
//        item.style = "border:2px solid red ";
//        document.getElementById("error").innerHTML =
//          "please enter valid vehicle identifications more than 4 characters";
//      }
//    } else {
//      item.style = "border:2px solid red ";
//      document.getElementById("error").innerHTML = "please enter the value ";
//    }
//  }
//}

function hide(idName) {
  document.getElementById(idName).style = "display:none ";
}

function display(idName) {
  document.getElementById(idName).style = "display:block ";
}

function currencyTypeChange(item) {
//  var currency = item.value;
 {
    
      document.getElementById("passCost").value = "0.07 $";
      document.getElementById("dailyPass").innerHTML = "Daily 300 RS";
      document.getElementById("monthlyPass").innerHTML =
        "Weekly 1800 RS";
      document.getElementById("yearlyPass").innerHTML = "Monthly 7000 RS";
      
  
    
      //else if (vehicle == "Motor Cycle") {
//      document.getElementById("passCost").value = "0.14 $";
//      document.getElementById("dailyPass").innerHTML = "Daily Parking 10 RS";
//      document.getElementById("monthlyPass").innerHTML =
//        "Monthly Parking 200 RS";
//      document.getElementById("yearlyPass").innerHTML =
//        "Yearly Parking 1000 RS";
//    } else if (vehicle == "Four Wheeler") {
//      document.getElementById("passCost").value = "0.28 $";
//      document.getElementById("dailyPass").innerHTML = "Daily Parking 20 RS";
//      document.getElementById("monthlyPass").innerHTML =
//        "Monthly Parking 500 RS";
//      document.getElementById("yearlyPass").innerHTML =
//        "Yearly Parking 3500 RS";
//    }
      
      
  } 
//    else if (currency == "USD") {
    
//      document.getElementById("passCost").value = "0.07 $";
//      document.getElementById("dailyPass").innerHTML = "Daily  0.07 $";
//      document.getElementById("monthlyPass").innerHTML =
//        "Weekly 1.4 $";
//      document.getElementById("yearlyPass").innerHTML = "Monthly 7.0 $";
//     
    //  else if (vehicle == "Motor Cycle") {
//      document.getElementById("passCost").value = "0.14 $";
//      document.getElementById("dailyPass").innerHTML = "Daily Parking 0.14 $";
//      document.getElementById("monthlyPass").innerHTML =
//        "Monthly Parking 2.8 $";
//      document.getElementById("yearlyPass").innerHTML = "Yearly Parking 14.0 $";
//    } else if (vehicle == "Four Wheeler") {
//      document.getElementById("passCost").value = "0.28 $";
//      document.getElementById("dailyPass").innerHTML = "Daily Parking 0.28 $";
//      document.getElementById("monthlyPass").innerHTML =
//        "Monthly Parking 7.14 $";
//      document.getElementById("yearlyPass").innerHTML = "Yearly Parking 50$";
//    }
//  } else if (currency == "YEN") {
//   
//      document.getElementById("passCost").value = " 0.07 $";
//      document.getElementById("dailyPass").innerHTML = "Daily  7 YEN";
//      document.getElementById("monthlyPass").innerHTML =
//        "Weekly  150 YEN";
//      document.getElementById("yearlyPass").innerHTML =
//        "Monthly  1500 YEN";
    
//      else if (vehicle == "Motor Cycle") {
//      document.getElementById("passCost").value = "0.14 $";
//      document.getElementById("dailyPass").innerHTML = "Daily Parking 14 YEN";
//      document.getElementById("monthlyPass").innerHTML =
//        "Monthly Parking 300 YEN";
//      document.getElementById("yearlyPass").innerHTML =
//        "Yearly Parking 3000 YEN";
//    } else if (vehicle == "Four Wheeler") {
//      document.getElementById("passCost").value = "0.28 $";
//      document.getElementById("dailyPass").innerHTML = "Daily Parking 30 YEN";
//      document.getElementById("monthlyPass").innerHTML =
//        "Monthly Parking 750 YEN";
//      document.getElementById("yearlyPass").innerHTML =
//        "Yearly Parking 5250 YEN";
//    }
//  }
  document.getElementById("message").innerHTML =
    "Hi " + this.name + ", choose your plan ";
  //hide("selectCurrency");
  display("selectPass");
}

function passTypeChange(item) {
  var x = item.selectedIndex;
  if (x == 1) {
    
      document.getElementById("passCost").value = "300 Rs";
   
//      document.getElementById("passCost").value = "0.14 $";
//   
//      document.getElementById("passCost").value = "0.28 $";
    
  } else if (x == 2) {
   
      document.getElementById("passCost").value = "1800 Rs";
    
//      document.getElementById("passCost").value = "2.8 $";
//    
//      document.getElementById("passCost").value = "7.14 $";
    }
   else if (x == 3) {
   
      document.getElementById("passCost").value = "7000 Rs";
   
//      document.getElementById("passCost").value = "14 $";
//  
//      document.getElementById("passCost").value = "50 $";
    
  }
  document.getElementById("selectpassmessage").innerHTML =
    "Hi " +

    " you have to Pay " +
    document.getElementById("passCost").value;
    
    alert("Hi " +
    
    " you have to Pay " + 
    document.getElementById("passCost").value);
 // hide("selectPass");
  display("submitfinal");
}

document.getElementById("button2").addEventListener("click", function(event){
  event.preventDefault()
//    if( document.getElementById("employeeName").value == "" || document.getElementById("employeeEmail").value == "" || document.getElementById("employeeContact").value == "" || document.getElementById("city").value == "" || document.getElementById("currency").value == "" || document.getElementById("passType").value == ""){
//        alert("Please fill all the fields");
//       
//       } else {
            alert("thank you for registration We will soon contact You" );
    location.href = "index.html";
           
       //}
    
    
   
});
document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault()
   
            alert("thank you, We will soon contact You" );
    location.href = "index.html";
           
       
    
    
   
});




//function successful() {
//  alert("thank you for registration We will soon contact You" );
//  
//    location.href = "Thanku.html";
//    // window.location.replace = "Thanku.html";
//    
//
//  //hide("submitfinal");
// // hide("headingofemployeeregistration");
//}

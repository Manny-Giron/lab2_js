// create function that checks if two strings that users input are equal
function checkEquality() {
   var str1 = document.getElementById("str1");
   var str2 = document.getElementById("str2");
   var msg = document.getElementById("msg");

   // if equal, print that they are equal
   if (str1.value == str2.value) {
      msg.innerHTML = "The strings are equal";
   }
   // otherwise, print they are not equal
   else {
      msg.innerHTML = "The strings are not equal";
   }
}

function sumLength() {
   var str1 = document.getElementById("str1");
   var str2 = document.getElementById("str2");
   var msg = document.getElementById("msg");
   var lengthSum = str1.value.length + str2.value.length;
   // otherwise, print they are not equal
   msg.innerHTML = "String sum length = " + lengthSum;
}


button = document.getElementById("check-button");
buttonSum = document.getElementById("sum-length");
button.addEventListener("click", checkEquality);
buttonSum.addEventListener("click", sumLength);

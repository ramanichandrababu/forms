function myFunction(email_id) {
  var passcode = document.getElementById("valid1").value;
  var res =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email_id.value.match(res)&&passcode!="")
  {

  alert("Valid Email Id and password!");
  document.form1.text1.focus();
   return true;
   }
  else
  {
   alert("Invalid Email Id or password!");
  document.form1.text1.focus();
return false;
}}
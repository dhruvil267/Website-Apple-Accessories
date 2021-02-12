
var obj=JSON.parse(localStorage.getItem('contactInfo'));

var logOut=document.getElementById('for-color');
var usrId=document.getElementById('loginId');
usrId.innerHTML="Welcome " +obj.username;
logOut.textContent="LOGOUT";

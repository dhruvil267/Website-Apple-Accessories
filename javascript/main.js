function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }





  var users=[
    {
    name:"dhruvil",
    pwd:"Dhruvil123"
     },
     {
      name:"admin",
     pwd:"admin"
    } 
];

  var sub=document.getElementById('subMit');
 
  sub.addEventListener('click',function(){
    var pwd1=document.getElementById('passWord').value;
    var usr=document.getElementById('userName').value;    
    let found=false;
    for(var i=0;i<users.length;i++){

      if(usr==users[i].name && pwd1==users[i].pwd)
      {
        window.open("./home.html");
      found=true;
      
      }
    }
      if(!found)
      {
        alert('Incorrect Username or Password .Please Re-enter !!!');
      }
      var contactObj={
        'username':usr,
        };
      localStorage.setItem('contactInfo',JSON.stringify(contactObj));
      
     
    
})


  




 





















































//..................................... Search Bar for I-Phone..............................
// function myFunction() {
//     var input, filter, divMain, divIn, look, i, txtValue;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     divMain = document.getElementById("mobile-3");
//     divIn = divMain.getElementsByTagName("div");

//     for (i = 0; i < divIn.length; i++) {
//         look = divIn[i].getElementsByTagName("h3")[0];
//         txtValue = look.textContent || look.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
         
//            divIn[i].style.display = "";
//         } else {
//             divIn[i].style.display = "none";
//         }
//     }
// }

//..................................... Search Bar for samsung..............................

// function myFunction2() {
//   var input, filter, divMain, divIn, look, i, txtValue;
//   input = document.getElementById("search2");
//   filter = input.value.toUpperCase();
//   divMain = document.getElementById("Samsung");
//   divIn = divMain.getElementsByTagName("div");

//   for (i = 0; i < divIn.length; i++) {
//       look = divIn[i].getElementsByTagName("h3")[0];
//       txtValue = look.textContent || look.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
       
//          divIn[i].style.display = "";
//       } else {
//           divIn[i].style.display = "none";
//       }
//   }
// }
// .................................................LOGIN and REGISTRATIO VALIDATION....................................


// ................................................................GOOGLE MAP...................................................

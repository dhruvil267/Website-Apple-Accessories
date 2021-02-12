

document.addEventListener("DOMContentLoaded", function(){

var search = document.getElementById("search");
var divMain = document.querySelectorAll(".mobile-3 div");
		search.addEventListener("keyup", function(e){	
		let term = e.target.value.toLowerCase();
		Array.from(divMain).forEach((iphone)=>{
		 let look = iphone.textContent.toLowerCase();
			if(look.indexOf(term) != -1){
				iphone.style.display = "block";
				
			}else{
				iphone.style.display = "none";
				
			}
		})
	})
	
})

   


var atcBtn = document.querySelectorAll('#i-btn');
let allItems = '';
var cartBtn = document.getElementById('cart-btn');
var noneDiv = document.querySelector('#noneDiv');
var checkout = document.querySelector('#checkout');
var checkbtn = document.querySelector('.ckout');
var leftbtn = checkout.querySelector('.go_back');
cartBtn.onclick = function () {

        noneDiv.classList.toggle('cartOpen');

        checkbtn.onclick = function () {
               

                checkout.style.display = "block";
                leftbtn.onclick = function () 
                {
                        checkout.style.display = "none";
                }
        }
}

var notification=document.querySelector('#notification');

var count=1;
atcBtn.forEach(function (btn) {
        btn.onclick = function () {

                notification.innerText=count++;
               

                var name = btn.parentElement.querySelector('h3').innerText;
                var price = btn.parentElement.querySelector('h1').innerText;
                var imgSrc = btn.parentElement.querySelector('img').src;
               


                let temp = `
                <div class="noneTempStyle">
                <div><img style="width:70px;height:70px" src="${imgSrc}"></div>
                <div><h3>${name} </h3></div>
                <div> <h3>${price}</h3></div>
                <div> <input type="button" id="btn-remove" value="REMOVE"></div>
                </div>`

                noneDiv.innerHTML += temp;      
                var btn_remove = document.querySelectorAll('#btn-remove');
                btn_remove.forEach(function (r_btn) {
                        r_btn.onclick = function () {
                                r_btn.parentElement.parentElement.remove();
                                notification.innerText= notification.innerText-1;

                        }
                })

                var show = noneDiv.querySelector('.ckout');
                show.onclick = function () 
                {
                        checkout.style.display = "block";
                        leftbtn.onclick = function () 
                        {
                                checkout.style.display = "none";
                        }

                }


        }

});





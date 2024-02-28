function appear(){
				document.getElementsByClassName("links-list")[0].style.display = "block";
				document.getElementById("typeracing").style.visibility = "hidden";
				document.getElementById("starting-block").innerHTML = ("")
				document.getElementById("ending-block").style.visibility = "block";
				document.getElementById("terminal").style.display = "block";
				
				var ele = document.getElementById('typeracing');
        			ele.remove();
     				

	var blink_speed = 1000;
	var t = setInterval(function () {
    var ele = document.getElementById('ending-block');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);
			}




ImageArray = new Array();
			ImageArray[0] = 'profile_1.jpg';
			ImageArray[1] = 'profile_2.jpg';
			
			function getRandomImage(){
				var num = Math.floor( Math.random() * 2);
				var img = ImageArray[num];
				document.getElementById("randImage").innerHTML = ('<img id="pfp" src="' + 'images/' + img + '">')
			}

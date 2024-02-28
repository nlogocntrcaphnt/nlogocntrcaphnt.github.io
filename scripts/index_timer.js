

const startingMinutes = 3;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('timer');


setInterval(updateCountdown, 1000);

function updateCountdown(){
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = Math.abs(seconds)
	seconds = seconds < 10 ? '0' + seconds : seconds; 
				

	countdownEl.innerHTML = `${minutes}:${seconds}`;

	time--;
	if(minutes < 0){
	document.getElementById("warning_text").innerHTML = "You're runnin' on borrowed time here<br> mate.";
	}
}

var video = document.getElementById('player1');
var volume = document.getElementById('volume');
var slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = slider.value + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New speed is ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 >= video.duration) {
		video.currentTime = 0;
	}
	else video.currentTime += 15;
	console.log("New time is ", video.currentTime);
});

var mute = document.querySelector("#mute");

mute.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		mute.innerHTML = "Mute";
		console.log("Unmute the video");
	}
	else {
		video.muted = true;
		mute.innerHTML = "Unmute";
		console.log("Mute the video");
	}
});

slider.addEventListener("click", function() {
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
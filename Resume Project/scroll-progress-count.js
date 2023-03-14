let progressBar = document.getElementsByClassName("scroll-progress-bar")[0];
let scrolledBar = document.getElementById("scrolled");
let temp = 0;

// This function will return the maximum of the following
function getDocHeight() {
	let D = document;
	return Math.max(
		D.body.scrollHeight,
		D.body.offsetHeight,
		D.body.clientHeight
	);
}

let docHeight = getDocHeight();
let windowHeight = window.innerHeight;

window.onresize = function (e) {
	docHeight = getDocHeight();
	windowHeight = window.innerHeight;
};

function setScrolled() {
	let scrolled = Math.floor(
		(window.scrollY / (docHeight - windowHeight)) * 100
	);
	if (scrolled === 99) {
		scrolled = 100;
	}
	scrolledBar.innerText = scrolled;
	progressBar.style.width = Math.floor(scrolled) + "%";
}

window.addEventListener("scroll", setScrolled);
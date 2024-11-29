// Start My Method Inshaalah .
window.onload = function(){
	alert("This is page Under Created")
}
// Start Collecting Information


// Get Slider Items

let sliderItems = Array.from(document.querySelectorAll(".siderImages img"));
console.log(sliderItems);

// Get Slider bullets

let slideBullets = sliderItems.length;
console.log(slideBullets);

// Set Current Index
let currentIndex = 1;

// Previous And Next Buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Trigger The Checker Function
// checker();
// Next Slide Function
function nextSlide() {
	if (nextButton.classList.contains("disabled")) {
		return false;
	} else {
		console.log("Next");
		currentIndex++;
		checker();
	}
}

// prev Slide Function
function prevSlide() {
	if (prevButton.classList.contains("disabled")) {
		return false;
	} else {
		console.log("Prev");
		currentIndex--;
		checker();
	}
}

// Get Bullets Parent
let bullets = document.getElementById("bullets");

// For To Create Bullets Child
for (let i = 1; i <= slideBullets; i++) {
	let bulletsChild = document.createElement("span");

	// Set Classes to Child
	bulletsChild.setAttribute("data-index", i);

	bullets.appendChild(bulletsChild);
}
console.log(bullets);
let bulletsSpan = Array.from(document.querySelectorAll("#bullets span"));
// Loop For Bullets Change
for (let i = 0; i < bulletsSpan.length; i++) {
	bulletsSpan[i].onclick = function () {
		currentIndex = parseInt(this.getAttribute("data-index"));
    checker();
	};
}

// Loop For Bullets Change

console.log(bulletsSpan);
console.log(bullets.children);
checker();
// Create Checker Function
function checker() {
	removeAllActive();

	// Set Class Active On  Bullets Slide
	bullets.children[currentIndex - 1].classList.add("active");

	// Set Class Active On Iamges Slide
	sliderItems[currentIndex - 1].classList.add("active");

	// Check if Current Slide First Slide
	if (currentIndex == 1) {
		// Add Disabled Class On Previous Button
		prevButton.classList.add("disabled");
	} else {
		prevButton.classList.remove("disabled");
	}

	// Check if Current Slide Last Slide
	if (currentIndex == slideBullets) {
		// Add Disabled Class On Next Button
		nextButton.classList.add("disabled");
	} else {
		nextButton.classList.remove("disabled");
	}
}

// Remove All Active Classes From Images And Bullets

function removeAllActive() {
	sliderItems.forEach(function (img) {
		img.classList.remove("active");
	});

	bulletsSpan.forEach(function (bullet) {
		bullet.classList.remove("active");
	});
}

console.log(bulletsSpan);
// Start Collecting Information

// End My Method Inshaalah .


alert("javascript is running");

//SLIDESHOW
let currentIndex = 0;

const images = [
  "images/IMG-20240313-WA0005.jpg",
  "images/IMG-20240313-WA0004.jpg",
  "images/IMG-20240313-WA0003.jpg",
  "images/IMG-20240313-WA0002.jpg"
];

function showImage(){
  document.getElementById("slideimage").src = images[currentIndex];
}

function NextImage(){
    currentIndex = (currentIndex + 1)% images.length;
    showImage();
}

function PreviousImages(){
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    showImage();
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(NextImage, 3000); //change every 3 seconds
});

// Form Validation
document.getElementById("prayerForm").onsubmit = function(event) {
  event.preventDefault();

  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const request = document.getElementById("prayer-request").value.trim();

  let isValid = true;

  // clear errors
  document.getElementById("firstnameError").innerText = "";
  document.getElementById("lastnameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("prayerError").innerText = "";

  // patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const textPattern = /^[a-zA-Z0-9\s.,?!'"()-]+$/;

  // validate name
  if (firstname === "") {
    document.getElementById("firstnameError").innerText = "FirstName is required.";
    isValid = false;
  } else if (firstname.length < 3) {
    document.getElementById("firstnameError").innerText = "Name must be at least 3 characters.";
    isValid = false;
  }

if (lastname === ""){
    document.getElementById("lastnameError").innerText = "LastName is required.";
    isValid = false;
  } else if (lastname.length < 3) {
    document.getElementById("lastnameError").innerText = "Name must be at least 3 characters.";
    isValid = false;
  }

  // validate email
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    isValid = false;
  }

  // validate request
  if (request === "") {
    document.getElementById("prayerError").innerText = "Prayer request is required.";
    isValid = false;
  } else if (request.length < 10) {
    document.getElementById("prayerError").innerText = "Must be more than 10 characters.";
    isValid = false;
  } else if (!textPattern.test(request)) {
    document.getElementById("prayerError").innerText = "Invalid characters used.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
};

// textarea border live feedback
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("prayer-request");
  const textPatternLive = /^[a-zA-Z0-9\s.,?!'"()-]+$/;

  textarea.addEventListener('input', e => {
    const value = e.target.value.trim();

    if (value.length >= 10 && textPatternLive.test(value)) {
      e.target.classList.add('success');
      e.target.classList.remove('error');
    } else {
      e.target.classList.add('error');
      e.target.classList.remove('success');
    }
  });
});

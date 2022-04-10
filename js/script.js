var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// COUNTING ANIMATION FOR STATISTICS
function animateValue(id, start, end, duration, step) {
  var obj = document.getElementById(id);
  if(!obj) return;
  if(!step) step = 1;
  var range = end - start;
  var current = start;
  var increment = end > start ? step : -step;
  var stepTime = Math.abs(Math.floor((duration * step) / range));
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}


animateValue("js-number-reached", 0, 6, 6000, 1000);
animateValue("js-number-countries", 0, 117, 6000);
animateValue("js-number-chapters", 0, 110, 6000);
animateValue("value4", 0, 5, 6000);
animateValue("value5", 0, 181, 6000);
animateValue("value6", 0, 1000, 6000);
animateValue("js-conf-registration-reach", 0, 2550, 3000, 50);
animateValue("js-conf-country-reach", 0, 78, 3000);
animateValue("js-conf-states-reach", 0, 47, 3000);


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
// }

// window.addEventListener(
//   "DOMContentLoaded",
//   function(e) {
//     var stage = document.getElementById("stage");
//     var fadeComplete = function(e) {
//       stage.appendChild(arr[0]);
//     };
//     var arr = stage.getElementsByTagName("a");
//     for (var i = 0; i < arr.length; i++) {
//       arr[i].addEventListener("animationend", fadeComplete, false);
//     }
//   },
//   false
// );

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $("section");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".conference-event-card");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageTop - $(window).height() + $(tag).height() + 100) {
      // console.log(i, $(tag).position().top)
      // console.log(i, pageTop - $(window).height());
      $(tag).addClass("bigger");
    } else {
      $(tag).removeClass("bigger");
    }
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

function myFunction() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2FCopy%20of%20_DSC9065.jpg?v=1578213090179";
}
function myFunction1() {
  if (document.getElementById("e1").innerHTML == "12:00 AM Midnight Bonding") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_17_4294166174.png?v=1579564502918";
  } else {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_3_5652959377.png?v=1579563403899";
  }
}
function myFunction2() {
  if (
    document.getElementById("e2").innerHTML ==
    "08:00 AM Breakfast / Devpost Submissions"
  ) {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_19_3385343935.png?v=1579568184577";
  } else {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_5_6965609634.png?v=1579563529085";
  }
}
function myFunction3() {
  if (
    document.getElementById("e3").innerHTML == "8:30 AM Judging Begins & Demos"
  ) {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_22_7682136208.png?v=1579568190581";
  } else {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_7_6910449613.png?v=1579563899065";
  }
}
function myFunction4() {
  if (document.getElementById("e4").innerHTML == "11:30 AM Closing Ceremony") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_24_2170560112.png?v=1579568195116";
  } else {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_9_6018396106.png?v=1579564026624";
  }
}
function myFunction5() {
  if (document.getElementById("e5").innerHTML == "12:00 PM Hackathon Ends") {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_26_5944282595.png?v=1579568201763";
  } else {
    document.getElementById("schedimg").src =
      "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_11_7961851277.png?v=1579564488160";
  }
}
function myFunction6() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_11_7961851277.png?v=1579564488160";
}
function myFunction7() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_13_4944759940.png?v=1579564493692";
}
function myFunction8() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_15_8919423352.png?v=1579564497962";
}
function myFunction9() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_17_4294166174.png?v=1579564502918";
}

function myFunctionSat() {
  document.getElementById("e6").style.display = "block";
  document.getElementById("e7").style.display = "block";

  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_3_5652959377.png?v=1579563403899";
  document.getElementById("e0").innerHTML = "Saturday Schedule";
  document.getElementById("e1").innerHTML = "10:00 AM Attendee Check-In";
  document.getElementById("e2").innerHTML = "10:45 AM Opening Ceremony";
  document.getElementById("e3").innerHTML = "11:15 AM Team forming";
  document.getElementById("e4").innerHTML = "12:00 PM Attendee Lunch";
  document.getElementById("e5").innerHTML = "12:30 PM - 7:00 PM Workshops";
  document.getElementById("e6").innerHTML = "07:15 PM Attendee Dinner";
  document.getElementById("e7").innerHTML = "07:30 PM Women In Tech Panel";
}

function myFunctionSunday() {
  document.getElementById("schedimg").src =
    "https://cdn.glitch.com/696a54c7-e493-465b-b503-c49262ef99ac%2Fimageedit_17_4294166174.png?v=1579564502918";
  document.getElementById("e0").innerHTML = "Sunday Schedule";
  document.getElementById("e1").innerHTML = "12:00 AM Midnight Bonding";
  document.getElementById("e2").innerHTML =
    "08:00 AM Breakfast / Devpost Submissions";
  document.getElementById("e3").innerHTML = "8:30 AM Judging Begins & Demos";
  document.getElementById("e4").innerHTML = "11:30 AM Closing Ceremony";
  document.getElementById("e5").innerHTML = "12:00 PM Hackathon Ends";
  document.getElementById("e6").style.display = "none";
  document.getElementById("e7").style.display = "none";
}

var myVar;
function myFunction1000() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("everything").style.display = "block";
  document.getElementById("headerwork").style.height = "100vh";
  showConferenceTimer();
}

function showConferenceTimer() {
  var timer = document.getElementById("conference-countdown");
  var fmt = function(n) { return n > 9 ? n : "0" + n };
  if(timer) {
    setInterval(function() {
      var conferenceDate = new Date(2021, 7, 11, 23, 59, 59);
      var now = new Date();
      var diff = conferenceDate.getTime() - now.getTime();
      var days = Math.floor(diff / (1000 * 3600 * 24));
      var hours = Math.floor(diff / (1000 * 3600)) - days * 24;
      var minutes = Math.floor(diff / (1000 * 60)) - (days * 24 * 60) - (hours * 60);
      var seconds = Math.floor(diff / (1000)) - (days * 24 * 3600) - (hours * 3600) - (minutes * 60);
      timer.innerHTML = fmt(days) + ":" + fmt(hours) + ":" + fmt(minutes) + ":" + fmt(seconds);
    }, 1000)
  }
}
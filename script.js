// MOBILE NAVBAR TURNS INTO HAMBURGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// HOVER OVERLAY
const exhibition = document.querySelector(".exhibition");
const exhibitionOverlay = document.querySelector(".exhibition-overlay");

[exhibition, exhibitionOverlay].forEach((element) => {
  element.addEventListener("mouseenter", () => {
    exhibitionOverlay.style.cssText = "right: 0";
  });
  element.addEventListener("mouseleave", () => {
    exhibitionOverlay.style.cssText = "right: -100%";
  });
});

const eventevent = document.querySelector(".event");
const eventOverlay = document.querySelector(".event-overlay");

[eventevent, eventOverlay].forEach((element) => {
  element.addEventListener("mouseenter", () => {
    eventOverlay.style.cssText = "right: 0";
  });
  element.addEventListener("mouseleave", () => {
    eventOverlay.style.cssText = "right: -100%";
  });
});

const library = document.querySelector(".library");
const libraryOverlay = document.querySelector(".library-overlay");

[library, libraryOverlay].forEach((element) => {
  element.addEventListener("mouseenter", () => {
    libraryOverlay.style.cssText = "right: 0";
  });
  element.addEventListener("mouseleave", () => {
    libraryOverlay.style.cssText = "right: -100%";
  });
});

// FOOTER NAVBAR SLIDEUP
const toggle = document.querySelector(".toggle");
const noDisplay = document.querySelector(".nodisplay");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  noDisplay.classList.toggle("active");
});

/*

 
// JQUERY VERSION

//mobile navbar
$(".hamburger").click(() => {
  $(".hamburger, .nav-menu").toggleClass("active");
});
//hover overlay

$(".exhibition, .exhibition-overlay ")
  .mouseenter(() => {
    $(".exhibition-overlay").css("right", "0");
  })
  .mouseleave(() => {
    $(".exhibition-overlay").css("right", "-100%");
  });

$(".event, .event-overlay ")
  .mouseenter(() => {
    $(".event-overlay").css("right", "0");
  })
  .mouseleave(() => {
    $(".event-overlay").css("right", "-100%");
  });

$(".library, .library-overlay ")
  .mouseenter(() => {
    $(".library-overlay").css("right", "0");
  })
  .mouseleave(() => {
    $(".library-overlay").css("right", "-100%");
  });

//footer navbar

$(".toggle").click(() => {
  $(".toggle, .nodisplay").toggleClass("active");
}) */

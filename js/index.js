



var timeout;
document.addEventListener("DOMContentLoaded", function () {
  // Your GSAP animation code here
  gsap.to("h1, h2, a", {
    y: 0,
    duration: 1.2,
    ease: "expo.easeInOut", // Use single quotes or double quotes around 'expo.easeInOut'
  });

  document.querySelectorAll(".selem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: "power3.inOut", // Correct ease reference
        duration: 0.5,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: "power3.inOut", // Correct ease reference
        top: diff,
        duration: 0.5,
        left: dets.clientX,
        rotation: gsap.utils.clamp(-20, 20, diffrot * 0.5), // Correct property name to rotation
      });
    });
  });
});

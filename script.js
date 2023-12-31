// import { gsap } from "gsap";
// gsap.registerPlugin(SplitText);
// var split = new SplitText(".bio", { type: "chars" });
gsap.registerPlugin(ScrollToPlugin);
$(window).on("load", function () {
  var $loadingWrapper = $(".loading_wrapper"),
    $loadingInnerContent = $(".loading-inner-content");
  $loadingInnerContent.on("mousemove touchmove scroll", function (e) {
    if (e.clientX > $loadingWrapper.width() / 2) {
      TweenMax.to($loadingWrapper, 2, {
        scrollTo: {
          x: "+=175",
        },
        ease: Power2.easeOut,
      });
    } else {
      TweenMax.to($loadingWrapper, 2, {
        scrollTo: {
          x: "-=175",
        },
        ease: Power2.easeOut,
      });
    }
  });
});

gsap.from(".intro", { duration: 1, y: "-80%", ease: "expoScale(0.5,7,none)" });
gsap.from(".button1", {
  duration: 1,
  x: -450,
  opacity: 0,
  ease: "none",
  stagger: 0.2,
  delay: 1.2,
});
gsap.from(".button2", {
  duration: 1,
  x: 450,
  opacity: 0,
  ease: "none",
  stagger: 0.2,
  delay: 1.2,
});
gsap.from(".links", {
  opacity: 0,
  duration: 1,
  y: 400,
  ease: "expoScale(0.5,7,none)",
  delay: 2.3,
});
gsap.from(".img", {
  opacity: 0,
  duration: 2,
  ease: "expoScale(0.5,7,none)",
  delay: 3.3,
});
document.querySelectorAll("ul li").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(btn, {
      duration: 1,
      ease: "bounce.out",
      y: "#section" + (index + 1),
      offsetY: 70,
    });
    gsap.to(btn, {
      duration: 1,
      ease: "bounce.out",
      y: 0,
      delay: 1,
    });

    gsap.to(window, {
      duration: 1,
      delay: 1,
      scrollTo: { y: "#section" + (index + 1), offsetY: 70 },
    });
  });
});
function home() {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#home", offsetY: 70 },
  });
}
function projects() {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#section2", offsetY: 70 },
  });
}
// gsap.registerPlugin(ScrollTrigger);
// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   },
// });
// ScrollTrigger.create({
//   trigger: "#section2",
//   start: "bottom 150px",
//   end: "bottom 150px",
//   pin: "#section2",
// });

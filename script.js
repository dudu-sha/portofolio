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
let words = gsap.utils.toArray("text"),
  tl = gsap.timeline({ delay: 2 }),
  timePerCharacter = 0.05;

words.forEach((el) => {
  tl.from(el, {
    text: "",
    duration: el.innerHTML.length * timePerCharacter,
    ease: "none",
    delay: 0.1,
  });
});
document.querySelectorAll("ul li").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // gsap.to(btn, {
    //   duration: 0.5,
    //   ease: "bounce.out",
    //   y: -20,
    // });
    // gsap.to(btn, {
    //   duration: 0.5,
    //   ease: "bounce.out",
    //   y: 0,
    //   delay: 0.5,
    // });
    if (index != 1) {
      gsap.to(window, {
        duration: 1,
        delay: 0.5,
        scrollTo: { y: "#section" + (index + 1), offsetY: 70 },
      });
    } else {
      gsap.to(window, {
        duration: 1,
        delay: 0.5,
        scrollTo: { y: "#section" + (index + 1), offsetY: 70 },
      });

      if (document.getElementById("anchor").style.opacity == 1) {
        document.getElementById("anchor").style.opacity = 0;
        let img = gsap.utils.toArray("bg img");
        (tl = gsap.timeline({ delay: 0 })),
          img.forEach((el) => {
            tl.to(el, {
              duration: 0.5,
              ease: "expoScale(0.5,7,none)",
              opacity: 0,
            });
          });
      } else {
        document.getElementById("anchor").style.opacity = 1;
        let img = gsap.utils.toArray("bg img");
        (tl = gsap.timeline({ delay: 0 })),
          img.forEach((el) => {
            tl.to(el, {
              duration: 0.5,
              ease: "expoScale(0.5,7,none)",
              opacity: 1,
            });
          });
        // document.getElementById("img").style.position = "static";
      }
    }
  });
});
const copyContent = async (data) => {
  try {
    // var x = data;
    //
    let text = document.getElementById(data).innerHTML;
    await navigator.clipboard.writeText(text);
  } catch (err) {
    alert(
      `Error copying to clipboard , Please contact me with "+251927719556"`
    );
    //   alert('Failed to copy: ', err);
  }
};
function home() {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#home", offsetY: 70 },
  });
}
function refresh() {
  gsap.to(window, {
    duration: 0.1,
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

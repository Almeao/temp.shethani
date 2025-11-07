gsap.registerPlugin(ScrollTrigger);


// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  lerp: 0, // Adjust for smoothness (0.04 - 0.2 is typical)
  smooth: true,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  wheelMultiplier: 1.5,
  direction: 'vertical',
  gestureDirection: 'vertical',
  mouseMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
});

// Animation frame loop for Lenis + GSAP ScrollTrigger
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Optional: update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

















var lodder = gsap.timeline();



// const Loader = document.querySelector('.lodder span'); // ensure this selector matches your DOM
// const counter = { val: 0 };

// lodder.to(counter, {
//     val: 100,
    
//     duration: 6,
//     ease: "power4.out",
//     onUpdate: () => {
//         gsap.to(Loader, {
//             stagger:0.6,
//             // ease: "power4.out",
            
//             duration:4,
//         });
        
//         if (Loader) Loader.innerHTML = Math.floor(counter.val) ;
//         gsap.set(".lodder_progress", { width: counter.val + "%" });
//     },
   
// },"lodder_progress"
// );

// lodder.to(".lodder_progress img", {
//     opacity:0,
//     duration:1,
//     ease: "power2.inOut",
// },"lodder_span_and_progress_image_hind"
// )
// lodder.to(".lodder span",{
//     y:30,
//     opacity:0,
//     duration:1,
//     ease: "power2.inOut",
// },"lodder_span_and_progress_image_hind"
// )






// // Step 1: Animate background from white to transparent left to right
// lodder.to(".lodder_progress", {
//     background: "linear-gradient(to right, white 0%, transparent 100%)",
//     duration: 0.5,
//     ease: "power2.inOut",
//     onStart: () => {
//         // Ensure initial background is white
//         gsap.set(".lodder_progress", { background: "white" });
//     }
// })

// // Step 2: Animate background to solid white left to right
// lodder.to(".lodder_progress", {
//     background: "linear-gradient(to right, white 100%, white 100%)",
//     duration: 0.5,
//     ease: "power2.inOut",
// })



// // Step 3: Animate background from white to transparent left to right again
// lodder.to(".lodder_progress", {
//     background: "linear-gradient(to right, transparent 0%, white 100%)",
//     duration: 1,
//     opacity:0,
//     x:"100%",
//     ease: "power2.inOut",
// },"lodder_logo&hr&progress_at sametime"
// )









// lodder.to(".lodder_logo", {
//     y: "-450%",
//     scale:0.5,
//     duration: 1,
//     ease: "power2.inOut",
// },"lodder_logo&hr&progress_at sametime"
// )




lodder.to(".lodder video", {
  opacity: 1,
  duration: 2,
  delay: 0 // ensure video starts visible
});

lodder.to(".lodder", {
    opacity:0,
    duration:0.5,
    ease: "power2.inOut",
});
lodder.to(".lodder", {
    display: "none"
});

lodder.from(".nav_main_logo",{
    y:"-100%",
    scale:0.7,
    duration:1,
    ease: "power2.inOut",
})






lodder.from(".page1_bg_text",{
    opacity:0,
    scale:30,
 
    duration:1,
    ease: "power2.inOut",

}
)




lodder.to(".page1_bg_text",{
    lineHeight: "11vmax",
    duration:1,
    scrub:5,
    ease: "elastic.out(1,1)",
})

lodder.from(".page1_containe_oil-img_left",{
    x:"-100%",
    duration:2,
    ease: "power4.inOut",

},"page1_contain"
)
lodder.from(".page1_containe_oil-img_right",{
    x:"100%",
    duration:2,
    ease: "power4.inOut",

},"page1_contain")




lodder.from(".page1_contain_oil-img_container img",{
    rotate:"90deg",

    y:"-90%",
    x:200,
    scale:1.3,
    duration:1.5,
    ease: "power2.inOut",

},"page1_contain")



//=========================================================
//================== mobaile lodder animation =============
//=========================================================


gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add("(max-width: 480px)", () => {
  // It's better to create the timeline INSIDE the matchMedia function
  let lodder_mobail = gsap.timeline();

  // Set initial opacity immediately (optional/failsafe, for safety)
  gsap.set(".lodder_mobail, .lodder_mobail video", {opacity: 1});

  lodder_mobail.from(".lodder_mobail video", {
    opacity: 1,         // Already at 1, but if not, it'll jump to 1 instantly
    duration: 0,
    delay: 0 
  });

  lodder_mobail.to(".lodder_mobail", {
    duration: 0.5,
    // scale:0,
    // delay: 2, // keep video fully visible for 2 seconds
    opacity: 0,
    // ease: "power4.inOut"
  }, "+=2"); // keep loader visible for 2 seconds before fading out

  lodder_mobail.from(".nav_main_logo_mobail",{
    y:"-200%",
    scale:0.7,
    duration:1,
    ease: "power2.inOut",
})

lodder_mobail.from(".page1_bg_text_mobail",{
  opacity:0,
  scale:30,

  duration:0.5,
  ease: "power2.inOut",

}
)




lodder_mobail.to(".page1_bg_text_mobail",{
  lineHeight: "11vmax",
  duration:1,
  scrub:5,
  ease: "elastic.out(1,1)",
})



lodder_mobail.from(".page1_containe_oil-img_left_mobail",{
  x:"-200%",
  duration:1,
  ease: "power4.inOut",

},"page1_contain_mobail"
)




lodder_mobail.from(".page1_containe_oil-img_right_mobail",{
  x:"100%",
  duration:1,
  ease: "power4.inOut",

},"page1_contain_mobail")




lodder_mobail.from(".page1_contain_oil-img_container_mobail img",{
  rotate:"90deg",

  y:"-90%",
  x:200,
  scale:1.3,
  duration:1,
  ease: "power2.inOut",

},"page1_contain_mobail")



});



// gsap.registerPlugin(ScrollTrigger);

// let mm600 = gsap.matchMedia();

// mm600.add("(max-width: 600px)", () => {
//   // It's better to create the timeline INSIDE the matchMedia function
//   let lodder_mobail_600 = gsap.timeline();

//   // Set initial opacity immediately (optional/failsafe, for safety)
//   gsap.set(".lodder_mobail, .lodder_mobail video", {opacity: 1});

//   lodder_mobail_600.from(".lodder_mobail video", {
//     opacity: 1,         // Already at 1, but if not, it'll jump to 1 instantly
//     duration: 0,
//     delay: 0 
//   });

//   lodder_mobail_600.to(".lodder_mobail", {
//     duration: 0.5,
//     // scale:0,
//     // delay: 2, // keep video fully visible for 2 seconds
//     opacity: 0,
//     // ease: "power4.inOut"
//   }, "+=2"); // keep loader visible for 2 seconds before fading out

//   lodder_mobail_600.from(".nav_main_logo_mobail",{
//     y:"-200%",
//     scale:0.7,
//     duration:1,
//     ease: "power2.inOut",
// })

// lodder_mobail_600.from(".page1_bg_text_mobail",{
//   opacity:0,
//   scale:30,

//   duration:0.5,
//   ease: "power2.inOut",

// }
// )




// lodder_mobail_600.to(".page1_bg_text_mobail",{
//   lineHeight: "11vmax",
//   duration:1,
//   scrub:5,
//   ease: "elastic.out(1,1)",
// })



// lodder_mobail_600.from(".page1_containe_oil-img_left_mobail",{
//   x:"-200%",
//   duration:1,
//   ease: "power4.inOut",

// },"page1_contain_mobail"
// )




// lodder_mobail_600.from(".page1_containe_oil-img_right_mobail",{
//   x:"100%",
//   duration:1,
//   ease: "power4.inOut",

// },"page1_contain_mobail")




// lodder_mobail_600.from(".page1_contain_oil-img_container_mobail img",{
//   rotate:"90deg",

//   y:"-90%",
//   x:200,
//   scale:1.3,
//   duration:1,
//   ease: "power2.inOut",

// },"page1_contain_mobail")



// });

























// lodder.from(".page1_bg_text_mobail",{
//     opacity:0,
//     scale:30,
 
//     duration:1,
//     ease: "power2.inOut",

// }
// )




// lodder.to(".page1_bg_text_mobail",{
//     lineHeight: "10vmax",
//     duration:1,
//     scrub:5,
//     ease: "elastic.out(1,1)",
// })

// lodder.from(".page1_containe_oil-img_left_mobail",{
//     x:"-100%",
//     duration:2,
//     ease: "power4.inOut",

// },"page1_contain"
// )
// lodder.from(".page1_containe_oil-img_right_mobail",{
//     x:"100%",
//     duration:2,
//     ease: "power4.inOut",

// },"page1_contain")




// lodder.from(".page1_contain_oil-img_container_mobail img",{
//     rotate:"90deg",

//     y:"-90%",
//     x:200,
//     scale:1.3,
//     duration:1.5,
//     ease: "power2.inOut",

// },"page1_contain")





//================ nav scroll animation ============================


let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav');
let ticking = false;

function handleNavOnScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        nav.style.transform = 'translateY(-100%)';
        nav.style.transition = 'transform 0.5s cubic-bezier(0.77,0,0.18,1)';
        // nav_main_logo.style.transform = 'scale(0)';
    } else {
        nav.style.transform = 'translateY(0)';
        nav.style.transition = 'transform 0.5s cubic-bezier(0.77,0,0.18,1)';
        // nav_main_logo.style.transform = 'scale(1)';
    }
    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(handleNavOnScroll);
        ticking = true;
    }
});











const page1_imagescroller = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1_contain_oil-img_container",
        scroller: "body",
        start: "top -20%",
        end: "top -140%",
        scrub: 0,

    }
})







page1_imagescroller.to(".page1_contain_oil-img_container", 

    {

    y: "160%",
    x: "-75%",
    stagger: 0.2,
    rotate: "10deg",
    scale:1.3,
    pin:true,
   
});




gsap.from(".page1_contain_2_left_img_oil", {
    scale: 0,
    duration: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".page1_contain_2",
        start: "top 30%",
        end: "top 25%",
        // markers: true,
        // pin:true,
        scrub: 3, // This makes the animation reverse on scroll up
    }
});

gsap.from(".page1_contain_2_left_img_pinuts", {
    scale: 0,
    duration: 10,
    ease: "none",
    delay:1,
    scrollTrigger: {
        trigger: ".page1_contain_2",
        start: "top 35%",
        end: "top 30%",
        // markers: true,
        scrub: 3, // This makes the animation reverse on scroll up
    }
});




// Here's a working version to animate those two h3 lines on page 2:

gsap.from(".page1_contain_2_right h3", {
  opacity: 0,
  // filter: "blur(50px)",
  y: 50,
  stagger:0.2,

 
  scrollTrigger: {
    trigger: ".page1_contain_2",
    start: "top 80%",
    end: "top 20%",
    // markers: true,
    scrub: 3
  }
  }
)




//===========================================================
//============= page1 image scroller fro mobail =============
//===========================================================
const page1_imagescroller_mobail = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1_contain_oil-img_container_mobail",
      scroller: "body",
      start: "top -30%",
      end: "top -100%",
      scrub: 0,
      // markers:true,

  }
})







page1_imagescroller_mobail.to(".page1_contain_oil-img_container_mobail", 

  {

  y: "90vh",
  x: "10%",
  stagger: 0.2,
  rotate: "10deg",
  scale:3.5,
  pin:true,
 
});




gsap.from(".page1_contain_2_left_img_oil_mobail", {
  scale: 0,
  duration: 10,
  ease: "none",
  scrollTrigger: {
      trigger: ".page1_contain_2_mobail",
      start: "top 30%",
      end: "top 25%",
      // markers: true,
      // pin:true,
      scrub: 3, // This makes the animation reverse on scroll up
  }
});

gsap.from(".page1_contain_2_left_img_pinuts_mobail", {
  scale: 0,
  duration: 10,
  ease: "none",
  delay:1,
  scrollTrigger: {
      trigger: ".page1_contain_2_mobail",
      start: "top 35%",
      end: "top 30%",
      // markers: true,
      scrub: 3, // This makes the animation reverse on scroll up
  }
});

















document.querySelectorAll('.page1_contain_2_right h2').forEach(function(h2) {
  // Get the text content and trim it
  var text = h2.textContent;
  // Create a new HTML string with each character wrapped in a span
  var spanned = '';
  for (var i = 0; i < text.length; i++) {
      // Preserve spaces
      if (text[i] === ' ') {
          spanned += '<span>&nbsp;</span>';
      } else {
          spanned += '<span class:"page1_contain_2_right_h2_span">' + text[i] + '</span>';
      }
  }
  // Set the new HTML
  h2.innerHTML = spanned;
});


gsap.from(".page1_contain_2_right h2 span",
  {
      opacity: 0,
      y: 100,
      x:20,
      stagger: 0.5,
      // scale:0,
      duration: 10,
      ease: "bounce.out",
      scrollTrigger: {
          trigger: ".page1_contain_2",
          start: "top 50%",
          end:"top top",
          scrub: 5,
          // markers: true, // Uncomment for debugging

      }
  
      
})
 
gsap.from(".page1_contain_2_right p", {
  opacity: 0,
  
  y: 100,
  stagger: 0.6,
  // scale:0,
  duration: 10,
  scrollTrigger: {
    trigger: ".page1_contain_2",
    start: "top 30%",
    end: "top 10%",
 
    scrub: 5
  }
  }
)





// document.querySelectorAll('.page2 h3').forEach(function(h3) {
//     // Get the text content and trim it
//     var text = h3.textContent;
//     // Create a new HTML string with each character wrapped in a span
//     var spanned = '';
//     for (var i = 0; i < text.length; i++) {
//         // Preserve spaces
//         if (text[i] === ' ') {
//             spanned += '<span>&nbsp;</span>';
//         } else {
//             spanned += '<span class:"page2_heading_divide">' + text[i] + '</span>';
//         }
//     }
//     // Set the new HTML
//     h3.innerHTML = spanned;
// });

gsap.from(".page2 h3",
    {
        opacity: 0,
        y: -200,
       
     
       
        scrollTrigger: {
            trigger: ".page2",
            start: "top 60%",
            end:"top 50%",
            scrub: 5,
            // markers: true, // Uncomment for debugging

        }
    
        
})
   



















// gsap.from(".box1",{
//     opacity:0,
//     x:-300,
//     scrollTrigger:
//     {
//         trigger:".page2_contain",
//         start:"top 50%",
//         end:"top 20%",
//         scrub:1,
//         ease:"power4.out",
        
//     }
// })


// gsap.from(".box2",{
//     opacity:0,
//     y:-200,
//     scrollTrigger:
//     {
//         trigger:".page2_contain",
//         start:"top 50%",
//         end:"top 20%",
//         scrub:1,
//         ease:"power4.out",

//     }
// })

// gsap.from(".box3",{
//     opacity:0,
//     x:300,
//     scrollTrigger:
//     {
//         trigger:".page2_contain",
//         start:"top 50%",
//         end:"top 20%",
//         scrub:1,
//         ease:"power4.out",

//     }
// })
// gsap.from(".box4",{
//     opacity:0,
//     x:-300,
//     delay:2,
//     scrollTrigger:
//     {
//         trigger:".page2_contain",
//         start:"top 40%",
//         end:"top 20%",
//         scrub:1,
//         ease:"power4.out",

//     }
// })




// gsap.from(".box5",{
//     opacity:0,
//     y:300,
//     delay:0.7,
//     scrollTrigger:
//     {
//         trigger:".page2_contain",
//         start:"top 40%",
//         end:"top 10%",
//         scrub:1,
//         ease:"power4.out",

//     }
// })

// gsap.from(".box6",{
//     opacity:0,
//     y:300,
//     delay:0.9,
//     scrollTrigger:
//     {
//         trigger:".page2_contain",
//         start:"top 40%",
//         end:"top 10%",
//         scrub:1,
//         ease:"power4.out",

//     }
// })
// gsap.from(".box7",{
//     opacity:0,
//     x:300,
//     delay:0.9,
//     scrollTrigger:
//     {
//         trigger:".page2_contain",
//         start:"top 40%",
//         end:"top 10%",
//         scrub:1,
//         ease:"power4.out",

//     }
// })




gsap.from(".page2_scroll_aniation_img1 img",{
    // opacity:0,
    y:450,

    scrollTrigger:
    {
        trigger:".page2",
        start:"top 100%",
        end:"top -40%",
        // scrub:1,
        ease:"power4.out",
        scrub:2,
    }
})




gsap.from(".page2_scroll_aniation_img2 img",{
    // opacity:0,
    y:450,

    scrollTrigger:
    {
        trigger:".page2_scroll_aniation_img2",
        start:"top 100%",
        end:"top -30%",
        // scrub:1,
        ease:"power4.out",
        // markers:true,
        scrub:2,
    }
})


























gsap.registerPlugin(ScrollTrigger);

// function initHorizontalScroll() {
//   const section = document.querySelector(".page3");
//   const container = document.querySelector(".page3_contain");

//   // Remove existing triggers for this section to ensure fresh setup
//   ScrollTrigger.getAll().forEach(trigger => {
//     if (trigger.trigger === section) trigger.kill();
//   });
//   gsap.set(container, { clearProps: "transform" });

//   // Calculate horizontal scroll distance
//   const totalScroll = container.scrollWidth - window.innerWidth;
// //   const limitedScroll = totalScroll * 0.5;

//   // Create fresh ScrollTrigger horizontal animation
//   gsap.to(container, {
//     x: () => -totalScroll,
//     ease: "none",
//     scrollTrigger: {
//       trigger: section,
//       start: "top top",
//       end: () => "+=" + totalScroll,
//       scrub: 0.1, // Changed from 1 to 0.1 for more reactive update (fixes slow scroll choppiness)
//       pin: true,
//       anticipatePin: 1,
//       invalidateOnRefresh: true,
//       fastScrollEnd: false, // Set to false to let GSAP track both fast and slow scrolls accurately
//       preventOverlaps: true,
//       // markers: true,
//       onEnter: () => console.log("Entered horizontal scroll"),
//       onLeave: () => console.log("Left horizontal scroll (stops at 50%)"),
//       refreshPriority: 1
//     }
//   });

//   // For improved smoothness: throttle ScrollTrigger.refresh() calls and force update on scroll as a backup
//   ScrollTrigger.refresh();

//   // Fix laggy animation if user scrolls extremely slowly:
//   // Listen for scroll and update GSAP transform instantly if needed.
//   let ticking = false;
//   window.addEventListener("scroll", function() {
//     if (!ticking) {
//       window.requestAnimationFrame(function() {
//         ScrollTrigger.update();
//         ticking = false;
//       });
//       ticking = true;
//     }
//   });
// }

// window.addEventListener("load", () => {
//   initHorizontalScroll();
// });








function initSection4HorizontalScroll() {
  const section = document.querySelector('.page3');
  const track = document.querySelector('.page3_contain');
  if (!section || !track) return;

  // Total scroll distance equals track width minus viewport width
  const totalScroll = track.scrollWidth - window.innerWidth;

  gsap.to(track, {
    x: () => -totalScroll,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${totalScroll}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}



initSection4HorizontalScroll();











// Handle resizing safely
// let resizeTimeout;
// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(() => {
//     ScrollTrigger.refresh(true);
//     initHorizontalScroll();
//   }, 300);
// });

// Animate the mask size on page4 as we scroll through it
// Fix GSAP animation to trigger correctly when .page4 reaches top

function initPage4MaskAnimation() {
  const page4_inner = document.querySelector('.page4_inner');
  const page4 = document.querySelector('.page4');
  if (!page4_inner || !page4) return;

  // Prevent double initialization
  if (page4_inner.dataset.maskAnimInit === '1') return;
  page4_inner.dataset.maskAnimInit = '1';

  // Initial mask height (matches initial CSS)
  const initialMaskHeight = 430;
  // Final mask height (big reveal)
  const finalMaskHeight = 5000;

  // Set initial mask size using GSAP
  gsap.set(page4_inner, {
    WebkitMaskSize: `auto ${initialMaskHeight}px`,
    maskSize: `auto ${initialMaskHeight}px`,
  });

  // Calculate a slightly SHORTER scroll distance for the animation end, for an earlier reveal
  const getAnimationEnd = () => {
    const page4Height = page4.offsetHeight;
    const viewportHeight = window.innerHeight;
    // Reduce end point by 18% for a little bit shorter scroll reveal
    const scrollEnd = Math.max(0, page4Height - viewportHeight) * 0;
    return `+=${scrollEnd > 0 ? scrollEnd : page4Height * 0.40}px`;
  };

  // Animate only the mask height as you scroll through .page4, DECREASE speed by lowering scrub value
  gsap.to(page4_inner, {
    WebkitMaskSize: () => `auto ${finalMaskHeight}px`,
    maskSize: () => `auto ${finalMaskHeight}px`,
    ease: "power2.out", // Slightly faster ease
    scrollTrigger: {
      trigger: ".page4",
      start: 'top top',
      end: getAnimationEnd,
      scrub: 0.6, // Decreased scrub from true to 0.6 for faster (less smooth, quicker) animation response
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true,
    }
  });

  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
  ScrollTrigger.refresh();
}

// Call it on DOM ready/page load
window.addEventListener('load', () => {
  initPage4MaskAnimation();
});







// document.querySelectorAll('.page5 h3').forEach(function(h3) {
//     // Get the text content and trim it
//     var text = h3.textContent;
//     // Create a new HTML string with each character wrapped in a span
//     var spanned = '';
//     for (var i = 0; i < text.length; i++) {
//         // Preserve spaces
//         if (text[i] === ' ') {
//             spanned += '<span>&nbsp;</span>';
//         } else {
//             spanned += '<span class:"page2_heading_divide">' + text[i] + '</span>';
//         }
//     }
//     // Set the new HTML
//     h3.innerHTML = spanned;
// });


gsap.from(".page5 h3",
  {
      opacity: 0,
      y: -100,
     
   
     
      scrollTrigger: {
          trigger: ".page5",
          start: "top 50%",
          end:"top top",
          scrub: 5,
          // markers: true, // Uncomment for debugging

      }
  
      
})
 

// gsap.from(".page5_box1",
//     {
//         opacity: 0,
//         y: 300,
//         // x:20,
//         stagger: 0.2,
//         // scale:0,
//         // duration: 50,
//         ease: "power4.out",
//         scrollTrigger: {
//             trigger: ".page5_contain",
//             start: "top 60%",
//             end:"top 50%",
//             scrub: 3,
//             // markers: true, // Uncomment for debugging

//         }
    
        
// })

// Move the Swiper pagination below the swiper wrapper after initialization
// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   loop: true,
//   autoplay: {
//     delay: 2500, // slightly longer for a more relaxed experience
//     disableOnInteraction: false,
//   },
//   speed: 1400, // slow down transition for smoothness
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 50,
//     depth: 300,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // Enforce a very smooth easing to Swiper slides
//   on: {
//     setTransition: function(swiper, transition) {
//       let slides = swiper.slides;
//       for (let i = 0; i < slides.length; i++) {
//         slides[i].style.transitionTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1)'; // very soft easeOut
//       }
//     }
//   }
// });

// // After Swiper initializes, move the pagination below the swiper wrapper
// document.addEventListener("DOMContentLoaded", function() {
//   var swiperWrapper = document.querySelector('.mySwiper');
//   var swiperPagination = document.querySelector('.swiper-pagination');
//   if (swiperWrapper && swiperPagination) {
//     swiperWrapper.parentNode.insertBefore(swiperPagination, swiperWrapper.nextSibling);
//   }
// });
// // Fix GSAP mask animation: slow down mask reveal & ensure smooth scroll animation
// // Re-initialize the animation after DOMContentLoaded to ensure ScrollTrigger works as intended

// document.addEventListener("DOMContentLoaded", function() {
//   if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
//     // Remove previous ScrollTriggers for .page4 to avoid stacking on refresh
//     ScrollTrigger.getAll().forEach(trigger => {
//       if (trigger.trigger && trigger.trigger.classList && trigger.trigger.classList.contains('page4')) trigger.kill();
//     });
//     initPage4MaskAnimation();
//   }
// });

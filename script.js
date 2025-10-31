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



const Loader = document.querySelector('.lodder span'); // ensure this selector matches your DOM
const counter = { val: 0 };

lodder.to(counter, {
    val: 100,
    
    duration: 6,
    ease: "power4.out",
    onUpdate: () => {
        gsap.to(Loader, {
            stagger:0.6,
            // ease: "power4.out",
            
            duration:4,
        });
        
        if (Loader) Loader.innerHTML = Math.floor(counter.val) ;
        gsap.set(".lodder_progress", { width: counter.val + "%" });
    },
   
},"lodder_progress"
);

lodder.to(".lodder_progress img", {
    opacity:0,
    duration:1,
    ease: "power2.inOut",
},"lodder_span_and_progress_image_hind"
)
lodder.to(".lodder span",{
    y:30,
    opacity:0,
    duration:1,
    ease: "power2.inOut",
},"lodder_span_and_progress_image_hind"
)






// Step 1: Animate background from white to transparent left to right
lodder.to(".lodder_progress", {
    background: "linear-gradient(to right, white 0%, transparent 100%)",
    duration: 0.5,
    ease: "power2.inOut",
    onStart: () => {
        // Ensure initial background is white
        gsap.set(".lodder_progress", { background: "white" });
    }
})

// Step 2: Animate background to solid white left to right
lodder.to(".lodder_progress", {
    background: "linear-gradient(to right, white 100%, white 100%)",
    duration: 0.5,
    ease: "power2.inOut",
})



// Step 3: Animate background from white to transparent left to right again
lodder.to(".lodder_progress", {
    background: "linear-gradient(to right, transparent 0%, white 100%)",
    duration: 1,
    opacity:0,
    x:"100%",
    ease: "power2.inOut",
},"lodder_logo&hr&progress_at sametime"
)

lodder.to(".lodder_logo", {
    y: "-450%",
    scale:0.5,
    duration: 1,
    ease: "power2.inOut",
},"lodder_logo&hr&progress_at sametime"
)
lodder.to(".lodder", {
    opacity:0,
    duration:1,
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





// lodder.from(".nav_option hr",{
//     x:-100,
//     opacity:0,
//     scrub:5,
//     stagger:0.2,
//     ease: "bounce.out",
// },
// )


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
    end: "top top",
 
    scrub: 5
  }
  }
)





document.querySelectorAll('.page2 h3').forEach(function(h3) {
    // Get the text content and trim it
    var text = h3.textContent;
    // Create a new HTML string with each character wrapped in a span
    var spanned = '';
    for (var i = 0; i < text.length; i++) {
        // Preserve spaces
        if (text[i] === ' ') {
            spanned += '<span>&nbsp;</span>';
        } else {
            spanned += '<span class:"page2_heading_divide">' + text[i] + '</span>';
        }
    }
    // Set the new HTML
    h3.innerHTML = spanned;
});

gsap.from(".page2  h3 span",
    {
        opacity: 0,
        y: 100,
        x:20,
        stagger: 0.6,
        scale:0,
        duration: 50,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: ".page2 h3",
            start: "top 70%",
            end:"top 40%",
            scrub: 3,
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
        scrub:0,
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
        scrub:0,
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
  const page4 = document.querySelector('.page4');

  if (!page4) return;

  // Prevent double initialization
  if (page4.dataset.maskAnimInit === '1') return;
  page4.dataset.maskAnimInit = '1';

  // Initial mask size height (matches initial CSS)
  const initialMaskHeight = 430;
  // Final mask size height (increase, but not overly drastic)
  // For a visible but more modest mask reveal, pick a value that's noticeably larger, but not extreme
  const finalMaskHeight = 500; // was 1800, now more subtle

  // Set initial mask size using GSAP
  gsap.set(page4, {
    WebkitMaskSize: `auto ${initialMaskHeight}px`,
    maskSize: `auto ${initialMaskHeight}px`,
  });

  // Animate only the mask height as you scroll through .page4
  gsap.to(page4, {
    WebkitMaskSize: () => `auto ${finalMaskHeight}vw`,
    maskSize: () => `auto ${finalMaskHeight}px`,
    // ease: 'power4.out',
    // stagger:3,
    ease:"power1.out",
    duration:100,
    scrollTrigger: {
      trigger: page4,
      start: 'top top',
      end: '+=150%',
      scrub: true,
      pin: true,
      ease:"none",
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true, 
    }
  });

  // Optional: Refresh ScrollTrigger for accurate pinning
  ScrollTrigger.refresh();
}

// Call it on DOM ready/page load
window.addEventListener('load', () => {
  initPage4MaskAnimation();
});







document.querySelectorAll('.page5 h3').forEach(function(h3) {
    // Get the text content and trim it
    var text = h3.textContent;
    // Create a new HTML string with each character wrapped in a span
    var spanned = '';
    for (var i = 0; i < text.length; i++) {
        // Preserve spaces
        if (text[i] === ' ') {
            spanned += '<span>&nbsp;</span>';
        } else {
            spanned += '<span class:"page2_heading_divide">' + text[i] + '</span>';
        }
    }
    // Set the new HTML
    h3.innerHTML = spanned;
});

gsap.from(".page5  h3 span",
    {
        opacity: 0,
        y: 100,
        x:20,
        stagger: 0.6,
        scale:0,
        duration: 50,
        ease: "bounce.out",
        scrollTrigger: {
            trigger: ".page5 h3",
            start: "top 90%",
            end:"top 70%",
            scrub: 3,
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
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true, // Enable looping
    autoplay: {
      delay: 2000, // Auto-slide every 2 seconds
      disableOnInteraction: false, // Keep autoplay even after user swipes
    },
    speed: 200, // Add speed for transition duration (ms)
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Add easing for smooth animation
    // Swiper uses CSS transitions for most effects, set custom easing:
    on: {
      setTransition: function(swiper, transition) {
        let slides = swiper.slides;
        for(let i=0; i<slides.length; i++) {
          slides[i].style.transitionTimingFunction = 'cubic-bezier(0.36,0.66,0.04,1)'; // easeOutCubic like
        }
      }
    }
});

// After Swiper initializes, move the pagination below the swiper wrapper
document.addEventListener("DOMContentLoaded", function() {
  var swiperWrapper = document.querySelector('.mySwiper');
  var swiperPagination = document.querySelector('.swiper-pagination');
  if (swiperWrapper && swiperPagination) {
    swiperWrapper.parentNode.insertBefore(swiperPagination, swiperWrapper.nextSibling);
  }
});
// Fix GSAP mask animation: slow down mask reveal & ensure smooth scroll animation
// Re-initialize the animation after DOMContentLoaded to ensure ScrollTrigger works as intended

document.addEventListener("DOMContentLoaded", function() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // Remove previous ScrollTriggers for .page4 to avoid stacking on refresh
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger && trigger.trigger.classList && trigger.trigger.classList.contains('page4')) trigger.kill();
    });
    initPage4MaskAnimation();
  }
});

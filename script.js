// ...existing code...
// --- Stable Lenis + ScrollTrigger integration (replace previous Lenis/raf code) ---
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

// Ensure ScrollTrigger updates on Lenis scroll
// The original code only listens to Lenis for ScrollTrigger updates, 
// but does not drive frame updates or actually scroll the content.
// To fix page not scrolling, Lenis needs to be updated continuously on each animation frame.

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Optionally, still sync Lenis with ScrollTrigger
lenis.on('scroll', () => {
  if (window.ScrollTrigger) {
    ScrollTrigger.update();
  }
});




var lodder = gsap.timeline();






// Wait for full page & all assets (images, video) to load, then start loader timeline animation
window.addEventListener('load', function() {
  // At this point, all HTML, CSS, JS & media assets are loaded
  lodder.play(); // lodder is defined below, assumed to be initially paused
 
});













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
    duration:0.7,
    // ease: "power2.inOut",
})






lodder.from(".page1_bg_text",{
    opacity:0,
    scale:30,
 
    duration:0.5,
    ease: "power2.inOut",

},"page1_bgtext_time match"
)




lodder.to(".page1_bg_text",{
    lineHeight: "10vmax",
    duration:0.5,
    scrub:5,
    ease: "elastic.out(1,1)",
},"page1_bgtext_linehight_time match"
)

lodder.from(".page1_containe_oil-img_left",{
    x:"-100%",
    duration:1,
    ease: "power4.inOut",

},"page1_contain"
)
lodder.from(".page1_containe_oil-img_right",{
    x:"100%",
    duration:1,
    ease: "power4.inOut",

},"page1_contain")




lodder.from(".page1_contain_oil-img_container img",{
    rotate:"90deg",
    y:"-90%",
    x:200,
    scale:1.3,
    duration:0.7,
    ease: "power2.inOut",
    onComplete: function() {

      
      const container = document.querySelector(".page1_contain_oil-img_container");
      const img = container ? container.querySelector("img") : null;
      
      // Only run animation if container and img exist
      if (container && img) {
          let isHovering = false;
      
          container.addEventListener("mouseenter", function(e) {
              isHovering = true;
              img.style.transition = "transform 0.5s cubic-bezier(.36,1.21,.58,.82)";
              img.style.transform = "scale(1.05)";
          });
      
          container.addEventListener("mousemove", function(e) {
              if (!isHovering) return;
      
              const rect = container.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
      
              let dx = e.clientX - centerX;
              let dy = e.clientY - centerY;
      
              // Limit the movement to max 10px in any direction (circular boundary)
              const maxMove = 10;
              let dist = Math.sqrt(dx*dx + dy*dy);
              if (dist > maxMove) {
                  dx = dx * maxMove / dist;
                  dy = dy * maxMove / dist;
              }
      
              // Move the image with transform and scale it up to 1.7 on hover
              img.style.transition = "transform 0.5s cubic-bezier(.36,1.21,.58,.82)";
              img.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
          });
      
          container.addEventListener("mouseleave", function() {
              isHovering = false;
              img.style.transition = "transform 0.5s cubic-bezier(.36,1.21,.58,.82)";
              img.style.transform = "translate(0px, 0px) scale(1)";
          });
      }
      

    }  
},"page1_contain")    





//==========================================================
//=========== page1 leptop 1440 to 1700 ====================
//==========================================================




lodder.from(".page1_bg_text_leptop",{
    opacity:0,
    scale:30,
 
    duration:0.5,
    ease: "power2.inOut",

}
,"page1_bgtext_time match"
)




lodder.to(".page1_bg_text_leptop",{
    lineHeight: "11vmax",
    duration:0.5,
    scrub:5,
    ease: "elastic.out(1,1)",

},"page1_bgtext_linehight_time match")

lodder.from(".page1_containe_oil-img_left_leptop",{
    x:"-100%",
    duration:1,
    ease: "power4.inOut",

},"page1_contain"
)
lodder.from(".page1_containe_oil-img_right_leptop",{
    x:"100%",
    duration:1,
    ease: "power4.inOut",

},"page1_contain")




lodder.from(".page1_contain_oil-img_container_leptop img",{
    rotate:"90deg",
    y:"-90%",
    x:200,
    scale:1.3,
    duration:0.7,
    ease: "power2.inOut",
    onComplete: function() {

      
      const container = document.querySelector(".page1_contain_oil-img_container_leptop");
      const img = container ? container.querySelector("img") : null;
      
      // Only run animation if container and img exist
      if (container && img) {
          let isHovering = false;
      
          container.addEventListener("mouseenter", function(e) {
              isHovering = true;
              img.style.transition = "transform 0.5s cubic-bezier(.36,1.21,.58,.82)";
              img.style.transform = "scale(1.05)";
          });
      
          container.addEventListener("mousemove", function(e) {
              if (!isHovering) return;
      
              const rect = container.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
      
              let dx = e.clientX - centerX;
              let dy = e.clientY - centerY;
      
              // Limit the movement to max 10px in any direction (circular boundary)
              const maxMove = 10;
              let dist = Math.sqrt(dx*dx + dy*dy);
              if (dist > maxMove) {
                  dx = dx * maxMove / dist;
                  dy = dy * maxMove / dist;
              }
      
              // Move the image with transform and scale it up to 1.7 on hover
              img.style.transition = "transform 0.5s cubic-bezier(.36,1.21,.58,.82)";
              img.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
          });
      
          container.addEventListener("mouseleave", function() {
              isHovering = false;
              img.style.transition = "transform 0.5s cubic-bezier(.36,1.21,.58,.82)";
              img.style.transform = "translate(0px, 0px) scale(1)";
          });
      }
      

    }  
},"page1_contain")  




























// Make the image inside .page1_contain_oil-img_container follow the cursor with a max 20px offset from its center







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











let page1_scroll_start = "top -20%";
let page1_scroll_end = "top -120%";
let page1_scroll_from_y = "108vh";

// If the screen width is greater than 1900px, increase the scroll distance (end further away) to decrease scroll speed
if (window.innerWidth >= 1900) {
    // This makes the scroll animation span a longer distance (slower effect)
    page1_scroll_start = "top -20%";
    page1_scroll_end = "top -120%";
    page1_scroll_from_y = "120vh";
}

const page1_imagescroller = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1_contain_oil-img_container",
        start: page1_scroll_start,
        end: page1_scroll_end,
        scrub: 0,
        // markers:true,
    }
})

page1_imagescroller.to(".page1_contain_oil-img_container", 
    {
        y: page1_scroll_from_y ,
        x: "-72%",
        stagger: 0.2,
        rotate: "15deg",
        scale: 1,
        // No pin or duration required.
    }
);



gsap.from(".page1_contain_2_left_img_oil", {
    scale: 0,
    duration: 1,
    ease: "none",
    scrollTrigger: {
        trigger: ".page1_contain_2",
        start: "top 25%",
        end: "top 22%",
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
        start: "top 30%",
        end: "top 27%",
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
//============= page1 image scroller fro leptop =============
//===========================================================
const page1_imagescroller_leptop = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1_contain_oil-img_container_leptop",
      // scroller: "body",
      start: "top -30%",
      end: "top -100%",
      scrub: 0,
      // markers:true,

  }
})







page1_imagescroller_leptop.to(".page1_contain_oil-img_container_leptop", 

  {

   y: "130%",
    x: "-70%",
    stagger: 0.2,
    rotate: "15deg",
    scale:1.1,
 
});






gsap.from(".page1_contain_2_left_img_oil_leptop", {
    scale: 0,
    duration: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".page1_contain_2_leptop",
        start: "top 30%",
        end: "top 25%",
        // markers: true,
        // pin:true,
        scrub: 3, // This makes the animation reverse on scroll up
    }
});

gsap.from(".page1_contain_2_left_img_pinuts_leptop", {
    scale: 0,
    duration: 10,
    ease: "none",
    delay:1,
    scrollTrigger: {
        trigger: ".page1_contain_2_leptop",
        start: "top 35%",
        end: "top 30%",
        // markers: true,
        scrub: 3, // This makes the animation reverse on scroll up
    }
});


//===========================================================





//===========================================================
//============= page1 image scroller fro mobail =============
//===========================================================
const page1_imagescroller_mobail = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1_contain_oil-img_container_mobail",
      // scroller: "body",
      start: "top -30%",
      end: "top -100%",
      scrub: 0,
      // markers:true,

  }
})







page1_imagescroller_mobail.to(".page1_contain_oil-img_container_mobail", 

  {

  y: "90vh",
  x: "12%",
  stagger: 0.2,
  rotate: "17deg",
  scale:3.5,
  // pin:true,
 
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






gsap.from(".product_detail_left img",{
  x: "-100",
  opacity:0,
  scrollTrigger:{
    trigger:".product_detail_left",
    start:"top 50%",
    end:"top 30%",
    scrub:5,
  }
})

gsap.from(".product_detail_right h3",{
  y: "20",
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:".product_detail_right",
    start:"top 60%",
    end:"top 40%",
    scrub:5,
  }
})

gsap.from(".product_detail_right h4",{
  // y: "20",
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:".product_detail_right",
    start:"top 50%",
    end:"top 30%",
    scrub:5,
  }
})
gsap.from(".product_detail_right_inner p",{
  x: "200",
  opacity:0,
  stagger:0.2,
  scrollTrigger:{
    trigger:".product_detail_right",
    start:"top 60%",
    end:"top 50%",
    ease: "circ.out",
    scrub:2,
    onLeave: function(self) {
      // Smoothly transition the border appearance using GSAP
      const parentBox = document.querySelector('.product_detail_right_inner');
      if(parentBox) {
        gsap.to(parentBox, {
          borderWidth: 3,
          borderColor: "#F8981C",
          borderStyle: "solid",
          duration: 1,
          overwrite: "auto"
        });
      }
    },
    onEnterBack: function(self) {
      // Smoothly transition the border removal using GSAP
      const parentBox = document.querySelector('.product_detail_right_inner');
      if(parentBox) {
        gsap.to(parentBox, {
          borderWidth: 0,
          duration: 1,
          overwrite: "auto"
        });
      }
    }
  }
})


// gsap.from(".product_detail_right h6",{
//   // y: "-50",
//   opacity:0,
//   scale:0.5,
//   // stagger:0.2,
//   scrollTrigger:{
//     trigger:".product_detail_right",
//     start:"top 20%",
//     end:"top 10%",
//     scrub:2,
//   }
// })















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
 




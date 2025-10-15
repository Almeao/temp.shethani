// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  lerp: 0.1, // Adjust for smoothness (0.04 - 0.2 is typical)
  smooth: true,
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
    y: "-350%",
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





lodder.from(".nav_option hr",{
    x:-100,
    opacity:0,
    scrub:5,
    stagger:0.2,
    ease: "bounce.out",
},
)


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







const page1_imagescroller = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1_contain_oil-img_container",
        scroller: "body",
        start: "top -20%",
        end: "top -140%",
        scrub: 1,
        markers:true,
      
        // markers: true, 
        // pin:true,
       
        // onComplite: () => {
        //     gsap.to(
        //         ".page1_contain_2_left_img_oil img", 
        //         { scale: 1, duration: 2, ease: "back.out(1.7)" }
        //     );
        //     gsap.to(
        //         ".page1_contain_2_left_img_pinuts img", 
        //         { scale: 1, duration: 2, delay: 2, ease: "back.out(1.7)" }
        //     );
        // },
        // onLeaveBack: () => {
        //     gsap.to(
        //         ".page1_contain_2_left_img_oil img", 
        //         { scale: 0, duration: 0.6, scrub:5,ease: "power4.out" }
        //     );
        //     gsap.to(
        //         ".page1_contain_2_left_img_pinuts img", 
        //         { scale: 0, duration: 0.6,scrub:5
        //             , ease: "power4.out" }
        //     );
        // }
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
            start: "top 50%",
            end:"top top",
            scrub: 3,
            // markers: true, // Uncomment for debugging

        }
    
        
})
    


gsap.registerPlugin(ScrollTrigger);

function initHorizontalScroll() {
  const section = document.querySelector(".page3");
  const container = document.querySelector(".page3_contain");

  // Remove existing triggers for this section to ensure fresh setup
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === section) trigger.kill();
  });
  gsap.set(container, { clearProps: "transform" });

  // Calculate horizontal scroll distance
  const totalScroll = container.scrollWidth - window.innerWidth;
  // We want only about 50% of the full scroll (as per user prompt)
  const limitedScroll = totalScroll * 0.5;

  // GSAP Animation: only scroll the first ~50% of the total possible scroll distance, then stop
  gsap.to(container, {
    x: () => -totalScroll,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      // The scroll distance is only 50% of what would normally be used
      end: () => "+=" + limitedScroll,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
      preventOverlaps: true,
      // markers: true, // Uncomment for debugging
      onEnter: () => console.log("Entered horizontal scroll"),
      onLeave: () => console.log("Left horizontal scroll (stops at 50%)"),
    },
  });

  // Refresh ScrollTrigger for responsiveness
  ScrollTrigger.refresh();
}

window.addEventListener("load", () => {
  initHorizontalScroll();
});

// Handle resizing safely
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh(true);
    initHorizontalScroll();
  }, 300);
});

// Animate the mask size on page4 as we scroll through it
// Fix GSAP animation to trigger correctly when .page4 reaches top

function initPage4MaskAnimation() {
  const page4 = document.querySelector('.page4');

  if (!page4) return;

  // Prevent double initialization
  if (page4.dataset.maskAnimInit === '1') return;
  page4.dataset.maskAnimInit = '1';

  // Initial mask size height (matches initial CSS)
  const initialMaskHeight = 460;
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
    ease: 'none',
    scrollTrigger: {
      trigger: page4,
      start: 'top top',
      end: '+=120%',
      scrub: 2,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true, // Uncomment to debug
    }
  });

  // Optional: Refresh ScrollTrigger for accurate pinning
  ScrollTrigger.refresh();
}

// Call it on DOM ready/page load
window.addEventListener('load', () => {
  initPage4MaskAnimation();
});


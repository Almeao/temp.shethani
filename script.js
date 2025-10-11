// Ensure the page always starts at the top on reload or refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


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
        end: "top -110%",
        scrub: 2,
      
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
    stagger: 0.3,
    rotate: "10deg",
    scale:1.3,
   
});




gsap.from(".page1_contain_2_left_img_oil", {
    scale: 0,
    duration: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".page1_contain_2",
        start: "top 20%",
        end: "top 10%",
        markers: true,
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
        start: "top 10%",
        end: "top top",
        markers: true,
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
    
gsap.from(".page2_contain_part_box",
    {
        height: 0,
        duration: 5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page2 h3",
            start: "top 50%",
            end: "top -10%",
            scrub: 3,
            // markers: true, // Uncomment for debugging
        }
    }
)





gsap.to(".scroller_1", {
    x: "-100%",
    duration: 10,
    repeat: -1,
    ease:"linear",
    // yoyo: true,
   

});



gsap.to(".scroller_2", {
    x: "-10%",
    duration: 20,
    repeat: -1,
    ease:"linear",
    // yoyo: true,
  

});



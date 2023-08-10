function init(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
document.addEventListener("wheel",function(dets){
  if(dets.offsetY >400){
    if(dets.deltaY > 0){
      gsap.to("#nav",{
        top:"-100px",
        duration:0.3,
        ease:Power0.easeNone,
      })
    }
  }
  if(dets.deltaY < 0){
    gsap.to("#nav",{
      top:"0px",
      duration:0.3,
      ease:Power0.easeNone,
    })
  }
})
}
init();
// Swiper js ka code 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.to("#nav svg",{
  transform: `translateY(0%) scale(0.15)`,
  ease: Power0.easeNone,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#nav",
    start:"top -5%",
    end:"top -10%",
    // markers:true,
    scrub:1
  }
})
var tl =gsap.timeline();
tl.from("#nav svg",{
    opacity:0,
    y:-40,
    duration:0.7,
    delay:0.3
})
.from("#page1 img",{
    scale: 0.55,
    borderRadius:"20px",
    duration:1,
    delay:-0.1,
    ease: Power4.easeOut
})
.from("#nav-part1,#nav-part2",{
    y:-50,
    opacity:0,
    delay:-0.4,
    duration:0.5
})

var h2Data = document.querySelectorAll("#page2 h2");
h2Data.forEach(function (elem) {
  var textData = elem.textContent;
  var splitedText = textData.split("");
  var clutter = "";
  splitedText.forEach(function (e) {
    clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = clutter;
});
gsap.to("#page2 h2 span", {
  color: "#E3E3C4",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2 h2 span",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top -30%",
    scrub: 2,
  },
});

gsap.to("#page2 #svg2,#page2 #svg3",{
  left:"-100vw",
  scrollTrigger:{
    trigger:"#page2 #svg2",
    scroller:"#main",
    scrub:2
  }
})

var p3h2Data = document.querySelectorAll("#page3-heading h1");
p3h2Data.forEach(function (elem) {
  var p3textData = elem.textContent;
  var p3splitedText = p3textData.split("");
  var p3clutter = "";
  p3splitedText.forEach(function (e) {
    p3clutter += `<span>${e}</span>`;
  });
  elem.innerHTML = p3clutter;
});
gsap.to("#page3-heading h1 span", {
  color: "#434B34",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page3-heading h1 span",
    scroller: "#main",
    // markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from("#page3-left h3,#page3-right #img1",{
  opacity:0,
  y:"40",
  scrollTrigger:{
    trigger:"#page3-left h3",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 93%",
    end:"top 80%"
  }
})
gsap.from("#page3-left h2",{
  opacity:0,
  y:"40",
  scrollTrigger:{
    trigger:"#page3-left h2",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 93%",
    end:"top 80%"
  }
})
gsap.from("#page3-left img",{
  opacity:0,
  y:"40",
  scrollTrigger:{
    trigger:"#page3-left img",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 93%",
    end:"top 80%"
  }
})
gsap.from("#page3-right #img2",{
  opacity:0,
  y:"40",
  scrollTrigger:{
    trigger:"#page3-right #img2",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 93%",
    end:"top 80%"
  }
})
gsap.from("#page3-rooms .elem",{
  opacity:0,
  y:"60",
  stagger:1,
  scrollTrigger:{
    trigger:"#page3-rooms .elem",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 85%",
    end:"top -30%"
  }
})

gsap.to("#svg4, #svg5",{
  left:"-50vw",
  scrollTrigger:{
    trigger:"#svg4",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 60%",
    end:"top 0%"
  }
})
gsap.to("#svg6, #svg7",{
  left:"-50vw",
  scrollTrigger:{
    trigger:"#svg6",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 73%",
    end:"top -10%"
  }
})

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    // markers: true,
    start: "top 15%",
    end: "top -30%",
    scrub: 3,
  },
});
tl2.to("#page6-left", {
  transform: `translateX(-50%)`,
  duration: 1,
},"page6-anim");
tl2.to("#page6-right", {
  transform: `translateX(50%)`,
  duration: 1,
},"page6-anim");
tl2.from("#page6-center", {
  transform: `translateY(10%)`,
  duration: 1,
  opacity:0,
  delay:1
},"page6-anim");

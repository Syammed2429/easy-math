const hamburgerContainer = document.querySelector(".hamburger-container");
const linksContainer = document.querySelector(".links-container");
let state = false;
const controller = new ScrollMagic.Controller();

function showMenu(){
  if(!state){
    hamburgerContainer.classList.add("open");
    state = true
    gsap.to(".links-container",{
    height:"60%", 
    width:"100%",
    scale:2,
    ease:"elastic.out",
    duration:0.7
    })
  }
  else {
    hamburgerContainer.classList.remove("open")
    state = false
    gsap.to(".links-container",{
     height:"0%", 
     width:"0%",
     scale:1,
      ease:"elastic.out", 
      duration:0.7
    })
  }
}

hamburgerContainer.addEventListener("click",showMenu); 

const firstTween = new TimelineMax()

.fromTo(".navigation",2,{
  opacity:1
},{
  opacity:0, 
  pointerEvents:"none"
})

.fromTo(".introduction",2,{
  y:"-100%"
},{
  y:"0%", 
  ease: "power1.out"
})

.fromTo(".about-platform",2,{
  x:"-100%"
},{
  x:"0%", 
  ease: "power1.out"
})

.staggerFromTo(".number",1,{
  y:"-200%", 
},{
  y:"0%", 
  ease: "power1.out"
},1)

const firstScene = new ScrollMagic.Scene({
  triggerElement:".first-section-container", 
  triggerHook:0,
  duration:4000
})
.setPin(".first-section-container")
.setTween(firstTween)
controller.addScene(firstScene)

gsap.to(".letters",{
  duration:2,
  y:0, 
  stagger:0.8, 
  ease:"bounce.out"
})

gsap.to(".pencil",{
  x:0,
  duration:3,
  delay:1,
  ease:"elastic.out" 
})

setInterval(() => {
  console.log(window.innerHeight)
},2000)

console.log(window.innerHeight)
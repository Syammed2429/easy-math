const controller = new ScrollMagic.Controller();
const scrollTopBtn = document.querySelector(".back-top");
const facts = document.querySelector(".facts")
const burgerMenu = document.querySelector(".hamburger-menu-container");
const body = document.querySelector("body");
let state = false;

burgerMenu.addEventListener("click",toggleMenu)
function toggleMenu(){
  if(!state){
    burgerMenu.classList.add("open");
    gsap.to(".navigation",{
      x:"0%",
      duration:0.3,
      ease:"power4.out"
    })
    body.style.overflow = "hidden"
    state = true
  }
  
  else {
    burgerMenu.classList.remove("open");
    gsap.to(".navigation",{
      x:"-120%",
      duration:0.3,
      ease:"power4.out"
    })
    body.style.overflow = "auto"
    state = false
  } 
}

/* TWEENING EXAMPLE TITLE */

const exampleTitle = new TimelineMax()
.fromTo(".example",0.3,{
  x:"-150%",
  ease:"power2.out", 
  duration:0.3
},{
  x:"0%",
  ease:"power2.out"
})
.fromTo(".formula",0.3,{
  x:"150%",
  ease:"power2.out", 
  duration:0.3
},{
  x:"0%", 
  ease:"0%"
})

const titleTween = new ScrollMagic.Scene({
  triggerHook:1,
  triggerElement:".example-formula-container", 
  duration:500
})
.setTween(exampleTitle) 
.setClassToggle(".example-formula-container","sideline")
.addTo(controller)

/*END OF EXAMPLE TITLE TWEENING */

/* START OF EVEN ODD SECTION TWEENING */

const evenOdd = new TimelineMax()
.fromTo(".even-odd",0.3,{
  x:"-100%",
  opacity:0,
  duration:0.3
},{
  x:"0%", 
  opacity:1,
  duration:0.3
})

.fromTo(".even-odd-info",0.3,{
  y:"150%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out", 
  duration:0.3
})

.fromTo(".wave-even-odd",0.3,{
  y:"-100%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out"
})


const evenOddImg = new TimelineMax()
.fromTo(".dice",0.3,{
  rotate:"180deg", 
  ease:"power2.out", 
  duration:0.3
},{
  rotate:"0deg", 
  ease:"power2.out", 
})

.fromTo(".even-odd-link",0.3,{
  y:"100%",
  opacity:0,
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  opacity:1,
  ease:"power2.out", 
  duration:0.3
})

.fromTo(".bottom-wave-even-odd",0.3,{
  y:"100%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out", 
  duration:0.3
})

const evenOddTween = new ScrollMagic.Scene({
  triggerHook:0.5,
  triggerElement:".even-odd-body-section", 
  duration:600
})
.setTween(evenOdd)
.addTo(controller)

const imgEvenOddTween = new ScrollMagic.Scene({
  triggerHook:0.7,
  triggerElement:".img-even-odd-container",
  duration:500
})
.setTween(evenOddImg)
.addTo(controller)

/* END OF EVEN ODD TWEENING */

/* START OF PRIME NUMBER TWEENING */

const prime = new TimelineMax()
.fromTo(".prime",0.3,{
  x:"120%",
  ease:"power2.out", 
  duration:0.3,
},{
  x:"0%", 
  delay:1,
  ease:"power2.out"
})

.fromTo(".wave-prime",0.3,{
  y:"-100%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out"
})

.fromTo(".prime-info",0.3,{
  x:"-150%",
  ease:"power2.out", 
  duration:0.3
},{
  x:"0%",
  ease:"power2.out", 
  duration:0.3
})

const primeTween = new ScrollMagic.Scene({
  triggerElement:".prime-body-section", 
  triggerHook:0.5,
  duration:600
})
.setTween(prime)
.addTo(controller)

const primeImg = new TimelineMax()
.fromTo(".billiard",0.3,{
  rotate:"360deg", 
  ease:"power2.out", 
  duration:0.3
},{
  rotate:"0deg", 
  delay:1,
  ease:"power2.out", 
}) 

.fromTo(".prime-link",0.3,{
  x:"100%",
  opacity:0,
  ease:"power2.out", 
  duration:0.3
},{
  x:"0%",
  opacity:1,
  ease:"power2.out", 
  duration:0.3
})

.fromTo(".bottom-waves-prime",0.3,{
  y:"100%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out", 
  duration:0.3
})

const primeImgScene = new ScrollMagic.Scene({
  triggerElement:".img-prime-container",
  triggerHook:0.5, 
  duration:600
})
.setTween(primeImg)
.addTo(controller)
/* END OF PRIME NUMBER SECTION */

/* START OF RECTANGLE AREA TWEENING */

const rectangle = new TimelineMax()
.fromTo(".rectangle",0.3,{
  x:"-100%",
  opacity:0,
  duration:0.3
},{
  x:"0%", 
  opacity:1,
  duration:0.3
})

.fromTo(".rectangle-info",0.3,{
  y:"150%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out", 
  duration:0.3
})

.fromTo(".wave-rectangle",0.3,{
  y:"-100%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out"
}) 

const rectangleScene = new ScrollMagic.Scene({
  triggerHook:0.5,
  triggerElement:".rectangle-section", 
  duration:600
})
.setTween(rectangle)
.addTo(controller)

const rectangleImg = new TimelineMax()

.fromTo(".rectangle-img",0.3,{
  rotate:"180deg", 
  ease:"power2.out", 
  duration:0.3
},{
  rotate:"0deg", 
  ease:"power2.out", 
})

.fromTo(".rectangle-link",0.3,{
  y:"100%",
  opacity:0,
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  opacity:1,
  ease:"power2.out", 
  duration:0.3
})

.fromTo(".bottom-wave-rectangle",0.3,{
  y:"100%",
  ease:"power2.out", 
  duration:0.3
},{
  y:"0%",
  ease:"power2.out", 
  duration:0.3
})

const rectangleImgTween = new ScrollMagic.Scene({
  triggerElement:".img-rectangle-container", 
  triggerHook:0.5, 
  duration:500
})
.setTween(rectangleImg)
.addTo(controller)

const scrollTop = TweenMax.to(".back-top",1,{
  display:"flex", 
  ease:"power2.out"
})

const scrollTopTween = new ScrollMagic.Scene({
  triggerHook:0,
  triggerElement:".example-formula-container", 
  duration:500
})
.setTween(scrollTop)
.addTo(controller)

scrollTopBtn.addEventListener("click",() => {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})


fetch(`http://numbersapi.com/random/trivia?json`)
.then(res => res.json())
.then(data => {
  facts.textContent = data.text
 })
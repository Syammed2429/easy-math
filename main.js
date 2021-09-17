const controller = new ScrollMagic.Controller();

gsap.fromTo(".letter-title",{
  y:"-2000%"
},{
  y:"0%",
  duration:3,
  stagger:1,
  ease : "bounce.out"
})


const firstSection = new TimelineMax()
.fromTo(".section1",3,{
  x:"-100%", 
  opacity:0
},{
  x:"0%",
  ease : "Linear.easeOut", 
  opacity:1
})

.fromTo(".books-body",2,{
  y:"100%", 
  scale:0.5
},{
  y:"-30%",
  scale:1
}) 
.to(".navigation",2,{
  opacity:0,
  pointerEvents:"none"
})

const firstSectionTween = new ScrollMagic.Scene({
  triggerHook:0.7, 
  triggerElement:".body-section", 
  duration:500
})
.setTween(firstSection)
.addTo(controller)
/*  SQUARE FORMULA ANIMATION */
const formulas = new TimelineMax()
.fromTo(".rectangle-info",2,{
  opacity:0,
  scale:0
},{
  opacity:1,
  scale:1, 
  ease:"Linear.easeOut"
})
.fromTo(".rectangle-img",2,{
  opacity:0,
  x:"100%",
  rotate:"180deg"
},{
  opacity:1,
  rotate:"20deg",
  x:"0%", 
  ease:"Linear.easeOut"
})

const oddPrimeFormula = new TimelineMax()
.fromTo(".even-odd-info",2,{
  opacity:0,
  scale:0
},{
  opacity:1,
  scale:1, 
  ease:"Linear.easeOut"
})
.fromTo(".even-odd-img",2,{
  opacity:0,
  x:"100%",
  rotate:"180deg"
},{
  opacity:1,
  rotate:"0deg",
  x:"0%", 
  ease:"Linear.easeOut"
})

const primeFormula = new TimelineMax()
.fromTo(".prime-info",2,{
  opacity:0,
  scale:0
},{
  opacity:1,
  scale:1, 
  ease:"Linear.easeOut"
})
.fromTo(".prime-img",2,{
  opacity:0,
  x:"100%",
  rotate:"180deg"
},{
  opacity:1,
  rotate:"0deg",
  x:"0%", 
  ease:"Linear.easeOut"
})


const scenesquareFormula = new ScrollMagic.Scene({
  triggerHook:0.5,
  triggerElement:".main-section", 
  duration:300
})
.setTween(formulas)
.addTo(controller) 

const sceneEvenOddFormula = new ScrollMagic.Scene({
  triggerHook:0.5,
  triggerElement:".even-odd-section", 
  duration:300
})
.setTween(oddPrimeFormula)
.addTo(controller)

const scenePrimeFormula = new ScrollMagic.Scene({
  triggerHook:0.5, 
  triggerElement:".prime-section",
  duration:300
})
.setTween(primeFormula)
.addTo(controller)
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1')
//END SECTION INTRO

const section = document.querySelector('section');
const text_2 = section.querySelector('h1');
// END SECTION 2

// SCROLLMagic
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration : 10000,
    triggerElement : intro,
    triggerHook : 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

// TEXT ANIMATION

const textAnim = TweenMax.fromTo(text, 3, {opacity : 1}, {opacity : 0});

let scene_1 = new ScrollMagic.Scene({
    duration : 3000,
    triggerElement : intro,
    triggerHook : 0
})
.setTween(textAnim)
.addTo(controller);


// VIDEO ANIMATIONS
let accelmeter = 0.1;
let scrollpos = 0;
let delay = 0;

// E => instead of this you can use Vanilla JS onScroll()
scene.on("update", e =>{
    scrollpos = e.scrollPos / 1000; // ScrollPosition from ms => sec
});

setInterval(() => {
    delay += (scrollpos - delay) * accelmeter;
    console.log(scrollpos, delay);
    video.currentTime = scrollpos;
}, 33.3);
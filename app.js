// Refresh auto au changement d'orientation de l'écran
function orientationHasChanged() {
    document.location.reload(true);
}

window.addEventListener('orientationchange', orientationHasChanged);

// Animation des images
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: ".event2",
    triggerHook: "onEnter",
    duration: '100%'
})
    .setPin('.event1 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event2",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event2 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event3",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event3 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event4",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event4 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event5",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event5 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event6",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event6 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event7",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event7 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event8",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event8 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event9",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event9 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event10",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event10 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event11",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event11 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event12",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event12 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event13",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event13 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event14",
    triggerHook: "onEnter",
    duration: '200%'
})
    .setPin('.event14 .pinSection')
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event15",
    triggerHook: "onEnter",
    duration: '100%'
})
    .setPin('.event15 .pinSection')
    // .addIndicators()
    .addTo(controller);
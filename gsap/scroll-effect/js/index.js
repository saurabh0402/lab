(() => {
  gsap.registerPlugin(ScrollTrigger);

  const scrollAnim = gsap.to('.lines', {
    x: '-50%',
    ease: 'none'
  });

  ScrollTrigger.create({
    trigger: '.container',
    animation: scrollAnim,
    pin: true,
    scrub: 0.6,
  });
})();
export default {
  slideLeft: {
    name: "slide-left",
    css: false,
    enter(el) {
      this.$gsap.from(".menu-link .line", {
        duration: 1,
        width: "calc(100% + 68px)",
        left: "-68px",
      });
    },
  },
  slideRight: {
    name: "slide-right",
    css: false,
    enter(el) {
      this.$gsap.from(".menu-link .line", {
        duration: 1,
        width: "calc(100% + 68px)",
        right: "-68px",
      });
    },
  }
}

/////////////////////


transition: {
  css: false,
  mode: "out-in",
  enter(el, done) {
    this.$gsap.from(el, {
      autoAlpha: 0,
    });
  },
  leave(el, done) {
    this.$gsap
      .timeline()
      .to(".home__titles", {
        autoAlpha: 0,
      })
      .to(
        ".home__titles",
        {
          x: 100,
          y: 100,
          ease: "expo.inOut",
          duration: 1,
        },
        0
      )
      .to(
        ".home__link",
        {
          y: 100,
          x: 100,
          ease: "expo.inOut",
          duration: 1,
          onComplete: done,
        },
        0
      );
    }
  },

  ////////////////// Acces la ruta

    main(:class="currentPage")

    computed: {
      currentPage() {
        return this.$route.name;
      },
    },
    

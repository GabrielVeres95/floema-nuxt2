<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
.preloader 
  p.preloader__text#split-all
    | The surprise of what is possible 
    br
    | to make with a simple 
    br
    | and thin thread.

    .preloader__number(ref="percent") 0%
</template>

<script>
import { splitAll } from '~/assets/js/utils/textSplitting.js'

export default {
  mounted() {

    this.loader()

    splitAll()

    this.quoteFlicker()
    this.percentIn()
    this.charIn()
    this.preloaderOut()
    
  },

  methods: {
    loader(_success) {
      setTimeout(() => {
        const inner = this.$refs.percent
        let w = 0;
        const t = setInterval(function () {
          w = w + 2
          inner.textContent = w + '%'
          if (w === 100) {
            clearInterval(t)
            w = 0
            if (_success) {
              return _success()
            }
          }
        }, 60)
      }, 1000)
    },

    removeElement(element) {
      if (typeof(element) === "string") {
        element = document.querySelector(element);
      }
      return function() {
        element.parentNode.removeChild(element);
      }
    },

    quoteFlicker() {
      this.$gsap.to('#split-all', { 
        opacity: 1,
        duration: 0.4,
      })
    },

    percentIn() {
      this.$gsap.to('.preloader__number', { 
        autoAlpha: 1,
        duration: 0.4,
        ease: 'expo.out'
      })
    },

    charIn() {
      this.$gsap.fromTo('.char', {
        y: '100%',        
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1, 
        duration: 0.4,
        stagger: 0.01,
        delay: 1,
        ease: {
          each: "elastic.in(1.5, 1)"
        }
      })
    },

    preloaderOut() {
      const tl = this.$gsap.timeline()
      tl.to('.char', { 
          opacity: 0,
          y: '-100%', 
          duration: 0.4,
          stagger: 0.01, 
          delay: 4, 
          ease: {
          each: "elastic.out(1.5, 1)"
        }
        })
        .to('.preloader__number', { 
          autoAlpha: 0,
          duration: 1.6,
          ease: 'expo.out',
          onComplete() {
            document.querySelector("html").style.overflow = "auto"
          }
        }, 5)
        .to('.preloader', { 
          autoAlpha: 0,
          duration: 1.6,
          ease: 'expo.out'
        }, 6)
        .call(this.removeElement('.preloader'))
    },

  }
}
</script>
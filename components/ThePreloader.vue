<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
.preloader 
  p.preloader__text#split-lines
    | The surprise of what is possible 
    br
    | to make with a simple 
    br
    | and thin thread.

    .preloader__number(ref="percent") 0%
</template>

<script>
import { splitLines } from '~/assets/js/utils/textSplitting.js'

export default {
  mounted() {

    this.loader()

    splitLines()

    this.quoteFlicker()
    // this.percentIn()
    this.quoteIn()
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
        }, 30)
      }, 800)
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
      this.$gsap.to('#split-lines', { 
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

    quoteIn() {
      this.$gsap.fromTo('.line', {
        y: '100%',        
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1, 
        duration: 1.4,
        stagger: 0.1, 
        ease: 'expo.in'
      })
    },

    preloaderOut() {
      const tl = this.$gsap.timeline()
      tl.to('.line', { 
          autoAlpha: 0,
          y: '-100%', 
          duration: 1.4,
          stagger: 0.1, 
          delay: 4, 
          ease: 'expo.out'
        })
        .to('.preloader__number', { 
          autoAlpha: 0,
          duration: 1.6,
          ease: 'expo.out'
        }, 3.2)
        .to('.preloader', { 
          autoAlpha: 0,
          duration: 1.6,
          ease: 'expo.out'
        }, 5)
        // .call(this.removeElement('.preloader'))
    },

  }
}
</script>
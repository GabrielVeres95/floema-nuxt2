<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
.preloader 
  p.preloader__text#split-all
    | The surprise of what is possible 
    br
    | to make with a simple 
    br
    | and thin thread.

    .preloader__number
      span#number 0
      span#percent %
</template>

<script>
import { splitAll } from '~/assets/js/utils/textSplitting.js'

export default {
  mounted() {

    splitAll()
    this.init()
    
    this.loader()
    
  },

  methods: {
    loader() {
      this.$gsap.to('#number', { 
        innerText: 100, 
        duration: 4.5, 
				snap: {
					innerText:2
				} 
			}, 1)
    },

    init() {
      
      this.$gsap.set('#split-all', { 
       autoAlpha: 1
      })

      this.$gsap.fromTo('.char', {
        y: '100%',        
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1, 
        duration: 0.8,
        stagger: 0.006,
        delay: 1,
        ease: 'back.out(1.25)'
      })

      const tl = this.$gsap.timeline()
      tl.to('.char', { 
          opacity: 0,
          y: '-100%', 
          duration: 0.8,
          stagger: 0.006, 
          delay: 4, 
          ease: "back.in(1.25)"
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

    removeElement(element) {
      if (typeof(element) === "string") {
        element = document.querySelector(element);
      }
      return function() {
        element.parentNode.removeChild(element);
      }
    }
  }
}
</script>
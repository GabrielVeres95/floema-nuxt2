<template lang="pug">

.home 
  .home__wrapper 

    .home__titles 
      .home__titles__wrapper
        .home__titles__item
          .home__titles__label
            .home__titles__label__text Collection One
          .home__titles__title
            .home__titles__title__text Aria
        .home__titles__item
          .home__titles__label
            .home__titles__label__text Collection Two
          .home__titles__title
            .home__titles__title__text Onde
        .home__titles__item
          .home__titles__label
            .home__titles__label__text Collection Three
          .home__titles__title
            .home__titles__title__text Treccia
        .home__titles__item
          .home__titles__label
            .home__titles__label__text Collection Four
          .home__titles__title
            .home__titles__title__text Vita

    .home__gallery
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/1.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/2.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/3.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/4.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/5.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/6.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/7.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/8.jpg" preset="general" sizes="sm:50vw lg:400px") 
      figure.home__gallery__media
        img.home__gallery__media__image(alt="Floema Jwelery Gallery" src="/images/gallery/9.jpg" preset="general" sizes="sm:50vw lg:400px") 
     

    NuxtLink.home__link(to="/collections")
        span.home__link__text Discover collections
        svg.home__link__icon(xmlns="http://www.w3.org/2000/svg" preset="general" sizes="sm:50vw lg:600px" viewBox="0 0 288 60")
          path(stroke="#FFFFFF" opacity="1" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z")
          path(stroke="#FFFFFF" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z" style="stroke-dasharray: 604.372, 604.372; stroke-dashoffset: -5439px;")

</template>

<script>
import EventBus from '../eventBus'
import { App } from '~/assets/webgl/index/HomeGallery'

export default {
  transition: {
    css: false,
    mode: 'out-in',
    enter(el, done) {
      this.$gsap
        .timeline()
        .from('.home', {
          autoAlpha: 0,
        })
        .from('.home__wrapper', {
          autoAlpha: 0,
          duration: 0.8,
        })
    },
    leave(el, done) {
      return this.$gsap.timeline().to('.home', {
        autoAlpha: 0,
        duration: 0.8,
        onComplete: done,
      })
    },
  },

  head: {
    // <-- property used by vue-meta to add header tags
    title: 'Titlu pagina', // <-- For our title tag
    meta: [
      {
        hid: 'description',
        name: 'description', // <-- for our meta description tag
        content:
          'Where you can find all the events taking place in your neighborhood',
      },
    ],
  },

  mounted() {
    EventBus.$on('galleryAnimation', () => {
      this.$gsap.to('.home__link__icon', {
        duration: 2,
        scale: 1,
      })
    })

    // eslint-disable-next-line no-new, no-unused-vars
    const homeGallery = new App()
  },
}
</script>

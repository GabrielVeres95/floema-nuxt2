<template lang="pug" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px">

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
        nuxt-img.home__gallery__media__image(src="/images/gallery/1.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/2.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/3.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/4.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/5.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/6.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/7.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/8.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/9.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/10.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/11.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/12.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/13.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/14.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/15.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/16.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/17.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
      figure.home__gallery__media
        nuxt-img.home__gallery__media__image(src="/images/gallery/18.jpg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")

    NuxtLink.home__link(to="/collections")
        span.home__link__text Discover collections
        svg.home__link__icon(xmlns="http://www.w3.org/2000/svg" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px" viewBox="0 0 288 60")
          path(stroke="#FFFFFF" opacity="1" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z")
          path(stroke="#FFFFFF" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z" style="stroke-dasharray: 604.372, 604.372; stroke-dashoffset: -5439px;")

</template>


<script>
  export default {
    head: { // <-- property used by vue-meta to add header tags
      title: 'Titlu pagina', // <-- For our title tag
      meta: [
        {
          hid: 'description',  
          name: 'description', // <-- for our meta description tag
          content: 'Where you can find all the events taking place in your neighborhood'
        }
      ]
    },
  }
</script>
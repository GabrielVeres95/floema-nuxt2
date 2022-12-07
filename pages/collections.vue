<template lang="pug">

.collections
  .collections__wrapper

    .collections__titles 
      .collections__titles__wrapper
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | One
          .collections__titles__title
            .collections__titles__title__text Aria
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Two
          .collections__titles__title
            .collections__titles__title__text Onde
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Three
          .collections__titles__title
            .collections__titles__title__text Treccia
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Four
          .collections__titles__title
            .collections__titles__title__text Vita
      .collections__titles__wrapper
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | One
          .collections__titles__title
            .collections__titles__title__text Aria
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Two
          .collections__titles__title
            .collections__titles__title__text Onde
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Three
          .collections__titles__title
            .collections__titles__title__text Treccia
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Four
          .collections__titles__title
            .collections__titles__title__text Vita
      .collections__titles__wrapper
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | One
          .collections__titles__title
            .collections__titles__title__text Aria
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Two
          .collections__titles__title
            .collections__titles__title__text Onde
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Three
          .collections__titles__title
            .collections__titles__title__text Treccia
        .collections__titles__item
          .collections__titles__label
            .home__titles__label__text 
            | Collection
            br
            | Four
          .collections__titles__title
            .collections__titles__title__text Vita

    .collections__gallery
      .collections__gallery__wrapper
       
       .aria__collection
          NuxtLink.collections__gallery__link(v-for="aria in arias" :key="aria.id" :to="aria.url")
            figure.collections__gallery__media(v-shared-element:[aria.uid])
              prismic-image.collections__gallery__media__image(:field="aria.data.product_image")

       .onde__collection
          NuxtLink.collections__gallery__link(v-for="onde in ondes" :key="onde.id" :to="onde.url")
            figure.collections__gallery__media(v-shared-element:[onde.uid])
              prismic-image.collections__gallery__media__image(:field="onde.data.product_image")

       .vita__collection
          NuxtLink.collections__gallery__link(v-for="vita in vitas" :key="vita.id" :to="vita.url")
            figure.collections__gallery__media(v-shared-element:[vita.uid])
              prismic-image.collections__gallery__media__image(:field="vita.data.product_image")

       .treccia__collection
          NuxtLink.collections__gallery__link(v-for="treccia in treccias" :key="treccia.id" :to="treccia.url")
            figure.collections__gallery__media(v-shared-element:[treccia.uid])
              prismic-image.collections__gallery__media__image(:field="treccia.data.product_image")
       
    .collections__content
      article.collections__article.collections__article--active
        h2.collections__article__title Vita Collection
        p.collections__article__description 
          | The organic structure of the Life collection contains minute shapes created with precious metal threads, all different from each other, and small gold or silver spheres, that unveil themselves with the light reflection. 
      article.collections__article
        h2.collections__article__title Aria Collection
        p.collections__article__description 
          | The oval shape represents perfection, balance, and elegance. It is enriched by fantastic filigree workmanship, and a small precious sphere made of metal in the center. Light and minima, the Aria collection earrings are perfect to wear on every occasion.
      article.collections__article
        h2.collections__article__title Onde Collection
        p.collections__article__description 
          | The fluid movement of the elements of this collection joins the soft shapes of the filigree, that look like floating in the structures. The repetition of the waves creates big but incredibly light earrings, comfortable to wear because almost imperceptible. 
      article.collections__article
        h2.collections__article__title Treccia Collection
        p.collections__article__description 
          | Every single piece of this collection is created handwaving several precious threads. Some of the twines contain precious and colorful stones, set by the Florentine master Marco with a special technique. The result is an invisible setting that lets the stone-free to shine.

    .collections__mobile
      .collections__mobile__item
        .collections__mobile__item__label
          p Collection one
        .collections__mobile__item__title
          p Aria
      .collections__mobile__item
        .collections__mobile__item__label
          p Collection two
        .collections__mobile__item__title
          p Onde
      .collections__mobile__item
        .collections__mobile__item__label
          p Collection three
        .collections__mobile__item__title
          p Treccia
      .collections__mobile__item
        .collections__mobile__item__label
          p Collection foue
        .collections__mobile__item__title
          p Vita

</template>

<script>
import $ from 'jquery'

export default {
  
  transition: {
    mode: "out-in",
    css: false,
    
    enter(el, done) {
      this.$gsap.timeline()
      .from('.collections', {
        autoAlpha: 0,
        duration: 0.8
      })
    },
    
    leave(el, done) {
      if ($(".clicked")[0]){
        // Do something if class exists
        return this.$gsap
        .timeline()
        .to($('.collections__gallery__media').not('.clicked'), {
          autoAlpha: 0,
        })
        .to(['.collections__titles', '.collections__content'], {
          autoAlpha: 0,
          onComplete: done
        }, 0)
      } else {
        // Do something if class does not exist
        return this.$gsap
        .timeline()
        .to(".collections", {
          autoAlpha: 0,
          duration: 0.8,
          onComplete: done
        })
      }
    }
  },
 
  async asyncData({ $prismic, params, error }) {
    const arias = await $prismic.api.query(
      $prismic.predicates.at('document.tags',['aria']))
    const ondes = await $prismic.api.query(
      $prismic.predicates.at('document.tags',['onde']))
    const vitas = await $prismic.api.query(
      $prismic.predicates.at('document.tags',['vita']))
    const treccias = await $prismic.api.query(
      $prismic.predicates.at('document.tags',['treccia']))
    
      return { 
        arias: arias.results,
        ondes: ondes.results,
        vitas: vitas.results,
        treccias: treccias.results,
      }
  },

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

  mounted(){
    $(document).ready(function() {
      $('.clicked').removeClass('clicked')
    })
    $(".collections__gallery__media").click(function(){
      $(this).addClass('clicked')
    })
  },

  methods: {
    
  }
}
</script>
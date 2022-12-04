<template lang="pug">

.detail 
  .detail__wrapper 

    figure.detail__media(v-shared-element:[product.uid])
      prismic-image.details__media__image(:field="product.data.product_image")
    
    .detail__information

      p.detail__information__collection 
        span.detail__information__collection__text {{ product.data.collection_title }}
      h1.detail__information__title {{ product.data.title }}


      .detail__information__content

        .detail__information__highlights
          p.detail__information__highlight
            
            IconArrow

            span.detail__information__highlight__text {{ product.data.dimensions }}
          
          p.detail__information__highlight
            
            IconStar 

            span.detail__information__highlight__text {{ product.data.materials }}

        .detail__information__list
          .detail__information__item
            p.detail__information__item__title Info
            span.detail__information__item__description {{ product.data.info }}

          .detail__information__item
            p.detail__information__item__title You should know
            span.detail__information__item__description {{ product.data.extra }}
        
        .detail__information__footer
          prismic-link.detail__information__link(:field="product.data.shop__link") 
            span.detail__information__link__text Shop it 

    NuxtLink.detail__button(to="/collections")
      span.detail__button__text Close 
      
      DetailButtonIcon

</template>

<script>
import $ from 'jquery'

  export default {
    
    transition: {
      mode: "out-in",
      css: false,
      
      enter(el, done) {
        this.$gsap.timeline()
        .from(['.detail__information', '.detail__button'], {
          autoAlpha: 0,
          duration: 0.8,
        })
      },
      
      leave(el, done) {
        if ($(".clicked")[0]){
          // Do something if class exists
          return this.$gsap
          .timeline()
          .to('.detail', {
            autoAlpha: 0,
            duration: 0.8,
            onComplete: done
          })
        } else {
          // Do something if class does not exist
          return this.$gsap
          .timeline()
          .to([".detail__information", ".detail__button"], {
            autoAlpha: 0,
            onComplete: done
          })
        }
      }
    },

     
  async asyncData({ $prismic, params, error }) {
    const product = await $prismic.api.getByUID("product", params.uid)
    if (product) {
      return { product }
    } else {
      error({ statusCode: 404, message: "Page not found" })
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
      $(".navigation__link").click(function(){
        $(this).addClass('clicked')
      })
      $(".navigation__list__item:nth-of-type(2)").click(function(){
        $(this).addClass('clicked')
      })
    },

  }
</script>
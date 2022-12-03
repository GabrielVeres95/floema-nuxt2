<template lang="pug">

.detail 
  .detail__wrapper 
  
    figure.detail__media(v-shared-element:collection-image="{restrictToRoutes: ['/collections']}")
      nuxt-img.details__media__image(src="/images/products/silver-necklace.png" preset="general" sizes="sm:100vw lg:600px")
    
    .detail__information

      p.detail__information__collection 
        span.detail__information__collection__text Vita collection
      h1.detail__information__title 
        | Silver 
        br
        | Necklace 

      .detail__information__content

        .detail__information__highlights
          p.detail__information__highlight
            
            IconArrow

            span.detail__information__highlight__text 
            | The necklace is 44 cm long. 
            br
            | The setting is 5 mm long and 4 mm wide.
          p.detail__information__highlight
            
            IconStar 

            span.detail__information__highlight__text Silver, Ruby Stone

        .detail__information__list
          .detail__information__item
            p.detail__information__item__title Info
            span.detail__information__item__description
              | This luminous necklace, called “Venetian” is perfect for the four thread woven bezel that protects a wonderful intense red ruby. 
              br
              | The necklace is completely made in Sterling Silver.

          .detail__information__item
            p.detail__information__item__title You should know
            span.detail__information__item__description
              | Each FLOEMA jewel is entirely handmade: any difference from the original picture evidences the unique and artisanal manufacture of the piece.
        
        .detail__information__footer
          NuxtLink.detail__information__link(to="/collections") 
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
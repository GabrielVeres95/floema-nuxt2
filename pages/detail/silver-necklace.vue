<template lang="pug">

.detail 
  .detail__wrapper 
  
    figure.detail__media
      nuxt-img.details__media__image(src="/images/products/silver-necklace.png" format="webp" quality="80" sizes="sm:100vw md:60vw lg:400px")
    
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
            svg.detail__information__highlight__icon.detail__information__highlight__icon--arrow(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;")
              path(stroke="#F9F1E7" d="M14.84,25.46l11.31-11.31" data-svg-origin="20.4950008392334 19.804998874664307" style="transform-origin: 0px 0px; opacity: 1; visibility: inherit;" transform="matrix(1,0,0,1,0,0)")
              path(fill="#F9F1E7" d="M30.75,9.55l-0.66,2.36l-0.05,2.59l-1.93-2.31l-2.31-1.93l2.59-0.05L30.75,9.55z" data-svg-origin="28.27500057220459 12.025000095367432" style="transform-origin: 0px 0px; opacity: 1; visibility: inherit;" transform="matrix(1,0,0,1,0,0)")
              path(fill="#F9F1E7" d="M10.25,30.05l0.66-2.36l0.05-2.59l1.93,2.31l2.31,1.93l-2.59,0.05L10.25,30.05z" data-svg-origin="12.725000381469727 27.57499885559082" style="transform-origin: 0px 0px; opacity: 1; visibility: inherit;" transform="matrix(1,0,0,1,0,0)")
              path(fill="none" stroke="#F9F1E7" d="M20,0.5c10.77,0,19.5,8.73,19.5,19.5S30.77,39.5,20,39.5S0.5,30.77,0.5,20S9.23,0.5,20,0.5z")
            span.detail__information__highlight__text 
            | The necklace is 44 cm long. 
            br
            | The setting is 5 mm long and 4 mm wide.
          p.detail__information__highlight
            svg.detail__information__highlight__icon.detail__information__highlight__icon--star(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;")
              path(fill="#F9F1E7" d="M24.26,9.87l-2.76,8.6l8.72-2.63l-8.16,4.13l8.15,4.26l-8.71-2.82l2.82,8.91l-4.26-8.34l-4.14,8.15l2.63-8.72 l-8.6,2.75l8.15-4.2l-8.34-4.33l8.78,2.82l-2.82-8.78l4.33,8.34L24.26,9.87z" data-svg-origin="19.989999771118164 19.994999885559082" style="transform-origin: 0px 0px; opacity: 1; visibility: inherit;" transform="matrix(1,0,0,1,0,0)")
              path(fill="none" stroke="#F9F1E7" d="M20,0.5c10.77,0,19.5,8.73,19.5,19.5S30.77,39.5,20,39.5S0.5,30.77,0.5,20S9.23,0.5,20,0.5z")
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
      svg.detail__button__icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60")
        path(fill="none" stroke="#FFFFFF" opacity="1" d="M62,0.5c33.97,0,61.5,13.21,61.5,29.5S95.97,59.5,62,59.5S0.5,46.29,0.5,30S28.03,0.5,62,0.5z")
        path(fill="none" stroke="#FFFFFF" d="M62,0.5c33.97,0,61.5,13.21,61.5,29.5S95.97,59.5,62,59.5S0.5,46.29,0.5,30S28.03,0.5,62,0.5z" style="stroke-dasharray: 294.835, 294.835; stroke-dashoffset: -1474px;")


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
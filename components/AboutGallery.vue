<template lang="pug">
.about__gallery__wrapper
  figure.about__gallery__media(v-for='image in images' :key='image.id')
    nuxt-img.about__gallery__media__image(:alt="image.alt" :src="image.src" :preset="image.preset" :sizes="image.sizes")
</template>

<script>
export default {
  data() {
    return {
      images: [
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/1.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'1'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/2.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'2'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/3.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'3'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/4.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'4'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/5.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'5'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/6.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'6'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/7.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'7'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/8.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'8'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/9.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'9'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/10.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'10'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/11.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'11'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/12.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'12'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/13.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'13'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/14.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'14'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/15.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'15'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/16.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'16'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/17.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'17'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/18.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'18'},
        {alt:'Floema Jwelery Gallery', src:'/images/gallery/19.jpg', preset:"general", sizes:"sm:50vw lg:400px", id:'19'},
      ]
    }
  }
}
</script>
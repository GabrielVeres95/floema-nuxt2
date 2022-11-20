<!-- Acest layout apare pe toate paginile by default.
Poate fi folosit pentru integrarea navigatiei si/sau footer -->
<template lang="pug">
.app
  CursorFollower
  ThePreloader
  TheNavigation
  #smooth-wrapper
    #smooth-content
      Nuxt
</template>

<script>

export default {

  mounted() {
    this.smoothScroll()
  },

  methods: {
    smoothScroll() {
      // eslint-disable-next-line no-unused-vars
      const smoother = this.$ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content'
      })
    }
  },
 
}
</script>
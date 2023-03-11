<!-- Acest layout apare pe toate paginile by default.
Poate fi folosit pentru integrarea navigatiei si/sau footer -->
<template lang="pug">
.app
  //- CursorFollower
  ThePreloader
  TheNavigation
  Nuxt
</template>

<script>
import MouseFollower from 'mouse-follower'
// eslint-disable-next-line import/no-named-as-default
import gsap from 'gsap'

export default {
  mounted() {
    MouseFollower.registerGSAP(gsap)

    // eslint-disable-next-line no-unused-vars
    const cursor = new MouseFollower()
  },

  methods: {},
}
</script>

<style></style>

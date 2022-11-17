<template lang="pug">
.preloader__number(ref="percent") 0%
</template>

<script>
// import { loader } from '~/assets/js/components/preloaderPercent'

export default {
  mounted() {
    this.loader()
  },
  methods: {
    loader(_success) {
      const inner = this.$refs.percent
      let w = 0;
      const t = setInterval(function () {
        w = w + 2
        inner.textContent = w + '%'
        if (w === 100) {
          clearInterval(t)
          w = 0
          if (_success) {
            return _success()
          }
        }
      }, 70)
    }
  }
}
</script>
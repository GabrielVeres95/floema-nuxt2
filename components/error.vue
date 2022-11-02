<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found. Pagina de test</h1>
    <h1 v-else>An error occurred. Pagina de test</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {

  }
</script>
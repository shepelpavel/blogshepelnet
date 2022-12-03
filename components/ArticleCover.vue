<template>
  <div class="article-cover">
    <v-img :src="src" :alt="alt" :title="alt"></v-img>
  </div>
</template>
<script>
export default {
  name: 'ArticleCover',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.article-cover {
  max-width: 800px;
}
</style>
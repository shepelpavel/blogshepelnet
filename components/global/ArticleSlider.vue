<template>
  <div class="article-slider" v-if="images.length > 0">
    <div v-for="image of images" :key="image.src">
      <v-img :src="image.src" :alt="image.alt" :title="image.alt"></v-img>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArticleSlider',
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.article-slider {
  max-width: 800px;
}
</style>
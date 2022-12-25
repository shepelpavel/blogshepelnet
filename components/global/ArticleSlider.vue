<template>
  <div>
    <div v-if="images && images.length > 1" class="article-slider">
      <agile :options="options">
        <div v-for="image of images" :key="image.src" class="slide">
          <v-img :src="image.src" :alt="image.alt" :title="image.alt"></v-img>
        </div>
      </agile>
    </div>
    <div v-if="images && images.length == 1" class="article-slider">
      <v-img
        :src="images[0].src"
        :alt="images[0].alt"
        :title="images[0].alt"
      ></v-img>
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
  data() {
    return {
      options: {
        autoplay: false,
        fade: false,
        centerMode: true,
        dots: true,
        navButtons: true,
        slidesToShow: 1,
      },
    }
  },
}
</script>

<style lang="scss">
.article-slider {
  max-width: 800px;
  margin: 24px auto 28px;
  .agile {
    &__actions {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    &__dots {
      position: absolute;
      left: 0;
      bottom: -16px;
      width: 100%;
      height: 16px;
      justify-content: center;
    }
    &__dot {
      button {
        width: 18px;
        height: 8px;
        margin: 0 3px;
        background-color: rgba(var(--color_white), 0.4);
        transform: skewX(-30deg);
      }
      &--current {
        button {
          background-color: rgba(var(--color_white), 0.8);
        }
      }
    }
  }
}
</style>
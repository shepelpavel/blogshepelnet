<template>
  <div>
    <HeaderBlock />
    <div class="content">
      <Nuxt />
    </div>
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderBlock,
    FooterBlock,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.content {
    min-height: 100vh;
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid rgb(var(--color_gray));
    padding: 12px 16px;
    background-color: rgba(var(--color_black), 0.4);
}
</style>

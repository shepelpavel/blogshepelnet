<template>
  <div>
    <article class="article">
      <ArticleCover v-if="article.cover" :src="article.cover" :alt="article.description ?? article.slug"></ArticleCover>
      <h1>{{ article.title ?? article.slug }}</h1>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
import ArticleCover from '~/components/ArticleCover.vue';

export default {
  name: 'SlugPage',
  components: {
    ArticleCover,
  },
  async asyncData({ $content, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [article] = await $content({ deep: true }).where({ path }).fetch()
    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
    return {
      article,
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>

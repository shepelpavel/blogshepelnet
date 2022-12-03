<template>
  <div>
    <article>
      <h1>{{ article.title ?? article.slug }}</h1>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'SlugPage',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
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

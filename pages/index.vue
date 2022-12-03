<template>
  <div>
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.slug">
          {{ article.title ?? article.slug }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'createdAt', 'slug'])
      .fetch()
    return { articles }
  },
  head() {
    return {
      title: 'Бложек',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Сельским языком про кибернетические технологии, IT и прочую компьютерную бесовщину. Внимательный будь! Если не будешь внимательный, не выкупишь слои повествования.',
        },
      ],
    }
  },
}
</script>

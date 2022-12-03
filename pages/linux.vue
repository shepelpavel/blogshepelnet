<template>
  <div>
    <ul v-if="articles.length > 0">
      <li v-for="article of articles" :key="article.path + article.slug">
        <NuxtLink :to="article.path">
          {{ article.title ?? article.slug }}
        </NuxtLink>
      </li>
    </ul>
    <p>----------</p>
    <GroupsMenu></GroupsMenu>
  </div>
</template>

<script>
import GroupsMenu from '~/components/GroupsMenu.vue'

export default {
  name: 'IndexPage',
  components: {
    GroupsMenu,
  },
  async asyncData({ $content }) {
    const articles = await $content('linux', { deep: true })
      .only(['title', 'description', 'createdAt', 'slug', 'path'])
      .fetch()
    return { articles }
  },
  head() {
    return {
      title: 'Статьи про Linux',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Статьи про Linux',
        },
      ],
    }
  },
}
</script>

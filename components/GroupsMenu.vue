<template>
  <div>
    <ul v-if="groups.length > 0">
      <li v-for="group of groups" :key="group.path">
        <NuxtLink :to="group.path">
          {{ group.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GroupsMenu',
  data() {
    return {
      groups: [],
    }
  },
  mounted() {
    this.getGroups()
  },
  methods: {
    async getGroups() {
      const articles = await this.$content({ deep: true }).only(['dir']).fetch()
      this.groups = articles.map((item) => ({
        path: item.dir,
        name: item.dir.replace('/', '').toUpperCase(),
      }))
    },
  },
}
</script>

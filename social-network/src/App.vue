<template>
  <div id="app">
    <MainLayout/>
    <!-- <component :is="layout">
      <router-view/>
    </component> -->
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  components: {
    MainLayout,
  },

  computed: {
    layout() {
      // console.log(`${(this.$routes.meta.layout || 'empty')}-layout`);
      return `${(this.$route.meta.layout || 'empty')}-layout`;
    },
  },
};
</script>

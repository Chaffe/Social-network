<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import 'materialize-css/dist/js/materialize.min';

export default {
  components: {
    MainLayout, EmptyLayout,
  },
  computed: {
    layout() {
      return `${(this.$route.meta.layout || 'empty')}-layout`;
    },
  },
};
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/constants.scss';
@import '@/assets/styles/style.scss';

</style>

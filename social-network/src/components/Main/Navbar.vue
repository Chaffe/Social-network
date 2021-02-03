<template>
  <nav class="navigation">
    <div class="navigation__wrapper">
      <ul class="navigation__list">
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          class="navigation__item"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >
          <a href="#" class="navigation__link">{{link.title}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Profile', url: '/profile', exact: true },
      { title: 'Messenger', url: '/messenger' },
      { title: 'Photos', url: '/photos' },
      { title: 'Videos', url: '/videos' },
      { title: 'Music', url: '/music' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/constants.scss';
  .navigation {
    width: 10%;
    height: 100%;
    background-color: $secondary-color;
  }

  .navigation__wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  .navigation__item {
    width: 100%;
  }
</style>

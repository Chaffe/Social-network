<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <div class="brand-logo">Logo</div>
      <router-link
        to='/login'
      >
        <button class="btn-small">Log in</button>
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/constants.scss';

  .header {
    height: 7vh;
    background-color: $primary-color;
  }

  .header__wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand-logo {
    width: 10%;
  }
</style>

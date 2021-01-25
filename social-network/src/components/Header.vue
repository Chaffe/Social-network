<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <div class="brand-logo">Logo</div>
      <div class="header__buttons">
        <router-link
        to='/login'
      >
        <button class="btn-small">Log in</button>
      </router-link>
      <router-link
        to='/registration'
      >
        <button class="btn-small">Log up</button>
      </router-link>
      </div>
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

  .header__buttons {
    display: flex;
    justify-content: space-between;
    width: 15%;
  }
</style>

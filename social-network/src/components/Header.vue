<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <div class="brand-logo">Logo</div>
      <div class="header__button">
        <a
          class="dropdown-trigger white-text"
          href="#"
          data-target="dropdown"
          ref="dropdown"
        >
          {{ name }} {{ fullname }}
          <i class="material-icons right">arrow_drop_down</i>
        </a>
        <ul id="dropdown" class="dropdown-content">
          <li>
            <router-link to="/profile" class="black-text">
              <i class="material-icons">account_circle</i>Profile
            </router-link>
          </li>
          <li class="divider" tabindex="-1"></li>
          <li>
            <a href="#" class="black-text" @click.prevent="logout">
              <i class="material-icons">assignment_return</i>Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/constants.scss";

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

.dropdown-trigger {
  display: block;
}

.dropdown-content li > a > i {
  margin-right: 10px;
}
</style>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push('/?message=logout');
    },
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    fullname() {
      return this.$store.getters.info.fullname;
    },
  },
  mounted() {
    window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    });
  },
};
</script>

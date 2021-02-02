<template>
  <footer class="footer">
    <div class="footer__wrapper wrapper">
      <div class="brand-logo rss-logo" onclick="document.location.href = 'https://rs.school/js/'"></div>
      <div class="developer-info">
        <ul class="nickname-list">
          <li class="nickname-item">
            <a href="https://github.com/Chaffe" class="github-link">
              Chaffe
            </a>
          </li>
          <!-- <li class="nickname-item">
            <a href="https://github.com/alex-beaverg" class="github-link">
              Alex_BeaveRG
            </a>
          </li>
          <li class="nickname-item">
            <a href="https://github.com/SPARSEKING" class="github-link">
              SPARSEKING
            </a>
          </li> -->
        </ul>
        <span>2021</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    followLink() {
      document.querySelector('.rss-logo').addEventListener('click', () => {
        document.location.href = 'https://rs.school/js/';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/constants.scss';
  .footer {
    height: 7vh;
    background-color: $primary-color;
  }

  .footer__wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand-logo {
    width: 10%;
    height: 50%;
    background: url("../assets/logo-rs-school.svg") no-repeat;
    z-index: 10;

    &:hover {
      cursor: pointer;
    }
  }

  .developer-info {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nickname-list {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }

  .nickname-item {
    margin-right: 20px;
  }

  .github-link {
    color: $light-text-color;

    &:hover {
      color: $light-text-color2;
    }
  }
</style>

<template>
  <div class="main-layout">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main/Main.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header, Main, Footer,
  },
};
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import '@/assets/styles/constants.scss';
@import '@/assets/styles/style.scss';
</style>

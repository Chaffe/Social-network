<template>
  <main class="main">
    <div class="main__wrapper wrapper">
      <Navbar/>
      <div class="app-content">
        <div class="app-page">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from '@/components/Main/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <div class="columns__wrapper">
    <div class="wide-column column">
      <div class="wide-column__wrapper">
        <!-- <h2>Profile</h2> -->
        <span class="profile-item">{{name}}  {{fullname}}</span>
        <span class="profile-item">
          Date of birth:
          <span class="profile-info">{{dateOfBirth}}</span>
        </span>
        <span class="profile-item">
          Sex:
          <span class="profile-info">{{sex}}</span>
        </span>
      </div>
    </div>
    <div class="narrow-column column">
      <div class="narrow-column__wrapper">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/constants.scss';

.profile-item {
  margin-top: 4vh;
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
}

.profile-info {
  font-weight: normal;
}
</style>

<script>
export default {
  metaInfo: {
    title: 'Profile | Social-network',
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
    fullname() {
      return this.$store.getters.info.fullname;
    },
    dateOfBirth() {
      return `${this.$store.getters.info.birth.day} 
      ${this.$store.getters.info.birth.month}
      ${this.$store.getters.info.birth.year}`;
    },
    sex() {
      return this.$store.getters.info.sex;
    },
  },
};
</script>

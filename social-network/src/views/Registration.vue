<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Social Network</span>
      <div class="name-input-container">
        <div class="input-field name-input">
        <input
            id="name"
            type="text"
            class="validate"
        >
        <label for="name">Name</label>
        <!-- <small class="helper-text invalid">Name</small> -->
      </div>
      <div class="input-field fullname-input">
        <input
            id="fullname"
            type="text"
            class="validate"
        >
        <label for="fullname">Fullname</label>
        <!-- <small class="helper-text invalid">Name</small> -->
      </div>
      </div>
      <div class="input-field">
        <input
            id="email"
            type="text"
        >
        <label for="email">Email</label>
        <!-- <small class="helper-text invalid">Email</small> -->
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
        >
        <label for="password">Password</label>
        <!-- <small class="helper-text invalid">Password</small> -->
      </div>
      <div class="input-field birthday-select-container">
        <label class="birthday-select-title">Date of Birth</label>
        <div class="birthday-select-wrapper">
          <select class="select-day select" name="day" id="day">
            <option value="1">1</option>
          </select>
          <select class="select-month select" name="month" id="month">
            <option value="January">January</option>
          </select>
          <select class="select-year select" name="year" id="year">
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
      <div class="sex-container">
        <label class="sex-container-title">Sex</label>
        <div class="sex-wrapper">
          <p>
            <label>
              <input class="with-gap" name="group1" type="radio"  />
              <span>Man</span>
            </label>
          </p>
          <p>
            <label>
              <input class="with-gap" name="group1" type="radio"  />
              <span>Woman</span>
            </label>
          </p>
        </div>
      </div>
        <p>
        <label>
          <input type="checkbox" />
          <span>I agree with the rules</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
          >
            Sign Up
            <i class="material-icons right">send</i>
          </button>
        </div>
      <p class="center">
        Already have an account?
        <router-link
          to="/login"
        >
          <a href="#">Sign In!</a>
        </router-link>
      </p>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  .name-input-container {
    display: flex;
    justify-content: space-between;
  }

  .select {
    display: block;
  }

  .birthday-select-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .birthday-select-title {
    position: static;
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  .sex-container {
    margin: 1rem 0;
  }

  .sex-wrapper {
    display: flex;
    justify-content: space-around;
  }

  .sex-container-title {
    display: block;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
  }
</style>

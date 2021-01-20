<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title">Social Network</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            class="validate"
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
      <p>
        <label>
          <input type="checkbox">
          <span>Remember password</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Log In
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Don't have an account?
        <router-link
          to="/registration"
        >
          <a href="/">Sign up</a>
        </router-link>
      </p>
    </div>
  </form>
</template>

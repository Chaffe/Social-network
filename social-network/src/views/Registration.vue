<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Social Network</span>
      <div class="name-input-container">
        <div class="input-field name-input">
          <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{
              invalid:
                ($v.name.$dirty && !$v.name.required) ||
                ($v.name.$dirty && !$v.name.minLength) ||
                ($v.name.$dirty && !$v.name.maxLength),
            }"
          />
          <label for="name">Name</label>
          <small
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
            >Enter your name</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.name.$dirty && !$v.name.minLength"
            >Name must be {{ $v.name.$params.minLength.min }} and more
            characters. Now it is {{ name.length }}.</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.name.$dirty && !$v.name.maxLength"
            >Name must be not more than
            {{ $v.name.$params.maxLength.max }} characters. Now it is
            {{ name.length }}.
          </small>
        </div>
        <div class="input-field fullname-input">
          <input
            id="fullname"
            type="text"
            v-model.trim="fullname"
            :class="{
              invalid:
                ($v.fullname.$dirty && !$v.fullname.required) ||
                ($v.fullname.$dirty && !$v.fullname.minLength),
            }"
          />
          <label for="fullname">Fullname</label>
          <small
            class="helper-text invalid"
            v-if="$v.fullname.$dirty && !$v.fullname.required"
            >Enter your fullname</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.fullname.$dirty && !$v.fullname.minLength"
            >Fullname must be
            {{ $v.fullname.$params.minLength.min }} characters. Now it is
            {{ fullname.length }}.</small
          >
          <small
            class="helper-text invalid"
            v-else-if="$v.fullname.$dirty && !$v.fullname.maxLength"
            >Fullname must be not more than
            {{ $v.fullname.$params.maxLength.max }} characters. Now it is
            {{ fullname.length }}.
          </small>
        </div>
      </div>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >The email imput must not be empty.</small
        >
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.email"
          >Enter correct email.</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">Password</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Enter password.</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Password must be {{ $v.password.$params.minLength.min }} characters.
          Now it is {{ password.length }}.</small
        >
      </div>
      <div class="input-field birthday-select-container">
        <label class="birthday-select-title">Date of Birth</label>
        <div class="birthday-select-wrapper">
          <select
            class="select-day select"
            name="day"
            id="day"
            v-model="birth.day"
            required
          >
            <option value="" disabled selected>Choose day</option>
            <option
              v-for="day in dates.days"
              v-bind:key="day"
              v-bind:value="{ day }"
            >
              {{ day }}
            </option>
          </select>
          <select
            class="select-month select"
            name="month"
            id="month"
            v-model="birth.month"
            required
          >
            <option value="" disabled selected>Choose month</option>
            <option
              v-for="month in dates.months"
              v-bind:key="month"
              v-bind:value="{ month }"
            >
              {{ month }}
            </option>
          </select>
          <select
            class="select-year select"
            name="year"
            id="year"
            v-model="birth.year"
            required
          >
            <option value="" disabled selected>Choose year</option>
            <option
              v-for="year in dates.years"
              v-bind:key="year"
              v-bind:value="{ year }"
            >
              {{ year }}
            </option>
          </select>
        </div>
      </div>
      <div class="sex-container">
        <label class="sex-container-title">Sex</label>
        <div class="sex-wrapper">
          <p>
            <label>
              <input
                class="with-gap"
                value="man"
                name="group1"
                type="radio"
                v-model="sex"
                required
              />
              <span>Man</span>
            </label>
          </p>
          <p>
            <label>
              <input
                class="with-gap"
                value="woman"
                name="group1"
                type="radio"
                v-model="sex"
                required
              />
              <span>Woman</span>
            </label>
          </p>
        </div>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>I agree with the rules</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Sign Up
          <i class="material-icons right">send</i>
        </button>
      </div>
      <p class="center">
        Already have an account?
        <router-link to="/login">
          <a href="#">Sign In!</a>
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';

import dateOptions from '@/render/dateOfBirth';

export default {
  name: 'registration',
  data: () => ({
    dates: dateOptions(),
    email: '',
    password: '',
    name: '',
    fullname: '',
    birth: {
      day: '',
      month: '',
      year: '',
    },
    sex: '',
    agree: false,
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(4) },
    name: { required, minLength: minLength(4), maxLength: maxLength(12) },
    fullname: { required, minLength: minLength(4), maxLength: maxLength(12) },
    agree: { checked: (v) => v },
    sex: { required },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        fullname: this.fullname,
        birth: {
          day: this.birth.day.day,
          month: this.birth.month.month,
          year: this.birth.year.year,
        },
        sex: this.sex,
        agree: this.agree,
      };

      await this.$store.dispatch('register', formData);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-layout {
  padding-top: 2vh;
}

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

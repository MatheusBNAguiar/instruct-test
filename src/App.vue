<template>
  <div class="app-wrapper flex-row">
    <div class="app-navbar flex-row">
      <img class="app-navbar__logo" :src="InstructLogo" />
    </div>
    <div class="app-content">
      <div class="app-header">
        <h1>Usuários</h1>
        <hr class="separator-line" />
      </div>
      <div class="users-list-container flex-row">
        <UserCard v-for="user in users" :key="user.id" :user="user"></UserCard>
      </div>
    </div>
  </div>
</template>

<script>
import InstructLogo from "./assets/svg/instruct-logo.svg";
import UserCard from "./components/UserCard/UserCard";

import ApiService from "./services/Api";

export default {
  name: "app",
  components: { UserCard },
  data() {
    return {
      InstructLogo,
      users: [],
      apiService: ApiService("http://jsonplaceholder.typicode.com")
    };
  },
  beforeMount() {
    this.apiService.get("users").then(users => (this.users = users));
  }
};
</script>

<style lang="scss">
.users-list-container {
  padding: 20px;
}
</style>

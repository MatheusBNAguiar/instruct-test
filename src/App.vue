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
      <div class="filters-container">
        <h3>Filtre pelo domínio do e-mail:</h3>
        <Pill
          v-for="email in emailList"
          :isActive="selectedMail.indexOf(email)!==-1"
          :key="email"
          :clickEvent="selectMail(email)"
        >{{email}}</Pill>
      </div>
      <div class="users-list-container flex-row">
        <UserCard v-for="user in filteredUsers" :key="user.id" :user="user"></UserCard>
      </div>
    </div>
  </div>
</template>

<script>
import InstructLogo from "./assets/svg/instruct-logo.svg";
import UserCard from "./components/UserCard/UserCard";
import Pill from "./components/Pill/Pill";

import ApiService from "./services/Api";

export default {
  name: "app",
  components: { UserCard, Pill },
  data() {
    return {
      InstructLogo,
      users: [],
      apiService: ApiService("https://jsonplaceholder.typicode.com"),
      selectedMail: []
    };
  },
  computed: {
    emailList() {
      return this.users.reduce((list, user) => {
        const pattern = user.email.match(/[\@\w*\.](\w*)/gi);
        const domain = pattern[pattern.length - 1];
        return list.indexOf(domain) === -1 ? [...list, domain] : list;
      }, []);
    },
    filteredUsers() {
      if (!this.selectedMail.length) {
        return this.users;
      }
      return this.users.filter(({ email }) => {
        return this.selectedMail.filter(label => {
          return email.indexOf(label) !== -1;
        }).length;
      });
    }
  },
  methods: {
    selectMail(mail) {
      return () => {
        const location = this.selectedMail.indexOf(mail);
        if (location === -1) {
          this.selectedMail = [...this.selectedMail, mail];
        } else {
          this.selectedMail.splice(location, 1);
        }
      };
    }
  },
  beforeMount() {
    this.apiService.get("users").then(users => (this.users = users));
  }
};
</script>

<style lang="scss">
.filters-container,
.users-list-container {
  padding: 20px;
}
</style>

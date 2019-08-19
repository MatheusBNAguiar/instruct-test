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
        <Card class="col-xs-6" />
      </div>
    </div>
  </div>
</template>

<script>
import InstructLogo from "./assets/svg/instruct-logo.svg";
import Card from "./components/Card/Card";

export default {
  name: "app",
  components: { Card },
  data() {
    return {
      InstructLogo,
      users: []
    };
  }
};
</script>

<style lang="scss">

.users-list-container {
  padding: 20px;
}

</style>

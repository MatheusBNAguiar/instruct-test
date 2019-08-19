<template>
  <div class="app-wrapper flex-row">
    <div class="app-navbar flex-row">
      <img class="app-navbar__logo" :src="InstructLogo" />
    </div>
    <div class="app-content">
      <div class="app-header">
        <h1>Usuários</h1>
        <hr class="separator-line"/>
      </div>
    </div>
  </div>
</template>

<script>
import InstructLogo from "./assets/svg/instruct-logo.svg";
export default {
  name: "app",
  components: {},
  data() {
    return { InstructLogo };
  }
};
</script>

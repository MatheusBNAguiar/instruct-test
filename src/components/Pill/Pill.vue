<template>
  <a @click="clickEvent" :class="{ active: isActive, 'pill-container': true }">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    clickEvent: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/_variables.scss";

.pill-container {
  display: inline-block;
  color: $primary-medium-blue;
  border: 1px solid $primary-medium-blue;
  border-radius: 25px;
  padding: 10px 30px;
  margin: 10px;
  text-decoration: none;

  &.active {
    background-color: $primary-medium-blue;
    color: #ffffff;
  }
}
</style>

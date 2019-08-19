<template >
  <div class="card-container">
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.card-container {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 30px 0 rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  padding: 20px;
  min-height: 80px;
  flex-basis: 100%;
  max-width: 100%;
}
</style>

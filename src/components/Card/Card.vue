<template >
  <div class="card-container">
    <div class="card-content flex-row">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.card-container {
  padding: 10px;
}

.card-content {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 30px 0 rgba(0, 0, 0, 0.35);
  height: 100%;
}
</style>

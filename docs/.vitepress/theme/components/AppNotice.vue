<template>
  <div class="notice" :class="type">
    <AppIcon :type="type" class="notice-icon" />
    <div class="content"><slot /></div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: "info",
      },
    },
  };
</script>

<style>
  .notice {
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    background: rgb(var(--notice-color) / 12%);
    display: flex;
    gap: 1rem;
    margin-block: 2.5rem;
    box-shadow: var(--shadow-1);
  }
  .notice .content {
    display: grid;
    gap: 1rem;
  }
  .notice .content > * {
    margin-block: 0;
  }
  .notice-icon {
    color: rgb(var(--notice-color));
  }
  .error {
    --notice-color: 244 67 54;
  }
  .success {
    --notice-color: 76 175 80;
  }
  .warning {
    --notice-color: 255 152 0;
  }
  .info {
    --notice-color: 33 150 243;
  }
</style>

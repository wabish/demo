<template>
  <p class="barClass">{{ greeting }} Bar!</p>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello'
    };
  }
};
</script>

<style lang="sass">
@import "../style/bar";
</style>
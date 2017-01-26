<template>
  <p class="fooClass">{{ greeting }} Foo!</p>
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
@import "../style/foo";
</style>
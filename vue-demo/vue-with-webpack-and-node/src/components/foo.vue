<template>
  <div>
    <p class="fooClass">{{ greeting }} Foo!</p>
    <img class="fooImg" src="../img/demo.png" width="596" height="244" />
  </div>
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
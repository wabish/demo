<template>
  <p class="noFoundClass">So sad! {{ greeting }}</p>
</template>

<script>
export default {
  data() {
    return {
      greeting: '404'
    };
  }
};
</script>

<style lang="sass">
.noFoundClass {
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
  color: red;
}
</style>
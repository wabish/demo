<template>
  <ul>
    <li v-on:click="test">cobish</li>
    <li>wabish</li>
    <li>newbish</li>
    <li>{{ $route.params.id }}</li>
  </ul>
</template>

<script>
module.exports = {
  methods: {
    test(event) {
      this.$router.push({ name: 'left', params: { id: 2345 }});
    }
  }
};
</script>

<style>

</style>
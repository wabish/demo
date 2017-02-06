<template>
  <!-- <p>Hello {{ greeting }}</p> -->
  <div>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     greeting: 'everybody!'
  //   };
  // }

  name: 'index'
};
</script>

<style scoped>
a {
  margin: 0 5px;
  color: #42b983;
}
</style>
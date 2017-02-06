<template>
  <!-- <p>Hello {{ greeting }}</p> -->
  <div>
    <p>
      <router-link to="/bar">首页</router-link>
      <router-link class="special" to="/foo">我的工作台</router-link>
    </p>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
};
</script>

<style scoped>
a {
  margin: 0 5px;
  color: #42b983;
}

.router-link-active {
  color: #fff;
  background: #42b983;
}
</style>
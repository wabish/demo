<template>
  <div>
    <div>
      <p>
        <router-link to="/foo/service">我的服务</router-link>
        <router-link to="/foo/info">我的资料</router-link>
      </p>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foo'
};
</script>

<style scoped>
a {
  margin: 0 5px;
  color: #2973b7;
}

.router-link-active {
  color: #fff;
  background: #2973b7;
}
</style>
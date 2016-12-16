<template>
  <div id="app">
    <header>This is header.</header>
    <ul class="menu">
      <li><a href="#/left/1">左</a></li>
      <li><a href="#/right">右</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  height: 70px;
  line-height: 70px;
  background: #ffcccc;
}

.menu {
  font-size: 0;
  margin: 0;
  padding: 0;
}

.menu li {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid black;
}

.menu li a {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  width: 100%;
  font-size: 16px;
}

</style>

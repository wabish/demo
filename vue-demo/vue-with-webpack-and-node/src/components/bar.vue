<template>
  <p class="barClass">{{ greeting }}</p>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    // node
    var url = 'http://localhost/test';

    // php
    // var url = 'http://localhost/test.php';

    axios.post(url)
      .then((response) => {
        var data = response.data;
        var greeting = `My name is ${data.name}, my age is ${data.age}.`;
        this.greeting = greeting;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data() {
    return {
      greeting: '正在加载中...'
    };
  }
};
</script>

<style lang="sass">
@import "../style/bar";
</style>
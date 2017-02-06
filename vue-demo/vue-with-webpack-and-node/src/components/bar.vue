<template>
  <div>
    <p class="barClass">{{ greeting }}</p>
    <!-- <div class="barImg"></div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // mounted() {
  //   // node
  //   var url = 'http://localhost/api/test';

  //   // php
  //   // var url = 'http://localhost/test.php';

  //   axios.post(url)
  //     .then((response) => {
  //       var data = response.data;
  //       var greeting = `My name is ${data.name}, my age is ${data.age}.`;
  //       this.greeting = greeting;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  data() {
    return {
      greeting: '首页就在这里'
    };
  }
};
</script>

<style lang="sass">
@import "../style/bar/bar";
</style>
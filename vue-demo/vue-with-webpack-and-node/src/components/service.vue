<template>
  <div>
    <p>{{ greeting }}</p>
    <img src="../img/demo.png" width="696" height="244" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      greeting: '[ 我的服务 ]'
    };
  }
};
</script>
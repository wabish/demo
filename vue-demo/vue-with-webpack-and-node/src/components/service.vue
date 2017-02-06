<template>
  <div>
    <p>{{ greeting }}</p>
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
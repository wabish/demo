<template>
  <div>
    <p class="fooClass">{{ greeting }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      greeting: '[ 我的资料 ]'
    };
  }
};
</script>

<style lang="sass">
@import "../style/foo";
</style>
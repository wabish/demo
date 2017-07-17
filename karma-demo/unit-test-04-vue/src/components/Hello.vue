<template>
  <div>
    <h1 @click="handleClick">{{ msg }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      message: String
    },

    data() {
      return {
        msg: 'Hello World'
      };
    },

    methods: {
      handleClick() {
        this.msg = 'cobish';
      }
    }
  };
</script>
<template>
  <div id="app">
    <p>{{ msg }}</p>
    <p>Clicked: {{ count }}</p>
    <p>
      <button @click="add">+1</button>
    </p>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    computed: {
      msg () {
        return 'Hello World'
      },

      ...mapState({
        count: 'count',
      })
    },

    methods: {
      ...mapMutations({
        add: 'increment'
      })
    }
  };
</script>
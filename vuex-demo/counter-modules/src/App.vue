<template>
  <div id="app">
    <p>Clicked: {{ count }}</p>
    <p>
      <button @click="increment">+1</button>
    </p>

    <p>Card: {{ num }}</p>
    <p>
      <button @click="add">+10</button>
    </p>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapState({
        count: 'count'
      }),

      ...mapState('card', {
        num: 'num'
      })
    },

    methods: {
      ...mapMutations({
        increment: 'increment'
      }),

      ...mapMutations('card', {
        add: 'increment'
      })
    }
  };
</script>
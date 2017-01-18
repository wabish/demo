<template>
  <p>{{ greeting }} <span>World!</span></p>
</template>

<script>
// module.exports = {
//   data: function() {
//     return {
//       greeting: 'Hello'
//     };
//   }
// };

export default {
  data() {
    return {
      greeting: 'Hello'
    };
  }
};
</script>

<style lang="sass">
p {
  color: red;
  font-size: 2em;
  text-align: center;

  span {
    color: blue;
  }
}
</style>
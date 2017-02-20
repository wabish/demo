<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
  const prefixCls = 'co-btn';

  export default {
    computed: {
      classes() {
        return `${prefixCls}-default`
      }
    }
  };
</script>

<style scoped>
.co-btn-default {
  display: inline-block;
  width: 250px;
  height: 50px;
  color: #fff;
  background: 0;
  border: 0;
  background-color: #ffcccc;
  font-size: 14px;
  border-radius: 3px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.co-btn-default:hover {
  opacity: 0.7;
}
</style>
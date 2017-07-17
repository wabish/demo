<template>
  <button 
    :type="nativeType" 
    :class="classes" 
    :disabled="disabled"
    @click="handleClick">
    <co-icon type="load-c" class="co-load-loop" v-if="loading"></co-icon>
    <span><slot></slot></span>
  </button>
</template>

<script>
  import Icon from '../icon';
  import { oneOf } from '../../utils/assist';

  const prefixCls = 'co-button';

  export default {
    components: { 
      'co-icon': Icon
    },
    name: prefixCls,
    props: {
      type: {
        validator(value) {
          return oneOf(value, ['primary', 'text', 'success', 'warning', 'danger', 'info']);
        }
      },
      loading: Boolean,
      disabled: Boolean,
      nativeType: {
        default: 'button',
        validator(value) {
          return oneOf(value, ['button', 'submit', 'reset'])
        }
      }
    },
    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-loading`]: !!this.loading
          } 
        ]
      }
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
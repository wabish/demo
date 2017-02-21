<template>
  <button :type="nativeType" :class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  import Icon from '../icon';
  import { oneOf } from '../../utils/assist';

  const prefixCls = 'co-button';

  export default {
    components: { Icon },
    name: prefixCls,
    props: {
      type: {
        validator(value) {
          return oneOf(value, ['primary', 'text', 'success', 'warning', 'danger', 'info']);
        }
      },
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
            [`${prefixCls}-${this.type}`]: !!this.type
          } 
        ]
      }
    }
  };
</script>
<template>
  <div>
    <p>基础用法</p>
    <co-button>默认按钮</co-button>
    <co-button type="primary">主要按钮</co-button>
    <co-button type="text">文字按钮</co-button>

    <p>禁用状态</p>
    <co-button disabled>默认按钮</co-button>
    <co-button type="primary" disabled>主要按钮</co-button>
    <co-button type="text" disabled>文字按钮</co-button>

    <p>倾向提示</p>
    <co-button type="success">成功按钮</co-button>
    <co-button type="warning">警告按钮</co-button>
    <co-button type="danger">危险按钮</co-button>
    <co-button type="info">信息按钮</co-button>

    <p>加载中</p>
    <co-button type="primary" loading>加载中</co-button>
    <co-button :loading="loading1" @click="toLoading1">
      <span v-if="!loading1">点击加载</span>
      <span v-else>加载中...</span>
    </co-button>
    <co-button type="primary" :loading="loading2" @click="toLoading2">
      <span v-if="!loading2">点击加载</span>
      <span v-else>加载中...</span>
    </co-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading1: false,
        loading2: false
      }
    },
    methods: {
      toLoading1() {
        this.loading1 = true;

        setTimeout(() => {
          this.loading1 = false;
        }, 1000);
      },
      toLoading2() {
        this.loading2 = true;

        setTimeout(() => {
          this.loading2 = false;
        }, 1000);
      }
    }
  };
</script>

<style lang="scss" scoped>
  button {
    margin: 2px 5px;
  }
</style>
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
  </div>
</template>

<style lang="scss" scoped>
  button {
    margin: 2px 5px;
  }
</style>
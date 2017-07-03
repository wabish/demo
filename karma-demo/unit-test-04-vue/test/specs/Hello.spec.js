import Vue from 'vue';
import Hello from '../../src/components/Hello';

describe('Hello.vue', () => {
  it('测试 msg', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.msg).to.equal('Hello World');
  });
});Hello
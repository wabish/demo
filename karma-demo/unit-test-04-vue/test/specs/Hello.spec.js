import Vue from 'vue';
import Hello from '../../src/components/Hello';

/**
 * 获取生成的vm
 *
 * @param {Object} Component 组件
 * @param {Object} propsData props数据
 * @return {Object} vue实例
 */
function getRenderedVm(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm;
}

describe('Hello.vue', () => {
  it('测试 msg', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.msg).to.equal('Hello World');
  });

  it('测试 handleClick', () => {
    const vm = new Vue(Hello).$mount();
    vm.handleClick();
    expect(vm.msg).to.equal('cobish');
  });

  it('测试 props', () => {
    const vm = getRenderedVm(Hello, {
      message: '这是message'
    });

    expect(vm.message).to.equal('这是message');
  });

  it('数据更新后，视图应该改变', done => {
    let vm = new Vue(Hello).$mount();

    vm.msg = 'APP';

    Vue.nextTick(() => {
      let title = vm.$el.getElementsByTagName('h1')[0];
      expect(title.textContent).to.equal('APP');
      done();
    });
  });
});
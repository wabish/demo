import Vue from 'vue'
import Button from '../../packages/Button/index.js'

export const createCompInstance = (Component, propsData) => {
  const Constructor = Vue.extend(Component)
  return new Constructor({
    propsData
  }).$mount()
}

describe('Button', () => {
  let vm
  it('type 样式', () => {
    vm = createCompInstance(Button, {
      type: 'gray'
    })
    expect(Array.prototype.slice.call(vm.$el.classList)).to.include('wd-button-gray')
  })
  it('diabled 禁用态', () => {
    vm = createCompInstance(Button, {
      disabled: true
    })
    expect(vm.$el.hasAttribute('disabled')).to.be.true
  })
})
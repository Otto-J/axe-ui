import { expect } from 'chai'
import AxeFormItem from 'packages/form-item'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
describe('form-item测试用例', () => {
  it('是不是form-item啊？', () => {
    const container = document.createElement('div')
    const app = createApp({
      template: '<axeFormItem />',
      components: {
        axeFormItem: AxeFormItem
      }
    }).mount(container)
    let html = app.$el
    expect(html).to.match('form-item')
  })
})

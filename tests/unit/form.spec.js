import { expect } from 'chai'
import AxeForm from 'packages/form'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
describe('form测试用例', () => {
  it('是不是form啊？', () => {
    const container = document.createElement('div')
    const app = createApp({
      template: '<axeForm />',
      components: {
        axeForm: AxeForm
      }
    }).mount(container)
    let html = app.$el
    expect(html).to.match('form')
  })
})

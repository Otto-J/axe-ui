import { expect } from 'chai'
import AxeButton from 'packages/button'
// import {createApp} from 'vue' // '[Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
import { createApp } from 'vue/dist/vue.esm-bundler.js' // 上边的代码，组件提供了template选项，但是运行时不支持，需要引入vue/dist/vue.esm-bundler.js这个文件才能渲染template
describe('button按钮测试用例', () => {
  it('是不是button按钮啊？', () => {
    /* 
    const contianer = document.createElement('div')
    const app = createApp({
      template: `<axe-button />`,
      components: {
        'axe-button': AxeButton
      }
    })
    app.mount(contianer)
    let html = app.$el.innerHTML // TypeError: Cannot read property 'innerHTML' of undefined 
    expect(html).to.eq('button')
    */
    const container = document.createElement('div')
    const app = createApp({
      template: `<axeButton />`,
      components: {
        axeButton: AxeButton
      }
    }).mount(container)
    console.log(app, 111, app.$el)
    let html = app.$el
    expect(html).to.match('button')
  })
})

import Form from './src/form.vue'
import 'style/form.scss'

Form.install = app => {
  app.component(Form.name, Form)
}

export default Form

import FormItem from '../form/src/form-item.vue'
import 'style/form-item.scss'

FormItem.install = app => {
  app.component(FormItem.name, FormItem)
}

export default FormItem

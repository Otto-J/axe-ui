/* Automatically generated by './build/bin/build-entry.js' */

import AxeButton from './button/'
import AxeButtonGroup from './button-group/'
import AxeIcon from './icon/'
import AxeCard from './card/'
import AxeInput from './input/'

const components = [AxeButton, AxeButtonGroup, AxeIcon, AxeCard, AxeInput]

const install = (app, opts = {}) => {
  components.forEach(item => {
    app.component(item.name, item)
  })

  app.$AXE = {
    size: opts.size || '',
    zIndex: opts.zIndex || 1000
  }
}

export default {
  version: '0.1.0',
  install,
  AxeButton,
  AxeButtonGroup,
  AxeIcon,
  AxeCard,
  AxeInput
}

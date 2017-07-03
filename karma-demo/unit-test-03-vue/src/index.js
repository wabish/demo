import Button from '../packages/Button/index.js'

const install = function(Vue) {
  if(install.installed) {
    return
  }

  Vue.component(Button.name, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '0.6.8'

export {
  install,
  version,
  Button
}
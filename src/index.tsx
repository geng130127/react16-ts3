import React from 'react'
import ReactDOM from 'react-dom'
import App from 'Src/app'

// eslint-disable-next-line unicorn/prefer-module
if (module && module.hot) {
  // eslint-disable-next-line unicorn/prefer-module
  module.hot.accept()
}

ReactDOM.render(<App name="Margin" age={18} />, document.querySelector('#root'))

# core-app
Core App

# How to install
```bash
yarn add alfredovillagomez/npm#core-app-v1.0.0-beta.2-gitpkg
```

# How to use
```js
import { App } from 'core-app'

ReactDOM.render(
  <React.StrictMode>
    <App
      actions={{}} // your project actions as object
      epics={[]} // a list of your project epics
      reducers={[]} // a list of your project reducers
      routes={[]} // a list of your project routes
    />
  </React.StrictMode>,
  document.getElementById('root'),
)
```

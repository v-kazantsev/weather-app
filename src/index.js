import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import configureStore from './store/storeConfiguration';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();

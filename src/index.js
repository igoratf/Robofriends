import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; 
import './index.css';
import 'tachyons';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger)) // middlewares are ordered

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root'));
registerServiceWorker();

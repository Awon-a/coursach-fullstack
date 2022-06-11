import ReactDOM from 'react-dom/client';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import rootSaga from './redux/sagas';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(rootSaga);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

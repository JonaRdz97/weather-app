import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import './assets/styles/global.scss';


render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
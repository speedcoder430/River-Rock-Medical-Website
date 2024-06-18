import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Sections from './routes'; // Assuming App is your main component
import store from './store'; // Assuming store is your Redux store
import './styles/index.scss'; // Import your main SCSS file
import * as serviceWorker from './serviceWorker'; // Import serviceWorker

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Sections />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

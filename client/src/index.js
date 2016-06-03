import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore.js';
import App from './components/app';
import { Provider } from 'react-redux';

require('file?name=[name].[ext]!./index.html');

// Require stylesheets
require('./stylesheets/sass/style.scss');
require('./stylesheets/sass/joblist.scss');
//require('./stylesheets/sass/jobview.scss');

const initalState =  {
    debug: false,
    user: {},
    job: {},
  };

let store = configureStore(initalState);

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('app'));

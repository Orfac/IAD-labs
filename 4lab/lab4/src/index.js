import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './stores/store';
import router from './routers/router';

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
     document.getElementById('root')
);


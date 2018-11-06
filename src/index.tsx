import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './components/App/App';
import mapStore from './components/Map/MapStore';

ReactDOM.render(
    <Provider mapStore={mapStore}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import App from './components/App/App';
import mapStore from './components/Map/MapStore';

ReactDOM.render(
    <Provider mapStore={mapStore}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement,
);
registerServiceWorker();

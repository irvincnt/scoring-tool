import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/scoring-tool';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

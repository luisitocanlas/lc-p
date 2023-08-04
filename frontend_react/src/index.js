// BEFORE
// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// For React 18
// AFTER
import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />)
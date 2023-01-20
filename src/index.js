import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Loading />}>
            <App />
        </Suspense>
    </React.StrictMode>
    
,document.getElementById('root'));
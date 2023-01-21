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

// Example consoleLog
console.log(window.navigator.userAgent);

const arr1 = ['H', 'E', 'L'];
const arr2 = ['L', 'O', 'T', 'O', 'J', 'O', 'I', 'N'];

const arr3 = arr1.concat(arr2);

console.log(arr3);

console.log(`Your browser version is reported as ${navigator.appVersion}`);
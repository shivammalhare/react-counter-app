import React from 'react';
import ReactDOM from 'react-dom';
import'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";
import App from './App';

ReactDOM.render(<Counter />, document.getElementById('root'));

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li> ${color}</li>`);
console.log(items);


import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li> ${color}</li>`);
console.log(items);
print(items);

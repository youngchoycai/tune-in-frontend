import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "blk-design-system-react/src/assets/scss/blk-design-system-react.scss";
import "blk-design-system-react/src/assets/css/nucleo-icons.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route component={App}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

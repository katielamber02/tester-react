import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';
import Root from 'Root'
import {BrowserRouter,Route} from 'react-router-dom'



ReactDOM.render(
     <Root>
	  <BrowserRouter >
      <Route path='/' component={App}/>
	  </BrowserRouter >
	  </Root>
  ,
   document.getElementById('root'));

serviceWorker.unregister();

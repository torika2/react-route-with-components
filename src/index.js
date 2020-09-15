import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import Comp3 from './components/comp3';

ReactDOM.render(
  <React.StrictMode>
 	<HashRouter basename='/'>
  	<ul>
  		<li>
  			<Link to={'comp1'} >
                1
            </Link>
        </li>
  		<li>
  			<Link to={'comp2'} >
                2
            </Link>
        </li>
        <li>
  			<Link to={'comp3'} >
                3	
            </Link>
        </li>
  	</ul>
	    <Switch>
	      <Route path="/comp1" component={Comp1}></Route>
	      <Route path="/comp2" component={Comp2}></Route>
	      <Route path="/comp3" component={Comp3}></Route>
	      <Route exact path="/" component={Comp1}></Route>
	    </Switch>
  	</HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
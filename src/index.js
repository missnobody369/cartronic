import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import JobSheet from './JobSheet';
import Login from './Login';
import Home from './Home';
import Location from './Location';
import BookOnline from './BookOnline';
import Search from './Search';

console.log(localStorage.token)
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
	  {...rest}
	  render={props =>
		localStorage.token ? (
		  <Component {...props} />
		) : (
		  <Redirect
			to={{
			  pathname: '/login',
			  state: { from: props.location }
			}}
		  />
		)}
	/>
  );
ReactDOM.render((
	<Router history={createHistory}>
		<App>
			<Route exact={true} path="/" component={Home} />  
			<Route exact={true} path="/location" component={Location} /> 
			<Route exact={true} path="/jobsheet" component={JobSheet} />
			<Route exact={true} path="/bookonline" component={BookOnline} />
			<PrivateRoute exact={true} path="/search" component={Search} /> 
			<Route exact={true} path="/login" component={Login} />		
	    </App>
    </Router>
),
document.getElementById('root'));
registerServiceWorker();

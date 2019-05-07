import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducers from './reducers'

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk,logger)))

if (module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers')
		store.replaceReducer(nextRootReducer)
	})
}

import App 		from './App'
import Main 	from './components/Main'

ReactDOM.render(
	<Provider store={store} >
		<Router>
			<Route
				render={({ location }) => (
					<App location={location} >
						<Switch key={location.key} 	location={location} >
							<Route exact path='/' 	component={Main} />
						</Switch>
					</App>
				)}
			/>
		</Router>
	</Provider>,
	document.getElementById('app')
);
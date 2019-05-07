import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './components/styles/app.less'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {}

	}

	componentDidMount = () => {
		
	}

	render() {

		return  (
				<div className="cmd">
					{ this.props.children }
				</div>
			)
	}
}

export default connect(
	state => ({
		
	}),
	dispatch => ({
		
	})
)(App)
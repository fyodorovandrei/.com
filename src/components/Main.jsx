import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			initMessage: <div className="init__message">
					<p className="slow">Hello World 🎉,</p>
					<p className="slow second">🍓<span className="start">GETTING STARTED:</span> This is a command-line interface for my website inspired from <a href="https://cmd.to/" target="_blank">cmd.to</a></p>
					<p className="info slow second">* Type <span className="get__help" onClick={() => this.typeCMD('help')}>help</span> and press return to see commands!</p>
				</div>,
			text: "",
			history: [],
			avaible: {
				about: [
					"info.txt",
					"cv.pdf"
				],
				projects: [
					{
						url: "https://www.fabity.co/#/",
						desc: "Info site developed frontend with react.js",
						tags: [
							"#reactjs","#html","#css","#less","#js","#responsive"
						]
					},
					{
						url: "https://thankyouposta.com/#/",
						desc: "Dashboard for ios & android application developed frontend with react.js",
						tags: [
							"#reactjs","#html","#css","#less","#js"
						]
					},
					{
						url: "http://www.brightparameters.com/",
						desc: "Media agency developed frontend with react.js and backend with PHP.",
						tags: [
							"#reactjs","#html","#css","#js","#responsive","#php","#restapi","#isomorphic"
						]
					},
					{
						url: "https://joodworld.com/",
						desc: "Website developed frontend with react.js and backend with PHP.",
						tags: [
							"#reactjs","#html","#css","#js","#responsive","#php","#restapi","#isomorphic","#documentation"
						]
					},
					{
						url: "https://joiny.io/",
						desc: "Work in free time for this start-up. Website developed with react.js. Hosted on heroku. Have PROD and DEV environment.",
						tags: [
							"#reactjs","#redux","#dashboard","#html","#css","#js","#responsive","#restapi","#isomorphic"
						]
					}
				],
				contacts: {
					email: "andreifiodorov1@gmail.com",
					phone: "+393248657672"
				}
			},
			socket: false
		}
	}

	componentDidMount = () => {
		this.input.focus()
	}

	typeCMD = (string) => {
		
		let  { history } = this.state
		history.push(string)
		this.setState({ history: history, text: "" });
		this.scrollToBottom()
	
	}

	handleTypingCMD = () => this.setState({text: this.input.value})

	handleKeyPress = (event) => {


		if (event.key == 'Enter') {
			let  { history } = this.state
			history.push(this.input.value)
			this.setState({ history: history, text: "" });
			this.input.value = "";
			this.scrollToBottom()

		}

	}

	scrollToBottom = () => {
		setTimeout(function() {
			this.codeViewHistory.scrollTo(0,this.codeViewHistory.scrollHeight)
		}.bind(this),1)
	}

	handleProcessCMD = (cmd) => {
		cmd = cmd.split(' ');
		let command = cmd[0];
		let params = [];

		for (var i = 1; i < cmd.length; i++) {
			params[i - 1] = cmd[i];
		}

		switch(command) {
			case 'clear':
				this.setState({
					initMessage: "",
					text: "",
					history: []
				});
			break;

			case 'hello':

				return <div className="init__message">
							<p className="slow">Hello World 🎉,</p>
							<p className="slow second">🍓<span className="start">GETTING STARTED:</span> This is a command-line interface for my website inspired from <a href="https://cmd.to/" target="_blank">cmd.to</a></p>
							<p className="info slow second">* Type <span className="get__help" onClick={() => this.typeCMD('help')}>help</span> and press return to see commands!</p>
						</div>

			break;

			case 'help':
				return 	<div>
							<div className="slow second">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about')}>about</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow">
									<ul>
										<li><a onClick={() => this.typeCMD('about -a')} className="cmd__">about -a</a>{'.'.repeat(20)}<span className="info">( ⚠️ all information )</span></li>
										<li><a onClick={() => this.typeCMD('about -w')} className="cmd__">about -w</a>{'.'.repeat(20)}<span className="info">( 💼 all my works )</span></li>
										<li><a onClick={() => this.typeCMD('about -d')} className="cmd__">about -d</a>{'.'.repeat(20)}<span className="info">( 💭 my description )</span></li>
										<li><a onClick={() => this.typeCMD('about -c')} className="cmd__">about -c</a>{'.'.repeat(20)}<span className="info">( ✉️ my contacts )</span></li>
									</ul>
								</div>
								<div className="info slow">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>
							<div className="slow third">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('chat')}>chat</a>
									<span className="about">(chat with me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow">
									<ul>
										<li><a onClick={() => this.typeCMD('chat -i')} className="cmd__">chat -i</a>{'.'.repeat(20)}<span className="info">( 📠 init chat )</span></li>
										<li><a onClick={() => this.typeCMD('chat -w')} className="cmd__">chat -q</a>{'.'.repeat(20)}<span className="info">( ❌ exit from chat )</span></li>
									</ul>
								</div>
								<div className="info slow">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>
						</div>
			break;

			case 'chat':

				return <div className="not__found slow second">⌛ coming soon </div>
				// const io = require('socket.io-client')  
				// const socket = io('http://localhost:9090/')
						
				// socket.on('notification', function (data) {
				// 	console.log(data)
				// });
				// socket.emit('message', { data: params[0] });

			break;

			case 'about':

				if (params.length == 0) {

					return <div className="slow">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about')}>about</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow second">
									<div className="slow second">
										<p>My name is Andrei Fiodorov. Born in 🇲🇩Moldova, live in 🇮🇹Italy. I am a 👨‍💻Full Stack developer.</p>
									</div>
								</div>
								<div className="info slow third">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>

				} else if (params[0] == '-d') {

					return <div className="slow">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about')}>about</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow second">
									<div className="slow second">
										<p>My name is Andrei Fiodorov. Born in 🇲🇩Moldova, live in 🇮🇹Italy. I am a 👨‍💻Full Stack developer.</p>
									</div>
								</div>
								<div className="info slow third">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>

				} else if (params[0] == '-w') {

					return <div className="slow">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about -w')}>works</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow second">
									<div className="works">
										{
											this.state.avaible.projects.map((work) => {
												return <div className="work">
															<div className="firs__line">
																<a className="url" href={ work.url } target="_blank" >{ work.url }</a>
																{ '.'.repeat(50 - work.url.length) }
																<span className="desc">({work.desc})</span>
															</div>
															<div className="second__line">
																{ '.'.repeat(50) }
																<span className="tags">
																	{
																		work.tags.map((tag) => {
																			return <i>{tag}</i>
																		})
																	}
																</span>
															</div>
														</div>
											})
										}
									</div>
								</div>
								<div className="info slow third">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>

				} else if (params[0] == '-c') {

					return <div className="slow">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about -c')}>contacts</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow second">
									<ul>
										<li>📩 <a target="_blank" href={'mailto:' + this.state.avaible.contacts.email} >{this.state.avaible.contacts.email}</a></li>
										<li>🤙 <a href={'tel:' + this.state.avaible.contacts.phone} >{this.state.avaible.contacts.phone}</a></li>
									</ul>
								</div>
								<div className="info slow third">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>

				} else if (params[0] == '-a') {

					return <div>
							<div className="slow">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about')}>about</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo">
									<div className="slow second">
										<p>My name is Andrei Fiodorov. Born in 🇲🇩Moldova, live in 🇮🇹Italy. I am a 👨‍💻Full Stack developer.</p>
									</div>
								</div>
								<div className="info">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>
							<div className="slow second">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about -w')}>works</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo">
									<div className="works">
										{
											this.state.avaible.projects.map((work) => {
												return <div className="work">
															<div className="firs__line">
																<a className="url" href={ work.url } target="_blank" >{ work.url }</a>
																{ '.'.repeat(50 - work.url.length) }
																<span className="desc">({work.desc})</span>
															</div>
															<div className="second__line">
																{ '.'.repeat(50) }
																<span className="tags">
																	{
																		work.tags.map((tag) => {
																			return <i>{tag}</i>
																		})
																	}
																</span>
															</div>
														</div>
											})
										}
									</div>
								</div>
								<div className="info">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>
							<div className="slow third">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about -c')}>contacts</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo">
									<ul>
										<li>📩 <a target="_blank" href={'mailto:' + this.state.avaible.contacts.email} >{this.state.avaible.contacts.email}</a></li>
										<li>🤙 <a href={'tel:' + this.state.avaible.contacts.phone} >{this.state.avaible.contacts.phone}</a></li>
									</ul>
								</div>
								<div className="info">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>
					</div>

				} else {

					return <div className="not__found slow second">🤷‍♂️ command not found: {command}</div>

				}

			break;

			default:
				return <div className="not__found slow second">🤷‍♂️ command not found: {command}</div>
		}

	}

	render() {
		
		return (
			<div className="cmd__input__wrapper" onClick={ () => this.input.focus() } >
				<input
					type="text"
					className="cmd__input"
					onChange={this.handleTypingCMD}
					onKeyPress={this.handleKeyPress}
					ref={ (input) => {this.input = input} }
				/>
				
				<div className="cmd__view__history" ref={(div) => {this.codeViewHistory = div}} >
					{this.state.initMessage}
					{
						this.state.history.map((h) => {
							return <div className="cmd__usr__row">
										<span className="cmd__usr slow">~/fyodorovandrei.com</span> {h}
										{ this.handleProcessCMD(h) }
									</div>
						})
					}
				</div>

				<div className="cmd__visible__input" >
					<div><span className="cmd__usr">~/fyodorovandrei.com</span> {this.state.text}</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		
	}),
	dispatch => ({
		
	})
)(Main)
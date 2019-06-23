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
				},
				links: {
					github: 'https://github.com/fyodorovandrei/',
					linkedin: 'https://www.linkedin.com/in/fyodorovandrei/'
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
									<a className="title" onClick={() => this.typeCMD('about')}>cmd</a>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow">
									<ul>
										<li><a onClick={() => this.typeCMD('clear')} className="cmd__">clear</a>{'.'.repeat(23)}<span className="info">( 🧼 clear console )</span></li>
										<li><a onClick={() => this.typeCMD('hello')} className="cmd__">hello</a>{'.'.repeat(23)}<span className="info">( 💡 show initial message )</span></li>
									</ul>
								</div>
								<div className="info slow">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>
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
										<li><a onClick={() => this.typeCMD('about -l')} className="cmd__">about -l</a>{'.'.repeat(20)}<span className="info">( 🔗 my links )</span></li>
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
							<div className="slow fourth">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about -c')}>Links</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow second">
									<ul className="social-links">
										<li>
											<img className="social-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTI1NiAwYy0xNDAuNjA5Mzc1IDAtMjU2IDExNS4zOTA2MjUtMjU2IDI1NiAwIDExOS45ODgyODEgODQuMTk1MzEyIDIyOC45ODQzNzUgMTk2IDI1NnYtODQuNjk1MzEyYy0xMS4wNzgxMjUgMi40MjU3ODEtMjEuMjczNDM4IDIuNDk2MDkzLTMyLjU1MDc4MS0uODI4MTI2LTE1LjEyODkwNy00LjQ2NDg0My0yNy40MjE4NzUtMTQuNTQyOTY4LTM2LjU0Njg3NS0yOS45MTAxNTYtNS44MTY0MDYtOS44MTI1LTE2LjEyNS0yMC40NTMxMjUtMjYuODc4OTA2LTE5LjY3MTg3NWwtMi42MzY3MTktMjkuODgyODEyYzIzLjI1MzkwNi0xLjk5MjE4OCA0My4zNzEwOTMgMTQuMTY3OTY5IDU1LjMxMjUgMzQuMjMwNDY5IDUuMzA0Njg3IDguOTIxODc0IDExLjQxMDE1NiAxNC4xNTIzNDMgMTkuMjQ2MDkzIDE2LjQ2NDg0MyA3LjU3NDIxOSAyLjIzMDQ2OSAxNS43MDcwMzIgMS4xNjAxNTcgMjUuMTgzNTk0LTIuMTg3NSAyLjM3ODkwNi0xOC45NzI2NTYgMTEuMDcwMzEzLTI2LjA3NDIxOSAxNy42MzY3MTktMzYuMDc0MjE5di0uMDE1NjI0Yy02Ni42Nzk2ODctOS45NDUzMTMtOTMuMjUzOTA2LTQ1LjMyMDMxMy0xMDMuODAwNzgxLTczLjI0MjE4OC0xMy45NzY1NjMtMzcuMDc0MjE5LTYuNDc2NTYzLTgzLjM5MDYyNSAxOC4yMzgyODEtMTEyLjY2MDE1Ni40ODA0NjktLjU3MDMxMyAxLjM0NzY1Ni0yLjA2MjUgMS4wMTE3MTktMy4xMDU0NjktMTEuMzMyMDMyLTM0LjIzMDQ2OSAyLjQ3NjU2Mi02Mi41NDY4NzUgMi45ODQzNzUtNjUuNTUwNzgxIDEzLjA3ODEyNSAzLjg2NzE4NyAxNS4yMDMxMjUtMy44OTA2MjUgNTYuODA4NTkzIDIxLjM4NjcxOGw3LjE5MTQwNyA0LjMyMDMxM2MzLjAwNzgxMiAxLjc5Mjk2OSAyLjA2MjUuNzY5NTMxIDUuMDcwMzEyLjU0Mjk2OSAxNy4zNzEwOTQtNC43MTg3NSAzNS42ODM1OTQtNy4zMjQyMTkgNTMuNzI2NTYzLTcuNTU4NTk0IDE4LjE3OTY4Ny4yMzQzNzUgMzYuMzc1IDIuODM5ODQ0IDU0LjQ2NDg0NCA3Ljc1bDIuMzI4MTI0LjIzNDM3NWMtLjIwMzEyNC0uMDMxMjUuNjMyODEzLS4xNDg0MzcgMi4wMzUxNTctLjk4NDM3NSA1MS45NzI2NTYtMzEuNDgwNDY5IDUwLjEwNTQ2OS0yMS4xOTE0MDYgNjQuMDQyOTY5LTI1LjcyMjY1Ni41MDM5MDYgMy4wMDc4MTIgMTQuMTI4OTA2IDMxLjc4NTE1NiAyLjkxNzk2OCA2NS41ODIwMzEtMS41MTE3MTggNC42NTYyNSA0NS4wNTg1OTQgNDcuMzAwNzgxIDE5LjI0NjA5NCAxMTUuNzUzOTA2LTEwLjU0Njg3NSAyNy45MzM1OTQtMzcuMTE3MTg4IDYzLjMwODU5NC0xMDMuNzk2ODc1IDczLjI1MzkwN3YuMDE1NjI0YzguNTQ2ODc1IDEzLjAyNzM0NCAxOC44MTY0MDYgMTkuOTU3MDMyIDE4Ljc2MTcxOSA0Ni44MzIwMzJ2MTA1LjcyMjY1NmMxMTEuODA4NTk0LTI3LjAxNTYyNSAxOTYtMTM2LjAxMTcxOSAxOTYtMjU2IC4wMDM5MDYtMTQwLjYwOTM3NS0xMTUuMzg2NzE5LTI1Ni0yNTUuOTk2MDk0LTI1NnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRjdDMDAiPjwvcGF0aD48c3R5bGUgaWQ9InN0eWxpc2gtNCIgY2xhc3M9InN0eWxpc2ggYWN0aXZlLXBhdGgiIHR5cGU9InRleHQvY3NzIiBzdHlsZT0iZmlsbDojRkY3QzAwIj4KI21hc3RoZWFkLWNvbnRhaW5lciAjY29udGFpbmVyIHsKCWJhY2tncm91bmQ6ICMyQzJDMkMKfQojbG9nby1pY29uLWNvbnRhaW5lci55dGQtdG9wYmFyLWxvZ28tcmVuZGVyZXIgI3lvdXR1YmUtcGF0aHMueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyIHBhdGgueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyIHsKICAgIGZpbGw6ICNmZmY7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldICNjb250YWluZXIueXRkLXNlYXJjaGJveCwgeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeS1jZW50ZXJlZF0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IHsKCWJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7CiAgICBib3gtc2hhZG93OiBub25lOwogICAgcGFkZGluZzogNHB4IDZweAp9Cgojc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3ggewoJYm9yZGVyOiAxcHggc29saWQgIzc3Nzc3NzsKICAgIGJvcmRlci1sZWZ0OiBub25lOwogICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxOSUpOwp9Cgp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XSAjc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3g6aG92ZXIsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNzZWFyY2gtaWNvbi1sZWdhY3kueXRkLXNlYXJjaGJveDpob3ZlciB7Cglib3JkZXI6IDFweCBzb2xpZCAjZmZmOwogICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxOSUpOwp9Cgojc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3ggeXQtaWNvbi55dGQtc2VhcmNoYm94IHsKCWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpOwp9Cgp5dGQtbWFzdGhlYWQgLmdzc3RfZSB7CiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTsKfQoKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94LAp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggaW5wdXQueXRkLXNlYXJjaGJveCwgeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeS1jZW50ZXJlZF0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3g6OnBsYWNlaG9sZGVyIHsKICAgIGNvbG9yOiAjZmZmOwogICAgcGFkZGluZzogMTBweDsKfQoKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94OjpwbGFjZWhvbGRlciB7CglvcGFjaXR5OiAwLjc7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldW2hhcy1mb2N1c10gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94LCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXVtoYXMtZm9jdXNdICNjb250YWluZXIueXRkLXNlYXJjaGJveCB7Cglib3JkZXI6IDFweCBzb2xpZCAjZmZmOwogICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4zKTsKfQoKI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IHsKCWNvbG9yOiAjZmZmOwkKfQoKeXQtaWNvbi5zdHlsZS1zY29wZS55dGQtdG9wYmFyLW1lbnUtYnV0dG9uLXJlbmRlcmVyLAp5dC1pY29uLnN0eWxlLXNjb3BlLnl0ZC1ub3RpZmljYXRpb24tdG9wYmFyLWJ1dHRvbi1yZW5kZXJlciwKeXQtaWNvbiNndWlkZS1pY29uIHsKICAgIGZpbGw6ICNmZmY7Cn0KCiNjb3VudHJ5LWNvZGUueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyIHsKCWNvbG9yOiAjZmZmCn0KCi55dGQtcGFnZS1tYW5hZ2VyIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDsKfQoueXRkLXdhdGNoLWZsZXh5IHsKCWJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDsKfTwvc3R5bGU+PC9nPiA8L3N2Zz4=" />
											<a target="_blank" href={this.state.avaible.links.github} >{this.state.avaible.links.github}</a>
										</li>
										<li>
											<img className="social-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTEyLjE5NiAxMTIuMTk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTIuMTk2IDExMi4xOTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDdBQjk7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk3IiByPSI1Ni4wOTgiIGRhdGEtb3JpZ2luYWw9IiMwMDdBQjkiPjwvY2lyY2xlPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0YxRjJGMiIgZD0iTTg5LjYxNiw2MC42MTF2MjMuMTI4SDc2LjIwN1Y2Mi4xNjFjMC01LjQxOC0xLjkzNi05LjExOC02Ljc5MS05LjExOCAgICBjLTMuNzA1LDAtNS45MDYsMi40OTEtNi44NzgsNC45MDNjLTAuMzUzLDAuODYyLTAuNDQ0LDIuMDU5LTAuNDQ0LDMuMjY4djIyLjUyNEg0OC42ODRjMCwwLDAuMTgtMzYuNTQ2LDAtNDAuMzI5aDEzLjQxMXY1LjcxNSAgICBjLTAuMDI3LDAuMDQ1LTAuMDY1LDAuMDg5LTAuMDg5LDAuMTMyaDAuMDg5di0wLjEzMmMxLjc4Mi0yLjc0Miw0Ljk2LTYuNjYyLDEyLjA4NS02LjY2MiAgICBDODMuMDAyLDQyLjQ2Miw4OS42MTYsNDguMjI2LDg5LjYxNiw2MC42MTFMODkuNjE2LDYwLjYxMXogTTM0LjY1NiwyMy45NjljLTQuNTg3LDAtNy41ODgsMy4wMTEtNy41ODgsNi45NjcgICAgYzAsMy44NzIsMi45MTQsNi45Nyw3LjQxMiw2Ljk3aDAuMDg3YzQuNjc3LDAsNy41ODUtMy4wOTgsNy41ODUtNi45N0M0Mi4wNjMsMjYuOTgsMzkuMjQ0LDIzLjk2OSwzNC42NTYsMjMuOTY5TDM0LjY1NiwyMy45Njl6ICAgICBNMjcuODY1LDgzLjczOUg0MS4yN1Y0My40MDlIMjcuODY1VjgzLjczOXoiIGRhdGEtb3JpZ2luYWw9IiNGMUYyRjIiIGNsYXNzPSJhY3RpdmUtcGF0aCI+PC9wYXRoPgoJPC9nPgo8L2c+PHN0eWxlIGlkPSJzdHlsaXNoLTQiIGNsYXNzPSJzdHlsaXNoIiB0eXBlPSJ0ZXh0L2NzcyI+CiNtYXN0aGVhZC1jb250YWluZXIgI2NvbnRhaW5lciB7CgliYWNrZ3JvdW5kOiAjMkMyQzJDCn0KI2xvZ28taWNvbi1jb250YWluZXIueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyICN5b3V0dWJlLXBhdGhzLnl0ZC10b3BiYXItbG9nby1yZW5kZXJlciBwYXRoLnl0ZC10b3BiYXItbG9nby1yZW5kZXJlciB7CiAgICBmaWxsOiAjZmZmOwp9Cgp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCB7Cglib3JkZXI6IDFweCBzb2xpZCAjNzc3Nzc3OwogICAgYm94LXNoYWRvdzogbm9uZTsKICAgIHBhZGRpbmc6IDRweCA2cHgKfQoKI3NlYXJjaC1pY29uLWxlZ2FjeS55dGQtc2VhcmNoYm94IHsKCWJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7CiAgICBib3JkZXItbGVmdDogbm9uZTsKICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTklKTsKfQoKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI3NlYXJjaC1pY29uLWxlZ2FjeS55dGQtc2VhcmNoYm94OmhvdmVyLCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXSAjc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3g6aG92ZXIgewoJYm9yZGVyOiAxcHggc29saWQgI2ZmZjsKICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTklKTsKfQoKI3NlYXJjaC1pY29uLWxlZ2FjeS55dGQtc2VhcmNoYm94IHl0LWljb24ueXRkLXNlYXJjaGJveCB7Cgljb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTsKfQoKeXRkLW1hc3RoZWFkIC5nc3N0X2UgewogICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94LCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggaW5wdXQueXRkLXNlYXJjaGJveCwKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94OjpwbGFjZWhvbGRlciB7CiAgICBjb2xvcjogI2ZmZjsKICAgIHBhZGRpbmc6IDEwcHg7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94LCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggaW5wdXQueXRkLXNlYXJjaGJveDo6cGxhY2Vob2xkZXIgewoJb3BhY2l0eTogMC43Owp9Cgp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XVtoYXMtZm9jdXNdICNjb250YWluZXIueXRkLXNlYXJjaGJveCwgeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeS1jZW50ZXJlZF1baGFzLWZvY3VzXSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggewoJYm9yZGVyOiAxcHggc29saWQgI2ZmZjsKICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMyk7Cn0KCiNjb250YWluZXIueXRkLXNlYXJjaGJveCB7Cgljb2xvcjogI2ZmZjsJCn0KCnl0LWljb24uc3R5bGUtc2NvcGUueXRkLXRvcGJhci1tZW51LWJ1dHRvbi1yZW5kZXJlciwKeXQtaWNvbi5zdHlsZS1zY29wZS55dGQtbm90aWZpY2F0aW9uLXRvcGJhci1idXR0b24tcmVuZGVyZXIsCnl0LWljb24jZ3VpZGUtaWNvbiB7CiAgICBmaWxsOiAjZmZmOwp9CgojY291bnRyeS1jb2RlLnl0ZC10b3BiYXItbG9nby1yZW5kZXJlciB7Cgljb2xvcjogI2ZmZgp9CgoueXRkLXBhZ2UtbWFuYWdlciB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7Cn0KLnl0ZC13YXRjaC1mbGV4eSB7CgliYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7Cn08L3N0eWxlPjwvZz4gPC9zdmc+" />
											<a target="_blank" href={this.state.avaible.links.linkedin} >{this.state.avaible.links.linkedin}</a>
										</li>
									</ul>
								</div>
								<div className="info">
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
							</div>
					</div>

				} else if(params[0] == '-l') {

					return <div className="slow">
								<div className="info">
									<span className="lines">---</span>
									<a className="title" onClick={() => this.typeCMD('about -c')}>Links</a>
									<span className="about">(about me)</span>
									<span className="lines">{'---'.repeat(100)}</span>
								</div>
								<div className="subinfo slow second">
									<ul className="social-links">
										<li>
											<img className="social-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgY2xhc3M9IiI+PGc+PHBhdGggZD0ibTI1NiAwYy0xNDAuNjA5Mzc1IDAtMjU2IDExNS4zOTA2MjUtMjU2IDI1NiAwIDExOS45ODgyODEgODQuMTk1MzEyIDIyOC45ODQzNzUgMTk2IDI1NnYtODQuNjk1MzEyYy0xMS4wNzgxMjUgMi40MjU3ODEtMjEuMjczNDM4IDIuNDk2MDkzLTMyLjU1MDc4MS0uODI4MTI2LTE1LjEyODkwNy00LjQ2NDg0My0yNy40MjE4NzUtMTQuNTQyOTY4LTM2LjU0Njg3NS0yOS45MTAxNTYtNS44MTY0MDYtOS44MTI1LTE2LjEyNS0yMC40NTMxMjUtMjYuODc4OTA2LTE5LjY3MTg3NWwtMi42MzY3MTktMjkuODgyODEyYzIzLjI1MzkwNi0xLjk5MjE4OCA0My4zNzEwOTMgMTQuMTY3OTY5IDU1LjMxMjUgMzQuMjMwNDY5IDUuMzA0Njg3IDguOTIxODc0IDExLjQxMDE1NiAxNC4xNTIzNDMgMTkuMjQ2MDkzIDE2LjQ2NDg0MyA3LjU3NDIxOSAyLjIzMDQ2OSAxNS43MDcwMzIgMS4xNjAxNTcgMjUuMTgzNTk0LTIuMTg3NSAyLjM3ODkwNi0xOC45NzI2NTYgMTEuMDcwMzEzLTI2LjA3NDIxOSAxNy42MzY3MTktMzYuMDc0MjE5di0uMDE1NjI0Yy02Ni42Nzk2ODctOS45NDUzMTMtOTMuMjUzOTA2LTQ1LjMyMDMxMy0xMDMuODAwNzgxLTczLjI0MjE4OC0xMy45NzY1NjMtMzcuMDc0MjE5LTYuNDc2NTYzLTgzLjM5MDYyNSAxOC4yMzgyODEtMTEyLjY2MDE1Ni40ODA0NjktLjU3MDMxMyAxLjM0NzY1Ni0yLjA2MjUgMS4wMTE3MTktMy4xMDU0NjktMTEuMzMyMDMyLTM0LjIzMDQ2OSAyLjQ3NjU2Mi02Mi41NDY4NzUgMi45ODQzNzUtNjUuNTUwNzgxIDEzLjA3ODEyNSAzLjg2NzE4NyAxNS4yMDMxMjUtMy44OTA2MjUgNTYuODA4NTkzIDIxLjM4NjcxOGw3LjE5MTQwNyA0LjMyMDMxM2MzLjAwNzgxMiAxLjc5Mjk2OSAyLjA2MjUuNzY5NTMxIDUuMDcwMzEyLjU0Mjk2OSAxNy4zNzEwOTQtNC43MTg3NSAzNS42ODM1OTQtNy4zMjQyMTkgNTMuNzI2NTYzLTcuNTU4NTk0IDE4LjE3OTY4Ny4yMzQzNzUgMzYuMzc1IDIuODM5ODQ0IDU0LjQ2NDg0NCA3Ljc1bDIuMzI4MTI0LjIzNDM3NWMtLjIwMzEyNC0uMDMxMjUuNjMyODEzLS4xNDg0MzcgMi4wMzUxNTctLjk4NDM3NSA1MS45NzI2NTYtMzEuNDgwNDY5IDUwLjEwNTQ2OS0yMS4xOTE0MDYgNjQuMDQyOTY5LTI1LjcyMjY1Ni41MDM5MDYgMy4wMDc4MTIgMTQuMTI4OTA2IDMxLjc4NTE1NiAyLjkxNzk2OCA2NS41ODIwMzEtMS41MTE3MTggNC42NTYyNSA0NS4wNTg1OTQgNDcuMzAwNzgxIDE5LjI0NjA5NCAxMTUuNzUzOTA2LTEwLjU0Njg3NSAyNy45MzM1OTQtMzcuMTE3MTg4IDYzLjMwODU5NC0xMDMuNzk2ODc1IDczLjI1MzkwN3YuMDE1NjI0YzguNTQ2ODc1IDEzLjAyNzM0NCAxOC44MTY0MDYgMTkuOTU3MDMyIDE4Ljc2MTcxOSA0Ni44MzIwMzJ2MTA1LjcyMjY1NmMxMTEuODA4NTk0LTI3LjAxNTYyNSAxOTYtMTM2LjAxMTcxOSAxOTYtMjU2IC4wMDM5MDYtMTQwLjYwOTM3NS0xMTUuMzg2NzE5LTI1Ni0yNTUuOTk2MDk0LTI1NnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRjdDMDAiPjwvcGF0aD48c3R5bGUgaWQ9InN0eWxpc2gtNCIgY2xhc3M9InN0eWxpc2ggYWN0aXZlLXBhdGgiIHR5cGU9InRleHQvY3NzIiBzdHlsZT0iZmlsbDojRkY3QzAwIj4KI21hc3RoZWFkLWNvbnRhaW5lciAjY29udGFpbmVyIHsKCWJhY2tncm91bmQ6ICMyQzJDMkMKfQojbG9nby1pY29uLWNvbnRhaW5lci55dGQtdG9wYmFyLWxvZ28tcmVuZGVyZXIgI3lvdXR1YmUtcGF0aHMueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyIHBhdGgueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyIHsKICAgIGZpbGw6ICNmZmY7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldICNjb250YWluZXIueXRkLXNlYXJjaGJveCwgeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeS1jZW50ZXJlZF0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IHsKCWJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7CiAgICBib3gtc2hhZG93OiBub25lOwogICAgcGFkZGluZzogNHB4IDZweAp9Cgojc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3ggewoJYm9yZGVyOiAxcHggc29saWQgIzc3Nzc3NzsKICAgIGJvcmRlci1sZWZ0OiBub25lOwogICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxOSUpOwp9Cgp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XSAjc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3g6aG92ZXIsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNzZWFyY2gtaWNvbi1sZWdhY3kueXRkLXNlYXJjaGJveDpob3ZlciB7Cglib3JkZXI6IDFweCBzb2xpZCAjZmZmOwogICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAxOSUpOwp9Cgojc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3ggeXQtaWNvbi55dGQtc2VhcmNoYm94IHsKCWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpOwp9Cgp5dGQtbWFzdGhlYWQgLmdzc3RfZSB7CiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTsKfQoKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94LAp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggaW5wdXQueXRkLXNlYXJjaGJveCwgeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeS1jZW50ZXJlZF0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3g6OnBsYWNlaG9sZGVyIHsKICAgIGNvbG9yOiAjZmZmOwogICAgcGFkZGluZzogMTBweDsKfQoKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94OjpwbGFjZWhvbGRlciB7CglvcGFjaXR5OiAwLjc7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldW2hhcy1mb2N1c10gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94LCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXVtoYXMtZm9jdXNdICNjb250YWluZXIueXRkLXNlYXJjaGJveCB7Cglib3JkZXI6IDFweCBzb2xpZCAjZmZmOwogICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4zKTsKfQoKI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IHsKCWNvbG9yOiAjZmZmOwkKfQoKeXQtaWNvbi5zdHlsZS1zY29wZS55dGQtdG9wYmFyLW1lbnUtYnV0dG9uLXJlbmRlcmVyLAp5dC1pY29uLnN0eWxlLXNjb3BlLnl0ZC1ub3RpZmljYXRpb24tdG9wYmFyLWJ1dHRvbi1yZW5kZXJlciwKeXQtaWNvbiNndWlkZS1pY29uIHsKICAgIGZpbGw6ICNmZmY7Cn0KCiNjb3VudHJ5LWNvZGUueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyIHsKCWNvbG9yOiAjZmZmCn0KCi55dGQtcGFnZS1tYW5hZ2VyIHsKICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDsKfQoueXRkLXdhdGNoLWZsZXh5IHsKCWJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDsKfTwvc3R5bGU+PC9nPiA8L3N2Zz4=" />
											<a target="_blank" href={this.state.avaible.links.github} >{this.state.avaible.links.github}</a>
										</li>
										<li>
											<img className="social-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTEyLjE5NiAxMTIuMTk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTIuMTk2IDExMi4xOTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiMwMDdBQjk7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk3IiByPSI1Ni4wOTgiIGRhdGEtb3JpZ2luYWw9IiMwMDdBQjkiPjwvY2lyY2xlPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0YxRjJGMiIgZD0iTTg5LjYxNiw2MC42MTF2MjMuMTI4SDc2LjIwN1Y2Mi4xNjFjMC01LjQxOC0xLjkzNi05LjExOC02Ljc5MS05LjExOCAgICBjLTMuNzA1LDAtNS45MDYsMi40OTEtNi44NzgsNC45MDNjLTAuMzUzLDAuODYyLTAuNDQ0LDIuMDU5LTAuNDQ0LDMuMjY4djIyLjUyNEg0OC42ODRjMCwwLDAuMTgtMzYuNTQ2LDAtNDAuMzI5aDEzLjQxMXY1LjcxNSAgICBjLTAuMDI3LDAuMDQ1LTAuMDY1LDAuMDg5LTAuMDg5LDAuMTMyaDAuMDg5di0wLjEzMmMxLjc4Mi0yLjc0Miw0Ljk2LTYuNjYyLDEyLjA4NS02LjY2MiAgICBDODMuMDAyLDQyLjQ2Miw4OS42MTYsNDguMjI2LDg5LjYxNiw2MC42MTFMODkuNjE2LDYwLjYxMXogTTM0LjY1NiwyMy45NjljLTQuNTg3LDAtNy41ODgsMy4wMTEtNy41ODgsNi45NjcgICAgYzAsMy44NzIsMi45MTQsNi45Nyw3LjQxMiw2Ljk3aDAuMDg3YzQuNjc3LDAsNy41ODUtMy4wOTgsNy41ODUtNi45N0M0Mi4wNjMsMjYuOTgsMzkuMjQ0LDIzLjk2OSwzNC42NTYsMjMuOTY5TDM0LjY1NiwyMy45Njl6ICAgICBNMjcuODY1LDgzLjczOUg0MS4yN1Y0My40MDlIMjcuODY1VjgzLjczOXoiIGRhdGEtb3JpZ2luYWw9IiNGMUYyRjIiIGNsYXNzPSJhY3RpdmUtcGF0aCI+PC9wYXRoPgoJPC9nPgo8L2c+PHN0eWxlIGlkPSJzdHlsaXNoLTQiIGNsYXNzPSJzdHlsaXNoIiB0eXBlPSJ0ZXh0L2NzcyI+CiNtYXN0aGVhZC1jb250YWluZXIgI2NvbnRhaW5lciB7CgliYWNrZ3JvdW5kOiAjMkMyQzJDCn0KI2xvZ28taWNvbi1jb250YWluZXIueXRkLXRvcGJhci1sb2dvLXJlbmRlcmVyICN5b3V0dWJlLXBhdGhzLnl0ZC10b3BiYXItbG9nby1yZW5kZXJlciBwYXRoLnl0ZC10b3BiYXItbG9nby1yZW5kZXJlciB7CiAgICBmaWxsOiAjZmZmOwp9Cgp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCB7Cglib3JkZXI6IDFweCBzb2xpZCAjNzc3Nzc3OwogICAgYm94LXNoYWRvdzogbm9uZTsKICAgIHBhZGRpbmc6IDRweCA2cHgKfQoKI3NlYXJjaC1pY29uLWxlZ2FjeS55dGQtc2VhcmNoYm94IHsKCWJvcmRlcjogMXB4IHNvbGlkICM3Nzc3Nzc7CiAgICBib3JkZXItbGVmdDogbm9uZTsKICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTklKTsKfQoKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI3NlYXJjaC1pY29uLWxlZ2FjeS55dGQtc2VhcmNoYm94OmhvdmVyLCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXSAjc2VhcmNoLWljb24tbGVnYWN5Lnl0ZC1zZWFyY2hib3g6aG92ZXIgewoJYm9yZGVyOiAxcHggc29saWQgI2ZmZjsKICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMTklKTsKfQoKI3NlYXJjaC1pY29uLWxlZ2FjeS55dGQtc2VhcmNoYm94IHl0LWljb24ueXRkLXNlYXJjaGJveCB7Cgljb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTsKfQoKeXRkLW1hc3RoZWFkIC5nc3N0X2UgewogICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94LCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggaW5wdXQueXRkLXNlYXJjaGJveCwKeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeV0gI2NvbnRhaW5lci55dGQtc2VhcmNoYm94IGlucHV0Lnl0ZC1zZWFyY2hib3gsIHl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ktY2VudGVyZWRdICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94OjpwbGFjZWhvbGRlciB7CiAgICBjb2xvcjogI2ZmZjsKICAgIHBhZGRpbmc6IDEwcHg7Cn0KCnl0ZC1zZWFyY2hib3hbbW9kZT1sZWdhY3ldICNjb250YWluZXIueXRkLXNlYXJjaGJveCBpbnB1dC55dGQtc2VhcmNoYm94LCB5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5LWNlbnRlcmVkXSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggaW5wdXQueXRkLXNlYXJjaGJveDo6cGxhY2Vob2xkZXIgewoJb3BhY2l0eTogMC43Owp9Cgp5dGQtc2VhcmNoYm94W21vZGU9bGVnYWN5XVtoYXMtZm9jdXNdICNjb250YWluZXIueXRkLXNlYXJjaGJveCwgeXRkLXNlYXJjaGJveFttb2RlPWxlZ2FjeS1jZW50ZXJlZF1baGFzLWZvY3VzXSAjY29udGFpbmVyLnl0ZC1zZWFyY2hib3ggewoJYm9yZGVyOiAxcHggc29saWQgI2ZmZjsKICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMyk7Cn0KCiNjb250YWluZXIueXRkLXNlYXJjaGJveCB7Cgljb2xvcjogI2ZmZjsJCn0KCnl0LWljb24uc3R5bGUtc2NvcGUueXRkLXRvcGJhci1tZW51LWJ1dHRvbi1yZW5kZXJlciwKeXQtaWNvbi5zdHlsZS1zY29wZS55dGQtbm90aWZpY2F0aW9uLXRvcGJhci1idXR0b24tcmVuZGVyZXIsCnl0LWljb24jZ3VpZGUtaWNvbiB7CiAgICBmaWxsOiAjZmZmOwp9CgojY291bnRyeS1jb2RlLnl0ZC10b3BiYXItbG9nby1yZW5kZXJlciB7Cgljb2xvcjogI2ZmZgp9CgoueXRkLXBhZ2UtbWFuYWdlciB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7Cn0KLnl0ZC13YXRjaC1mbGV4eSB7CgliYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7Cn08L3N0eWxlPjwvZz4gPC9zdmc+" />
											<a target="_blank" href={this.state.avaible.links.linkedin} >{this.state.avaible.links.linkedin}</a>
										</li>
									</ul>
								</div>
								<div className="info slow third">
									<span className="lines">{'---'.repeat(100)}</span>
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
						this.state.history.map((h,i) => {
							return <div className="cmd__usr__row" key={i}>
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
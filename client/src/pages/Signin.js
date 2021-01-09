import React, { Component } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import "../components/css/styles.css"

// setting state to value and books
class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}		
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	//onFormSubmit(evt) {
	//	evt.preventDefault()
	//	API.logIn(this.state.fields).then(user => {
	//		this.setState({ fields: { email: '', password: '' } })
	//		if(user) {
	//			this.props.onLoginSuccess(user)
	//			this.props.history.push('/')				
	//		} 
	//	})
	//}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='signinbg'>
        <Nav />
          <Header />
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1>Log In</h1>
						<form>
							<input 
								type="text" 
								placeholder="Email" 
								name="email" 
								value={email}
							/>
							<input 
								type="password" 
								placeholder="Password" 
								name="password" 
								value={password}
							/>
							<button>Log In</button>
						</form>
						
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn;
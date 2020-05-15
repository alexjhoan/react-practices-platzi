import React from 'react'

export class BadgeForm extends React.Component {

	state = {}

	// handleChange = e =>{
	// 	this.setState({
	// 		[e.target.name]: e.target.value
	// 	})
	// }

	// handleChange queda comentada por ahora los valores se envian como props al componente padre o badgeNew

	handleClick = (e) =>	{
		console.log("click")
	}

	handleSubmit = (e) =>	{
		e.preventDefault()
		console.log(this.state)
	}

	render() {
		return (
			<div>
				<h1>Nuevo</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label id="first-name">primer nombre</label>
						<input
							onChange={this.props.onChange}
							type="text" 
							className="form-control" 
							name="firstName"
							value={this.props.formValues.firstName}
						/>
					</div>
					<div className="form-group">
						<label id="second-name">segundo nombre</label>
						<input
							onChange={this.props.onChange}
							type="text" 
							className="form-control" 
							name="secondName" 
							value={this.props.formValues.secondName}
						/>
					</div>
					<div className="form-group">
						<label id="last-name">apellido</label>
						<input
							onChange={this.props.onChange}
							type="text" 
							className="form-control" 
							name="lastName"
							value={this.props.formValues.lastName}
						/>
					</div>
					<div className="form-group">
						<label id="email">email</label>
						<input
							onChange={this.props.onChange}
							type="email"
							className="form-control"
							name="email"
							value={this.props.formValues.email}
						/>
					</div>
					<div className="form-group">
						<label id="jobTitle">trabajo</label>
						<input
							onChange={this.props.onChange}
							type="text" 
							className="form-control" 
							name="jobTitle"
							value={this.props.formValues.jobTitle}
						/>
					</div>
					<div className="form-group">
						<label id="twitter">twitter</label>
						<input
							onChange={this.props.onChange}
							type="text" 
							className="form-control" 
							name="twitter"
							value={this.props.formValues.twitter}
						/>
					</div>
					<button onClick={this.handleClick} className="btn btn-primary">Save</button>
				</form>
			</div>
		)
	}
}

export default BadgeForm
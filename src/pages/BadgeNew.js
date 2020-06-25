import React from 'react'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import './styles/BadgeNew.css'


export class BadgeNew extends React.Component {
	state = { 
		form: {
			firstName:"",
			secondName:"",
			lastName:"",
			email:"",
			jobTitle:"",
			twitter:""
		}
	}

	handleChange = e =>{
		this.setState({
			form:{
				...this.state.form,
				[e.target.name]: e.target.value
			}
		})
	}

	handleSubmit = async e =>{
		e.preventDefault()
		this.setState({loading:true, error: null})

		try{
			await api.badges.create(this.state.form)
			this.setState({loading:false})
		}catch (error) {
			this.setState({loading:false, error: error})
		}
		window.location = "/badges"
	}

	render() {
		return (
			<div>
				<div className="BadgeNew__hero">
					<img src={header} className="img-fluid" alt="logo" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName= {this.state.form.firstName || "Alex"}
								secundName= {this.state.form.secondName || "Jhoan"}
								lastName= {this.state.form.lastName || "Vivas"}
								email= {this.state.form.email || "correo@correo.com"}
								twitter= {this.state.form.twitter || "NoTengoTwitter"}
								jobTitle= {this.state.form.jobTitle || "Web Developer"}
							/>
						</div>
						<div className="col-6">
							<BadgeForm
								onSubmit={this.handleSubmit}
								onChange={this.handleChange}
								formValues={this.state.form}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BadgeNew
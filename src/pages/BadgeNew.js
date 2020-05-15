import React from 'react'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
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

	render() {
		return (
			<div>
				<Navbar />
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
								twitter= {this.state.form.twitter || "NoTengoTwitter"}
								jobTitle= {this.state.form.jobTitle || "Web Developer"}
								avatarUrl= "https://www.gravatar.com/avatar/HASH"
							/>
						</div>
						<div className="col-6">
							<BadgeForm
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
import React from 'react'
import { Link } from 'react-router-dom'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'

export class Badges extends React.Component {

  constructor(props) {
    console.log("1. constructor")

    super(props)
  
    this.state = {
       data: []
    }
  }

  componentDidMount(){
    console.log("3. componentDidMount.")

    this.timeoutId = setTimeout(() => {
      this.setState({
        data:[
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ]

      })
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState){
    console.log("5. componentDidUpdate()")
    console.log({
      prevProps: prevProps,
      prevState: prevState
    })
    console.log({
      props: this.props,
      state: this.state
    })
  }

  componentWillUnmount(){
    console.log("6. componentWillUnmount()")
    clearTimeout(this.timeoutId)
  }

	render() {
    console.log("2 / 4. render()")
		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								src={confLogo}
								alt=""
								className="Badges_conf-logo"
							/>
						</div>
					</div>
				</div>
				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">New Badge</Link>
					</div>
					<div className="Badges__list">
						<div className="Badges__container">
							<BadgesList badges={this.state.data} />
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Badges

// NOTE: Ciclo de vida de componente.

// 1. constructor: por lo general aqui se montan los props y los state, ya que es lo primero que react ve, antes de montar cualquier otra cosa

// 2. el render: este se monta despues del constructor, y es donde se monta todo el JSX y se muestra en pantalla

// 3. componentDidMount: es lo que se va a hacer justamente antes de mostrar el contenido en pantalla. ejemplo: las llamadas a un api

// 4. nuevamente el render despues de componentDidMount, para actualizar lo que se muestra

// 5. componentDidUpdate: es la una accion o funcion que se va a realizar al momento de actualizar el componente

// 6. componentWillUnmount: es la una accion o funcion que se va a realizar al momento de cerrar el componente, ejemplo: limpiar memoria o al setTimeout que este corriendo en eso momento
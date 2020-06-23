import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
	return (
		<React.Fragment>
			<Navbar />
			{props.children}
			{/* <p className="h1">MI FOOTER</p> */}
		</React.Fragment>
	)
}



// NOTE: OJO: con PROPS.CHILDREN indico que se va a renderizar lo que esta adentro en el app.js es para que este layout aparesca en todas las paginas tambien debajo del prop se puede poner un footer
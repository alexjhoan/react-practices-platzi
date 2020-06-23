import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import Home from '../pages/Home'
import NotFond from '../pages/NotFond'

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route component={NotFond} />		
				</Switch>			
			</Layout>
		</BrowserRouter>
	)
}

// NOTE: con layout envuelvo todo las rutas haciendo que el layout se muestre en todas las paginas OJO:esto funciona solo cuando el componente Layout tiene el props especial de {props.children}
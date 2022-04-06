
import { connect } from "react-redux"

import { routes } from './routes'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import axios from "axios";


const mapStateToProps = state => ({
	dark: state.site.dark,
	user: state.auth.user
})
function App({ dark, user }) {

	const apiKey = "uyd8c07q7pcf6wf2qjrbefp3"
	const keyword = "bracelet";

	axios.get(`https://openapi.etsy.com/v3/application/listings/active?keywords=${keyword}`,
		{
			headers: {
				"api-key": `${apiKey}`
			}
		})
		.then(res => {
			console.log(res.data)
		})
		.catch(err => {
			console.log(err)
		})


	console.log(apiKey, "apiKey")

	return (
		<Router>
			<div className={dark ? 'dark' : 'light'}>

				{/*<Counter />*/}
				{/*<CounterActions />*/}
				<Switch>
					{routes.map(route => (
						<Route exact={route.exact} path={route.path} render={() => {
							if (route.auth && !user) {
								return <Redirect to="/login" />
							}
							return <route.page />
						}} />
					))}
				</Switch>

			</div>
		</Router>
	);
}

export default connect(mapStateToProps)(App);

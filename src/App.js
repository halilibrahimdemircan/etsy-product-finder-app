
import { connect } from "react-redux"

import { routes } from './routes'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

const mapStateToProps = state => ({
	dark: state.site.dark,
	user: state.auth.user
})
function App({ dark, user }) {

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

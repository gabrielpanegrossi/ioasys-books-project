import GlobalStyle from './style/globalStyle';

import { useState } from 'react';
import {
	Route,
	BrowserRouter,
} from 'react-router-dom/cjs/react-router-dom.min';
import UserContext from './context/userContext';

import Header from './components/header';
import Books from './pages/books';
import Book from './pages/book';
import Login from './pages/login';

function App() {
	const [customerIsLogged, setCustomerIsLogged] = useState(undefined);

	return (
		<div className="App">
			<GlobalStyle />
			<UserContext.Provider value={{ customerIsLogged, setCustomerIsLogged }}>
				{!customerIsLogged ? (
					<Login />
				) : (
					<>
						<Header />
						<Books />
					</>
				)}

				<BrowserRouter>
					<Route component={Book} path={'/:book'} />
				</BrowserRouter>
			</UserContext.Provider>
		</div>
	);
}

export default App;

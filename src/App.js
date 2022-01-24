import { useState, useEffect } from 'react';
import {
	Route,
	BrowserRouter,
} from 'react-router-dom/cjs/react-router-dom.min';

import UserContext from './context/userContext';
import { Token } from './services/userToken';

import Header from './components/header';
import Books from './pages/books';
import Login from './pages/login';
import Loader from './components/loader';
import * as S from './style/appStyle';
import GlobalStyle from './style/globalStyle';

function App() {
	const [customerInformation, setCustomerInformation] = useState(undefined);
	const [customerHeaders, setCustomerHeaders] = useState(undefined);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		try {
			const userToken = Token.getToken();

			if (userToken) {
				const { name, authorization, token } = userToken;
				setCustomerInformation({ name });
				setCustomerHeaders({ authorization, token });
			}
		} catch (e) {}
	}, []);

	return (
		<S.AppContainer className="App">
			<GlobalStyle />
			<UserContext.Provider
				value={{
					customerInformation,
					setCustomerInformation,
					customerHeaders,
					setCustomerHeaders,
					loader,
					setLoader,
				}}
			>
				<BrowserRouter>
					{loader && <Loader />}
					{!customerInformation ? (
						<Login />
					) : (
						<>
							<Header />
							<Route component={Books} path={'/books/:bookName'} path={'/'} />
						</>
					)}
				</BrowserRouter>
			</UserContext.Provider>
		</S.AppContainer>
	);
}

export default App;

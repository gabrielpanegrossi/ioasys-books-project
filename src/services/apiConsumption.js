const { REACT_APP_BACKEND_URL } = process.env;
const axios = require('axios');
const { Token } = require('./userToken');

async function signIn(email, password) {
	const data = { email, password };
	const reqReturn = await axios.post(
		`${REACT_APP_BACKEND_URL}auth/sign-in`,
		data
	);

	Token.saveToken(
		reqReturn.headers.authorization,
		reqReturn.headers['refresh-token'],
		reqReturn.data.name,
		reqReturn.data.gender
	);

	return reqReturn;
}

async function getBooks(authorization, page, howMany, category) {
	const reqReturn = await axios.get(
		`${REACT_APP_BACKEND_URL}books?page=${page}&amount=${
			howMany ? howMany : 12
		}&category=${category ? category : 'biographies'}`,
		{ headers: { authorization: `Bearer ${authorization}` } }
	);

	return reqReturn;
}

async function getBook(authorization, bookId) {
	const reqReturn = await axios.get(`${REACT_APP_BACKEND_URL}books/${bookId}`, {
		headers: { authorization: `Bearer ${authorization}` },
	});

	return reqReturn.data;
}

async function renewToken(authorization, token) {
	const data = { refreshToken: token };

	const newToken = await axios.post(
		`${REACT_APP_BACKEND_URL}auth/refresh-token`,
		data,
		{
			headers: {
				authorization: `Bearer ${authorization}`,
				accept: 'application/json',
			},
		}
	);

	return newToken;
}

async function getNewToken() {
	const tokenIsValid = await Token.getToken();
	const { authorization, token } = tokenIsValid;

	if (tokenIsValid) {
		const tokenRenewed = await renewToken(authorization, token);

		return tokenRenewed;
	} else {
		Token.removeToken();
	}
}

export const API = {
	signIn,
	getBooks,
	getBook,
	getNewToken,
};

function saveToken(authorization, token, name) {
	const item = {
		name,
		token,
		authorization,
	};

	sessionStorage.setItem('key', JSON.stringify(item));
}

function getToken() {
	const key = JSON.parse(sessionStorage.getItem('key'));

	return key;
}

function removeToken() {
	sessionStorage.removeItem('key');
}

export const Token = {
	saveToken,
	getToken,
	removeToken,
};

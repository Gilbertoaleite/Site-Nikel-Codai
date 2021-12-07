/** @format */

const myModal = new bootstrap.Modal('#register-modal');

//criar conta

document.getElementById('create-form').addEventListener('submit', function (e) {
	e.preventDefault();

	const email = document.getElementById('email-create-input').value;
	const password = document.getElementById('password-create-input').value;

	if (email.length < 5) {
		alert('preencha o campo com email válido.');
		return;
	}

	if (password.length < 5) {
		alert('Preencha a senha com no minimo 4 digitos.');
		return;
	}
	//salvar conta
	saveAccount({
		login: email,
		password: password,
		transactions: [],
	});

	myModal.hide();
	alert('Conta criada com sucesso!');
});

function saveAccount(data) {
	localStorage.setItem(data.login, JSON.stringify(data));
}

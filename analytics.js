//Helper functions for managing cookies
function setCookie(name, value, days){
	const date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	document.cookie = `${name} = ${value}; path=/; expires = ${date.toUTCString()}; SameSite = Lax`;
}

function getCookie(name){
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name} = `);
	if(parts.length === 2) return parts.pop().split(';').shift();
	return null;
}

function deleteCookie(name){
	document.cookie = `${name}=; path=/; expires = Thu, 01 Jan 1970 00:00:00 UTC;`;
}

//Initialize Visit Count
const visitCount = parseInt(getCookie('visitCount') || '0') + 1;
setCookie('visitCount', visitCount, 30);
console.log(`User has visited ${visitCount} times(s).`);

//Track Form Interaction
const form = document.getElementById('payment-form');
let formStarted = false;

form.addEventListener('input', () => {
	if(!formStarted) {
		setCookie('formStarted', 'true', 1);
		console.log('User has started filling the form.');
		formStarted = true;
	}
});

form.addEventListener('submit', (e) => {
	e.preventDefault();


	//Simulate Paystack Redirect
	const email = document.getElementById('email').value;
	const amount = document.getElementById('amount').value;

	if(email && amount){
		setCookie('formCompleted', 'true', 1);
		deleteCookie('formAbandoned');
		console.log('Form completed and redirected to Paystack.');

		window.location.href = 'https://paystack.com/pay/familyoffaith';
	}
});

//Track Abandonment
window.addEventListener('beforeunload', () => {
	if(formStarted && !getCookie('formCompleted')){
		setCookie('formAbandoned', 'true', 1);
		console('User abandoned the form.')
	}
});

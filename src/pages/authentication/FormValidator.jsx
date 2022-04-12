const validateForm = (formState) => {
	const { email, password, confirm_password, accept_terms } = formState;
	const errors = {};
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	if (!email) {
		errors.email = "Email is required!";
	} else if (!regex.test(email)) {
		errors.email = "This is not a valid email format!";
	}
	if (!password) {
		errors.password = "Password is required";
	} else if (password.length < 4) {
		errors.password = "Password must be more than 4 characters";
	} else if (password.length > 10) {
		errors.password = "Password cannot exceed more than 10 characters";
	}
	if (password !== confirm_password) {
		errors.confirm_password = "Passwords did not match";
	}
	if (!accept_terms) {
		errors.accept_terms = "Please accept terms and conditions";
	}
	return errors;
};
export { validateForm };

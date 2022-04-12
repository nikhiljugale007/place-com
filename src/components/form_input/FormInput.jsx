import "./FormInput.css";
const FormInput = ({ label, value, onChangeFunction, type, required }) => {
	return (
		<div>
			<div className="input-container">
				<label className="label text-bold" htmlFor={label}>
					{label}
				</label>
				<input
					name={label}
					value={value}
					type={type}
					required={required}
					onChange={onChangeFunction}
					className="input input-outlined"
					placeholder={`Enter your ${label}`}
				/>
			</div>
		</div>
	);
};

export { FormInput };

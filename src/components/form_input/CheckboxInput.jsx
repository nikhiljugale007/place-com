const CheckboxInput = ({ label, name, onChangeHandler }) => {
	return (
		<label htmlFor={label}>
			<input
				type="checkbox"
				name={name}
				id={label}
				onChange={onChangeHandler}
				value={label}
			/>
			<span className="typo-subtext label-text">{label}</span>
		</label>
	);
};
export { CheckboxInput };

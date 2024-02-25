const FormInput = ({type, name, label, placeholder}) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type={type} name={name} placeholder={placeholder}/>
		</div>
	)
}

export default FormInput
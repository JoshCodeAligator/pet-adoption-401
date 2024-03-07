const FormInput = ({type, name, label, placeholder}) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			{/*<br/>*/}
			<input type={type} name={name} placeholder={placeholder}/>
		</>
	)
}

export default FormInput
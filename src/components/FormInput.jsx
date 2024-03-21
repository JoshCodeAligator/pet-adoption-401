import React from "react"

const FormInput = ({type, name, label, placeholder}) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<br/>
			<input type={type} name={name} placeholder={placeholder} style={{color: 'black', border: '1px solid black'}}/>
		</div>
	);
}

export default FormInput
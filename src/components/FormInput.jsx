import React from "react"

const FormInput = ({type, name, label, placeholder}) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<br/>
			<input type={type} id={name} name={name} placeholder={placeholder}
				   style={{color: 'black', border: '1px solid black'}}/>
			{/* have same id and name, label htmlFor seems to want id (else warnings are thrown) */}
			{/*	keep name as prop name being set to id seems less intuitive */}
		</div>

	);
}

export default FormInput
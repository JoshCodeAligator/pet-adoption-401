// "use client"
//
// import {hasLength, isEmail, useForm} from "@mantine/form";
// import {Button, PasswordInput, TextInput} from "@mantine/core";
//
// const LoginForm = ({onSubmit, loginErrorFlag, loginErrorMessage}) => {
//
// 	const form = useForm({
// 		initialValues: {
// 			email: '',
// 			password: '',
// 		},
// 		validate: {
// 			email: isEmail('Invalid email'),
// 			password: hasLength({min: 1, max: 50}, 'Password must be 1-50 characters')
// 		},
// 	})
//
//   	return (
// 		  // <h1>Login Test!</h1>
// 		<>
// 			{/* Log in form */}
// 			<form onSubmit={onSubmit}>
// 				<TextInput
// 					label="Email"
// 					placeholder="your@email.com"
// 					{...form.getInputProps('email')}
// 				/>
// 				<PasswordInput
// 					label="Password"
// 					placeholder="password"
// 					{...form.getInputProps('email')}
// 				/>
// 				<Button type="submit">
// 					Log in
// 				</Button>
// 			</form>
//
// 			{/* Display error if there is an error */}
// 			{loginErrorFlag &&
// 				<p className="accent-red-600">
// 					{loginErrorMessage}
// 				</p>
// 			}
//
//
// 		</>
// 	)
// }
//
// export default LoginForm
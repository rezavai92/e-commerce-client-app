import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { IdentityRepository } from "@/infrastructure/repositories/IdentityRepository/IdentityRepository";
import { RegisterUserCommand } from "@/domain/Dtos/identity/register-user-command";

const SignUpForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);

		const identityRepo = new IdentityRepository();
		const command = new RegisterUserCommand(formData.email, formData.password, formData.firstName, formData.lastName, true);
		const response = await identityRepo.registerUserAsync(command);

		console.log(response);
	};

	return (
		<form style={{ width: "75%" }} onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" variant="contained" color="primary">
						Sign Up
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default SignUpForm;
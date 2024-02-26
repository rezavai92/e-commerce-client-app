"use client";
import React, { useContext, useEffect, useState } from "react";
import { TextField, Grid, Button, createStyles, useTheme } from "@mui/material";

import { IdentityRepository } from "@/infrastructure/repositories/IdentityRepository/IdentityRepository";
import { RegisterUserCommand } from "@/domain/Dtos/identity/register-user-command";
import PrimaryButton from "@/app/core/components/primary-button.component";
import { afterLogin, afterSignup, getCurrentUserFromLocalStorage } from "@/app/core/services/uam-service";
import { SignupResponseDto } from "@/domain/Dtos/identity/signupResponse";
import { AppUser } from "@/domain/models/AppUser";
import { useRouter } from "next/navigation";
import { authContext } from "@/app/core/contexts/AuthContextProvider";

const SignUpForm = () => {
	const router = useRouter();

	const { updateCurrentUser, currentUser } = useContext(authContext);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
	});

	useEffect(() => {
		const storedUser = getCurrentUserFromLocalStorage();

		if (storedUser) {
			router.push("/products");
		}
	}, []);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);

		const identityRepo = new IdentityRepository();
		const command = new RegisterUserCommand(formData.email, formData.password, formData.firstName, formData.lastName, true);
		const response = await identityRepo.registerUserAsync(command);

		if (response.isValid) {
			const data: SignupResponseDto = response.data;

			const appUser = new AppUser(data.email, data.displayName, data.profileImageUrl, data.roles);

			if (updateCurrentUser) {
				updateCurrentUser(appUser);
			}

			router.push("/products");
		}
	};

	return (
		<form className="w-2/3">
			<div className="font-bold text-2xl mb-4">Sign up</div>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} variant="outlined" />
				</Grid>

				<Grid item xs={12}>
					<PrimaryButton config={{ text: "Sign Up", onClick: handleSubmit }} />
				</Grid>
			</Grid>
		</form>
	);
};

export default SignUpForm;

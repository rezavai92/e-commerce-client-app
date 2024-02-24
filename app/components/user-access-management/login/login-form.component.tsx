"use client";
import React, { useState } from "react";
import { TextField, Grid, Button, createStyles, useTheme } from "@mui/material";

import { IdentityRepository } from "@/infrastructure/repositories/IdentityRepository/IdentityRepository";
import { RegisterUserCommand } from "@/domain/Dtos/identity/register-user-command";

import { LoginUserCommand } from "@/domain/Dtos/identity/login-user-command";
import PrimaryButton from "@/app/core/components/primary-button.component";
import { redirect } from "next/navigation";
import { setCurrentUser } from "@/app/core/services/uam-service";
import { AppUser } from "@/domain/models/AppUser";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	console.log("HLW CLINT SIDE");

	const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);

		const identityRepo = new IdentityRepository();
		const command = new LoginUserCommand(formData.email, formData.password);
		var valid = await identityRepo.loginUserAsync(command);
		if (valid) router.push("/products");
	};

	return (
		<form className="w-2/3">
			<div className="font-bold text-2xl mb-4">Log In</div>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} variant="outlined" />
				</Grid>
				<Grid item xs={12}>
					<TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} variant="outlined" />
				</Grid>

				<Grid item xs={12}>
					<PrimaryButton config={{ text: "Log In", onClick: handleSubmit }} />
				</Grid>
			</Grid>
		</form>
	);
};

export default LoginForm;
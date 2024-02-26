import { LoginUserCommand } from "@/domain/Dtos/identity/login-user-command";
import { RegisterUserCommand } from "@/domain/Dtos/identity/register-user-command";
import { IIdentityRepository } from "@/domain/interfaces/IIdentityRepository";

import axios from "axios";
import { LoginResponseDto } from "@/domain/Dtos/identity/loginResponse";
import { afterLogin, afterSignup } from "@/app/core/services/uam-service";
import { IGenericResponse } from "@/app/core/interfaces/IAppHttpResponse";
import { SignupResponseDto } from "@/domain/Dtos/identity/signupResponse";

export class IdentityRepository implements IIdentityRepository {
	async loginUserAsync(command: LoginUserCommand): Promise<boolean> {
		const res = await axios.post("https://localhost:5000/api/Identity/login", command);

		if (res.data.isValid) {
			const loginResponse: LoginResponseDto = res.data.data;

			afterLogin(loginResponse);
		}

		return res.data;
	}

	async registerUserAsync(command: RegisterUserCommand) {
		const res = await axios.post<IGenericResponse<SignupResponseDto>>("https://localhost:5000/api/Identity/register", command);
		console.log("res", res);

		if (res.data.isValid) {
			const signupResponseDto: SignupResponseDto = res.data.data;

			afterSignup(signupResponseDto);
		}
		return res.data;
	}
}

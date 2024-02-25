import { LoginUserCommand } from "@/domain/Dtos/identity/login-user-command";
import { RegisterUserCommand } from "@/domain/Dtos/identity/register-user-command";
import { IIdentityRepository } from "@/domain/interfaces/IIdentityRepository";

import axios from "axios";
import { LoginResponseDto } from "@/domain/Dtos/identity/loginResponse";
import { afterLogin } from "@/app/core/services/uam-service";

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
		const res = await axios.post("https://localhost:5000/api/Identity/register", command);
		console.log("res", res);

		return res.data.isValid;
	}
}

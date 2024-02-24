import { LoginUserCommand } from "@/domain/Dtos/identity/login-user-command";
import { RegisterUserCommand } from "@/domain/Dtos/identity/register-user-command";
import { IIdentityRepository } from "@/domain/interfaces/IIdentityRepository";
import axios from "axios";

export class IdentityRepository implements IIdentityRepository {
	loginUserAsync(command: LoginUserCommand): Promise<any> {
		return axios.post("https://localhost:5000/api/Identity/login", command);
	}

	registerUserAsync(command: RegisterUserCommand) {
		return axios.post("https://localhost:5000/api/Identity/register", command);
	}
}

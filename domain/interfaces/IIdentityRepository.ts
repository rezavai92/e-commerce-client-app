import { LoginUserCommand } from "../Dtos/identity/login-user-command";
import { RegisterUserCommand } from "../Dtos/identity/register-user-command";

export interface IIdentityRepository {
	registerUserAsync(command: RegisterUserCommand): Promise<any>;
	loginUserAsync(command: LoginUserCommand): Promise<any>;
}

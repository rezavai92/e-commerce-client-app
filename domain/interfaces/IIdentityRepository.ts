import { RegisterUserCommand } from "../Dtos/identity/register-user-command";

export interface IIdentityRepository{
    registerUserAsync(command: RegisterUserCommand): Promise<any>;
}
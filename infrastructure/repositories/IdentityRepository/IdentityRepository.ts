import { RegisterUserCommand } from "@/domain/Dtos/identity/register-user-command";
import { IIdentityRepository } from "@/domain/interfaces/IIdentityRepository";
import axios from "axios";

export class IdentityRepository implements IIdentityRepository{

    registerUserAsync(command: RegisterUserCommand) {
        return axios.post("https://localhost:5000/api/Identity/register",command)
    }

}
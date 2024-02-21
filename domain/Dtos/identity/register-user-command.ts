export class RegisterUserCommand {
    constructor(
        public Email: string,
        public Password: string,
        public FirstName: string,
        public LastName: string,
        public RememberMe: boolean) { }
}

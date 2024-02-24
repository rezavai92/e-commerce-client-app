export class LoginResponseDto {
	constructor(public email: string, public displayName: string, public profileImageUrl: string, public token: string) {}
}

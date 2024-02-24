export class SignupResponseDto {
	constructor(public email: string, public displayName: string, public profileImageUrl: string, public token: string) {}
}

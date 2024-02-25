import { LoginResponseDto } from "@/domain/Dtos/identity/loginResponse";
import { AppUser } from "@/domain/models/AppUser";
import Cookies from "js-cookie";
export const setCurrentUserInLocalStorage = (user: AppUser): void => {
	window.localStorage.setItem("user", JSON.stringify(user));
};

export const getCurrentUserFromLocalStorage = (): AppUser | null => {
	const payload = window.localStorage.getItem("user");

	if (payload) {
		return JSON.parse(payload);
	}
	return null;
};

export function setTokenInCookie(token: string) {
	console.log("cookies", Cookies);
	Cookies.set("token", token, { expires: 7, secure: true });
}
export const afterLogin = (loginResponseDto: LoginResponseDto) => {
	const { token, email, displayName, profileImageUrl } = loginResponseDto;
	setTokenInCookie(token);
	setCurrentUserInLocalStorage(new AppUser(email, displayName, profileImageUrl));
};

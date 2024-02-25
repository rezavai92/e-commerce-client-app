"use client";
import { AppUser } from "@/domain/models/AppUser";
import React, { createContext, useState } from "react";

export interface IAuthContext {
	updateCurrentUser?: (user: AppUser | null) => void;
	currentUser?: AppUser | null;
}
export const authContext = createContext<IAuthContext>({});

export default function AuthContextProvider({ children }: any) {
	const [currentUser, setCurrentUser] = useState<AppUser | null>(null);

	const updateCurrentUser = (user: AppUser | null) => {
		setCurrentUser(user);
	};

	return (
		<>
			<authContext.Provider value={{ currentUser, updateCurrentUser }}>{children}</authContext.Provider>
		</>
	);
}

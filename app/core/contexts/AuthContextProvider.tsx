"use client";
import { AppUser } from "@/domain/models/AppUser";
import React, { createContext, useEffect, useState } from "react";
import featureRoleMapService from "../services/feature-role-map.service";
import { IFeatureRoleMap } from "@/domain/interfaces/IFeatureRoleMap";
import { getCurrentUserFromLocalStorage } from "../services/uam-service";

export interface IAuthContext {
	updateCurrentUser?: (user: AppUser | null) => void;
	currentUser?: AppUser | null;
	permittedFeatures?: IFeatureRoleMap[];
}
export const authContext = createContext<IAuthContext>({});

export default function AuthContextProvider({ children }: any) {
	const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
	const [permittedFeatures, setPermittedFeatures] = useState<IFeatureRoleMap[]>();

	const updatePermittedFeatures = async () => {
		var userRoles = currentUser?.roles || [];
		userRoles?.push("Guest");
		const response = await featureRoleMapService.getApps(userRoles as string[]);
		setPermittedFeatures(response);
	};

	useEffect(() => {
		updatePermittedFeatures();
		updateCurrentUser(getCurrentUserFromLocalStorage());
	}, []);

	const updateCurrentUser = (user: AppUser | null) => {
		setCurrentUser(user);
	};

	return (
		<>
			<authContext.Provider value={{ currentUser, updateCurrentUser, permittedFeatures }}>{children}</authContext.Provider>
		</>
	);
}

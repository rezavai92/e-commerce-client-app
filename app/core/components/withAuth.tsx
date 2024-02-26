import React, { FC, useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContextProvider";

export default function withAuth(Origin: FC<any>, featureId: string) {
	function WithAuth() {
		const { currentUser } = useContext(authContext);
		const [isAuthenticated, setIsAuthenticated] = useState(false);
		useEffect(() => {
			if (currentUser) {
				setIsAuthenticated(true);
			}
		}, [currentUser]);

		return <>{isAuthenticated && <Origin />}</>;
	}

	return WithAuth;
}

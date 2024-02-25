import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react";
import RootLayoutComponent from "./components/root-layout/root-layout.component";
import AuthContextProvider from "./core/contexts/AuthContextProvider";

export const metaData = {
	title: "Shophub",
	description: "An E commerce site",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AuthContextProvider>
					<RootLayoutComponent></RootLayoutComponent>
					{children}
				</AuthContextProvider>
			</body>
		</html>
	);
}

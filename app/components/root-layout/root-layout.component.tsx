"use client";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { StyledEngineProvider } from "@mui/material";
import { redirect } from "next/dist/server/api-utils";
import { lightTheme } from "@/app/theme-config";
import AuthContextProvider, { authContext } from "@/app/core/contexts/AuthContextProvider";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/app/core/components/primary-button.component";
import { removeToken, setCurrentUserInLocalStorage, setTokenInCookie } from "@/app/core/services/uam-service";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function RootLayoutComponent() {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
	const router = useRouter();

	const { updateCurrentUser, currentUser } = useContext(authContext);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const logoutHandler = () => {
		if (updateCurrentUser) {
			updateCurrentUser(null);
			setCurrentUserInLocalStorage(null);
			removeToken("token");
			router.push("/");
		}
	};

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={lightTheme}>
				<AppBar position="sticky">
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
							<Typography
								variant="h6"
								noWrap
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}
							>
								<Link href="/">Shophub.com</Link>
							</Typography>
							<Box>
								<Link className="mr-2" href="/products">
									Products{" "}
								</Link>
							</Box>
							{!currentUser && (
								<Box>
									<Link className="mr-2" href="/signup">
										Signup{" "}
									</Link>
									<Link href="/login">Login </Link>
								</Box>
							)}

							{currentUser && (
								<Box>
									<PrimaryButton config={{ onClick: logoutHandler, text: "Log Out" }}></PrimaryButton>
								</Box>
							)}
						</Toolbar>
					</Container>
				</AppBar>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

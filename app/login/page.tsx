import Link from "next/link";
import LoginForm from "../components/user-access-management/login/login-form.component";

function LogInPage() {
	return (
		<main>
			<div className="mt-12 container flex justify-center items-start">
				<LoginForm />
			</div>
		</main>
	);
}

export default LogInPage;

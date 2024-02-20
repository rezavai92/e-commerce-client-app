import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-row items-start start p-8">
			<div>
				<h1>Shop hub</h1>
			</div>
			<div>
				<Link href="products">Products </Link>
			</div>
		</main>
	);
}

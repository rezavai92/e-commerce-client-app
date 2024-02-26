import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { getCurrentUserFromLocalStorage } from "./core/services/uam-service";

export default function Home() {
	redirect("/login");

	//return <main className="flex min-h-screen flex-row items-start start p-8"></main>;
}

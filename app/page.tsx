"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	redirect("/login");

	//return <main className="flex min-h-screen flex-row items-start start p-8"></main>;
}

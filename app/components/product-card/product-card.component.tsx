"use client";

import { Product } from "@/domain/models/Product";
import { useState, useEffect } from "react";

export function ProductCard(x: { product: Product }) {
	const [id, setId] = useState("75045f66-733b-4bbc-9721-8b975dfa8fe4");

	const { description, title } = x.product;
	return (
		<div>
			<div>{title}</div>
			<div>{description}</div>
		</div>
	);
}

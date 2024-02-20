"use client";
import { ProductRepository } from "@/repository/ProductRepository/ProductRepository";
import { Product } from "@/repository/models/Product";
import { useState, useEffect } from "react";

export function ProductCard(x: { product: Product }) {
	const [id, setId] = useState("75045f66-733b-4bbc-9721-8b975dfa8fe4");

	const { Description, ItemId, Title } = x.product;
	return (
		<div>
			<div>{Title}</div>
			<div>{Description}</div>
		</div>
	);
}

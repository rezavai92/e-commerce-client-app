"use client";
import { ProductCard } from "../components/product-card/product-card.component";
import { Fragment, useEffect, useState } from "react";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { CreateProductForm } from "../components/create-product/create-product-form.component";
import { Product } from "@/domain/models/Product";
import { GetAllProductsDto } from "@/domain/Dtos/product/GetAllProductQuery";
import { ProductRepository } from "@/infrastructure/repositories/ProductRepository/ProductRepository";
export default function ProductHome() {
	const [products, setProducts] = useState<Product[]>([]);

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function getAllProductsPayload(): GetAllProductsDto {
		const filter = new GetAllProductsDto();

		filter.BrandIds = [];
		filter.CategoryIds = [];
		filter.IsAscendingSort = true;
		filter.MaximumPrice = 2000;
		filter.MinimumPrice = 1;
		filter.PageNo = 0;
		filter.PageSize = 10;
		filter.SearchKey = "";

		return filter;
	}

	useEffect(() => {
		async function loadData() {
			let productRepo = new ProductRepository();

			const filter = getAllProductsPayload();
			try {
				let res = await productRepo.getAllProducts(filter);

				setProducts(res.data.data);
			} catch (ex) {}
		}

		loadData();
	}, []);
	let mappedProductCards = products.map((product) => {
		return <ProductCard product={product} key={product.itemId} />;
	});
	return (
		<main className="p-24">
			<Fragment>
				<Button variant="outlined" onClick={handleClickOpen}>
					Open form dialog
				</Button>
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Subscribe</DialogTitle>
					<DialogContent>
						<CreateProductForm></CreateProductForm>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type="submit">Subscribe</Button>
					</DialogActions>
				</Dialog>
			</Fragment>

			{mappedProductCards}
		</main>
	);
}

"use client";
import React, { useEffect, useState } from "react";
import { TextField, Input, Button, Typography, Container, MenuItem, FormControl, Select, InputLabel, Chip, OutlinedInput, Checkbox, ListItemText } from "@mui/material";
import { CreateProductCommand } from "@/domain/Dtos/product/CreateProductCommand";
import { ProductBrandRepository } from "@/infrastructure/repositories/ProductBrandRepository/ProductBrandRepository";
import { ProductCategoryRepository } from "@/infrastructure/repositories/ProductCategoryRepository/ProductCategoryRepository";
import { ProductRepository } from "@/infrastructure/repositories/ProductRepository/ProductRepository";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Omar Alexander", "Carlos Abbott", "Miriam Wagner", "Bradley Wilkerson", "Virginia Andrews", "Kelly Snyder"];

export const CreateProductForm = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [productCode, setProductCode] = useState("");
	const [categoryOptions, setCategoryOptions] = useState<any>([]);
	const [brandOptions, setBrandOptions] = useState<any>([]);
	const [categoryIds, setCategoryIds] = useState<string[]>([]);
	const [brandId, setBrandId] = useState("");
	const [price, setPrice] = useState(0);
	const [primaryImageUrl, setPrimaryImageUrl] = useState("");
	const [secondaryImageUrls, setSecondaryImageUrls] = useState([]);

	const resetForm = () => {
		// Reset form fields
		setTitle("");
		setDescription("");
		setProductCode("");
		setCategoryIds([]);
		setBrandId("");
		setPrice(0);
		setPrimaryImageUrl("");
		setSecondaryImageUrls([]);
	};

	const handleCategoriesChange = (event: any) => {
		setCategoryIds(event.target.value);
	};

	const handleAddProduct = async () => {
		// Validate inputs
		if (!title || !price || !primaryImageUrl) {
			alert("Please fill in all required fields");
			return;
		}

		// Create new product object
		const newProduct = new CreateProductCommand(title, price, primaryImageUrl, categoryIds, description, productCode, brandId, secondaryImageUrls);

		// Pass the new product to the parent component
		const productRepo = new ProductRepository();

		try {
			let result = await productRepo.createProduct(newProduct);
			if (result) {
				resetForm();
			}
		} catch (ex) {
			alert("failed to save data");
		}
	};

	const loadProductArtifacts = async () => {
		const categoryRepo = new ProductCategoryRepository();
		const brandRepo = new ProductBrandRepository();

		let promises = [categoryRepo.FetchAllProductCategories(), brandRepo.FetchAllProductBrands()];

		let [categoryResponse, brandResponse] = await Promise.all(promises);
		console.log(categoryResponse.data);
		setCategoryOptions(categoryResponse.data.data);
		setBrandOptions(categoryResponse.data.data);
	};

	useEffect(() => {
		loadProductArtifacts();
	}, []);
	return (
		<Container maxWidth="sm">
			<Typography variant="h4" gutterBottom>
				Create Product
			</Typography>
			<form>
				<TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth required margin="normal" />
				<TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline margin="normal" />
				<TextField label="Product Code" value={productCode} onChange={(e) => setProductCode(e.target.value)} fullWidth margin="normal" />
				<FormControl sx={{ m: 1, width: 300 }}>
					<InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
					<Select labelId="demo-multiple-checkbox-label" id="demo-multiple-checkbox" multiple value={[]} onChange={handleCategoriesChange} input={<OutlinedInput label="Tag" />} renderValue={(selected: any) => selected.join(", ")} MenuProps={MenuProps}>
						{categoryOptions.map((category: any) => (
							<MenuItem key={category.ItemId} value={category.ItemId}>
								<Checkbox checked={categoryIds.indexOf(category.ItemId) > -1} />
								<ListItemText primary={category.title} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField label="Brand ID" value={brandId} onChange={(e) => setBrandId(e.target.value)} fullWidth margin="normal" />
				<TextField label="Price" type="number" value={price} onChange={(e: any) => setPrice(e.target.value)} fullWidth required margin="normal" />
				<TextField label="Primary Image URL" value={primaryImageUrl} onChange={(e) => setPrimaryImageUrl(e.target.value)} fullWidth required margin="normal" />
				<TextField label="Secondary Image URLs (comma-separated)" value={secondaryImageUrls} onChange={(e: any) => setSecondaryImageUrls(e.target.value)} fullWidth margin="normal" />
				<Button variant="contained" color="primary" onClick={handleAddProduct}>
					Add Product
				</Button>
			</form>
		</Container>
	);
};

import { CreateProductCommand } from "@/domain/Dtos/product/CreateProductCommand";
import { GetAllProductsDto } from "@/domain/Dtos/product/GetAllProductQuery";
import { IProductRepository } from "@/domain/interfaces/IProductRepository";
import axios from "axios";

export class ProductRepository implements IProductRepository {
	/**
	 *
	 * @param command
	 * @returns
	 */
	async createProduct(command: CreateProductCommand) {
		try {
			const response = await axios.post(`https://localhost:5000/api/product/createProduct`, {
				...command,
			});

			return true;
		} catch (ex) {
			return false;
		}
	}

	updateProduct(): void {
		throw new Error("Method not implemented.");
	}
	async getProductById(itemId: string) {
		let response = await axios.get(`https://localhost:5000/api/product/getProductById?id=${itemId}`);

		console.log("product", response);

		return response;
	}

	async getAllProducts(queryFilter: GetAllProductsDto) {
		let response = await axios.get(`https://localhost:5000/api/product/getProducts`, {
			params: {
				CategoryIds: queryFilter.CategoryIds,
				BrandIds: queryFilter.BrandIds,
				MinimumPrice: queryFilter.MinimumPrice,
				MaximumPrice: queryFilter.MaximumPrice,
				SearchKey: queryFilter.SearchKey,
				PageNo: queryFilter.PageNo,
				PageSize: queryFilter.PageSize,
				IsAscendingSort: queryFilter.IsAscendingSort,
				SortBy: queryFilter.SortBy,
			},
			paramsSerializer: {
				indexes: true,
			},
		});

		console.log("product", response);

		return response;
	}
	deleteProduct(itemId: string): void {
		throw new Error("Method not implemented.");
	}
}

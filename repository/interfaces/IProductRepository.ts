import { CreateProductCommand } from "../Dtos/product/CreateProductCommand";
import { GetAllProductsDto } from "../Dtos/product/GetAllProductQuery";

export interface IProductRepository {
	createProduct(command: CreateProductCommand): void;
	updateProduct(): void;
	getProductById(itemId: string): void;
	getAllProducts(payload: GetAllProductsDto): void;
	deleteProduct(itemId: string): void;
}

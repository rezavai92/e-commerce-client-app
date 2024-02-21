import axios from "axios";

export class ProductCategoryRepository {
	FetchAllProductCategories() {
		return axios.get("https://localhost:5000/api/ProductCategory/GetCategories");
	}
}

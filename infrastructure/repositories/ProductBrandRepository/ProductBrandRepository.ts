import axios from "axios";

export class ProductBrandRepository {
	FetchAllProductBrands() {
		return axios.get("https://localhost:5000/api/ProductBrand/GetBrands");
	}
}

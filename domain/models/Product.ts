import { IProduct } from "../interfaces/IProduct.interface";

export class Product implements IProduct {
	constructor(
		public title: string = "",
		public description: string = "",
		public productCode: string = "",
		public price: number = 0,
		public primaryImageUrl?: string | null | undefined,
		public secondaryImageUrls?: string[] | null | undefined,
		public remainingQuantity: number = 0,
		public brandItemId?: string | null | undefined,
		public itemId: string = ""
	) {}
}

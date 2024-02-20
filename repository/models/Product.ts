import { IProduct } from "../interfaces/IProduct.interface";

export class Product implements IProduct {
	constructor(
		public Title: string = "",
		public Description: string = "",
		public ProductCode: string = "",
		public Price: number = 0,
		public PrimaryImageUrl?: string | null | undefined,
		public SecondaryImageUrls?: string[] | null | undefined,
		public RemainingQuantity: number = 0,
		public BrandItemId?: string | null | undefined,
		public ItemId: string = ""
	) {}
}

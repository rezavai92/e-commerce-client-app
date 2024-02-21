export interface IProduct {
	title: string;
	description?: string | null;
	productCode: string;
	price: number;
	primaryImageUrl?: string | null;
	secondaryImageUrls?: string[] | null;
	remainingQuantity: number;
	brandItemId?: string | null;
}

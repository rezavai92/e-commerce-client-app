export interface IProduct {
	Title: string;
	Description?: string | null;
	ProductCode: string;
	Price: number;
	PrimaryImageUrl?: string | null;
	SecondaryImageUrls?: string[] | null;
	RemainingQuantity: number;
	BrandItemId?: string | null;
}

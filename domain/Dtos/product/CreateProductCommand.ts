export class CreateProductCommand {
	public Title: string;
	public Description?: string;
	public ProductCode?: string;
	public CategoryIds: string[];
	public BrandId?: string;
	public Price: number;
	public PrimaryImageUrl: string;
	public SecondaryImageUrls: string[];

	constructor(title: string, price: number, primaryImageUrl: string, categoryIds: string[], description?: string, productCode?: string, brandId?: string, secondaryImageUrls?: string[]) {
		this.Title = title;
		this.Price = price;
		this.PrimaryImageUrl = primaryImageUrl;
		this.CategoryIds = categoryIds;
		this.Description = description;
		this.ProductCode = productCode;
		this.BrandId = brandId;
		this.SecondaryImageUrls = secondaryImageUrls || [];
	}
}

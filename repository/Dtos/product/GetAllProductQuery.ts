export class GetAllProductsDto {
    CategoryIds: string[];
    BrandIds: string[];
    MinimumPrice?: number;
    MaximumPrice?: number;
    SearchKey: string;
    PageNo: number;
    PageSize: number;
    IsAscendingSort: boolean;
    SortBy: string;

    constructor(
        categoryIds: string[] = [],
        brandIds: string[] = [],
        minimumPrice?: number,
        maximumPrice?: number,
        searchKey: string = '',
        pageNo: number = 0,
        pageSize: number = 10,
        isAscendingSort: boolean = false,
        sortBy: string = 'CreatedOn'
    ) {
        this.CategoryIds = categoryIds;
        this.BrandIds = brandIds;
        this.MinimumPrice = minimumPrice;
        this.MaximumPrice = maximumPrice;
        this.SearchKey = searchKey;
        this.PageNo = pageNo;
        this.PageSize = pageSize;
        this.IsAscendingSort = isAscendingSort;
        this.SortBy = sortBy;
    }
}

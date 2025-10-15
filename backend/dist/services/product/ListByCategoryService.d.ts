interface ProductRequest {
    category_id: string;
}
declare class ListByCategoryService {
    execute({ category_id }: ProductRequest): Promise<any>;
}
export { ListByCategoryService };
//# sourceMappingURL=ListByCategoryService.d.ts.map
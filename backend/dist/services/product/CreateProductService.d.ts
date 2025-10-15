interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}
declare class CreateProductService {
    execute({ name, price, description, banner, category_id }: ProductRequest): Promise<any>;
}
export { CreateProductService };
//# sourceMappingURL=CreateProductService.d.ts.map
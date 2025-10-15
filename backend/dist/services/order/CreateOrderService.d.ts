interface OrderRequest {
    table: number;
    name?: string;
}
declare class CreateOrderService {
    execute({ table, name }: OrderRequest): Promise<any>;
}
export { CreateOrderService };
//# sourceMappingURL=CreateOrderService.d.ts.map
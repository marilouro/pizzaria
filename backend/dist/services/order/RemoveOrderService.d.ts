interface OrderRequest {
    order_id: string;
}
declare class RemoveOrderService {
    execute({ order_id }: OrderRequest): Promise<any>;
}
export { RemoveOrderService };
//# sourceMappingURL=RemoveOrderService.d.ts.map
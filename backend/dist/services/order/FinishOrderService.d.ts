interface OrderRequest {
    order_id: string;
}
declare class FinishOrderService {
    execute({ order_id }: OrderRequest): Promise<any>;
}
export { FinishOrderService };
//# sourceMappingURL=FinishOrderService.d.ts.map
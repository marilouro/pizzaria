interface OrderRequest {
    order_id: string;
}
declare class SendOrderService {
    execute({ order_id }: OrderRequest): Promise<any>;
}
export { SendOrderService };
//# sourceMappingURL=SendOrderService.d.ts.map
interface DetailRequest {
    order_id: string;
}
declare class DetailOrderService {
    execute({ order_id }: DetailRequest): Promise<any>;
}
export { DetailOrderService };
//# sourceMappingURL=DetailOrderService.d.ts.map
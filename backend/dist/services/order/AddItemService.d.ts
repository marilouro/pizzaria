interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}
declare class AddItemService {
    execute({ order_id, product_id, amount }: ItemRequest): Promise<any>;
}
export { AddItemService };
//# sourceMappingURL=AddItemService.d.ts.map
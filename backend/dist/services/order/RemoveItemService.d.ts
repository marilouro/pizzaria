interface ItemResquest {
    item_id: string;
}
declare class RemoveItemService {
    execute({ item_id }: ItemResquest): Promise<{
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        order_id: string;
        product_id: string;
        amount: number;
    }>;
}
export { RemoveItemService };
//# sourceMappingURL=RemoveItemService.d.ts.map
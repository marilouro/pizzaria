interface ItemResquest {
    item_id: string;
}
declare class RemoveItemService {
    execute({ item_id }: ItemResquest): Promise<any>;
}
export { RemoveItemService };
//# sourceMappingURL=RemoveItemService.d.ts.map
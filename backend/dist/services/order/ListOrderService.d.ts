declare class ListOrderService {
    execute(): Promise<{
        name: string | null;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        table: number;
        status: boolean;
        draft: boolean;
    }[]>;
}
export { ListOrderService };
//# sourceMappingURL=ListOrderService.d.ts.map
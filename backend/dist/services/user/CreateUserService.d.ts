interface userRequest {
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ name, email, password }: userRequest): Promise<{
        name: string;
        email: string;
        id: string;
    }>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserService.d.ts.map
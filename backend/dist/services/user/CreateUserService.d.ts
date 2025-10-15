interface userRequest {
    name: string;
    email: string;
    password: string;
}
declare class CreateUserService {
    execute({ name, email, password }: userRequest): Promise<any>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserService.d.ts.map
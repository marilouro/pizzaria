interface AuthRequest {
    email: string;
    password: string;
}
declare class AuthUserService {
    execute({ email, password }: AuthRequest): Promise<{
        id: any;
        name: any;
        email: any;
        token: any;
    }>;
}
export { AuthUserService };
//# sourceMappingURL=AuthUserService.d.ts.map
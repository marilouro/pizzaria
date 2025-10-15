import { Request, Response } from "express";
declare module 'express-serve-static-core' {
    interface Request {
        user_id?: string;
    }
}
declare class DetailUserController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { DetailUserController };
//# sourceMappingURL=DetailUserController.d.ts.map
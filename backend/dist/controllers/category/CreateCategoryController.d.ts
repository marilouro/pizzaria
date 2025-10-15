import { Request, Response } from 'express';
declare module 'express-serve-static-core';
declare class CreateCategoryController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateCategoryController };
//# sourceMappingURL=CreateCategoryController.d.ts.map
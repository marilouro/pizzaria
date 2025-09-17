import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";  

declare module 'express-serve-static-core' {
  interface Request {
    user_id?: string;
  }
}

class DetailUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;
        console.log(user_id);
        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(user_id);
        return res.json(user);
    }
}

export {DetailUserController}
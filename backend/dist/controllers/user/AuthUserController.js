"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserController = void 0;
const AuthUserService_1 = require("../../services/user/AuthUserService");
class AuthUserController {
    async handle(req, res) {
        const { email, password } = req.body;
        const authUserService = new AuthUserService_1.AuthUserService();
        try {
            const auth = await authUserService.execute({ email, password });
            return res.json(auth);
        }
        catch (error) {
            console.error("Error in AuthUserController:", error.message);
            return res.status(401).json({ error: error.message });
        }
    }
}
exports.AuthUserController = AuthUserController;
//# sourceMappingURL=AuthUserController.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrderController = void 0;
const ListOrderService_1 = require("../../services/order/ListOrderService");
class ListOrderController {
    async handle(req, res) {
        const listOrderService = new ListOrderService_1.ListOrderService();
        const orders = await listOrderService.execute();
        return res.json(orders);
    }
}
exports.ListOrderController = ListOrderController;
//# sourceMappingURL=ListOrderController.js.map
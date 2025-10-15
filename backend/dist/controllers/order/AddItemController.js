"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemController = void 0;
const AddItemService_1 = require("../../services/order/AddItemService");
class AddItemController {
    async handle(req, res) {
        const { order_id, product_id, amount } = req.body;
        const addItemService = new AddItemService_1.AddItemService();
        const order = await addItemService.execute({
            order_id,
            product_id,
            amount
        });
        return res.json(order);
    }
}
exports.AddItemController = AddItemController;
//# sourceMappingURL=AddItemController.js.map
import prismaClient from "../../prisma";
interface OrderRequest{
    table: number;
    name?: string;
}

class CreateOrderService{
    async execute({table, name}: OrderRequest){
        const order = await prismaClient.order.create({
            data: {
                table: table,
                name: name,
                draft: true,
                status: false
            }
        })
        
        return order;

    }
}

export {CreateOrderService}
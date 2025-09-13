import PrismaClient from '../../prisma'

interface userRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({name, email, password}: userRequest) {

        //verificar se ele enviou um email
        if(!email) {
            throw new Error("Email incorrect");
        }

        //verificar se o email está cadastrado na plataforma
        const userAlreadyExists = await PrismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if(userAlreadyExists) {
            throw new Error("User already exists");
        
        }

        
        return {name: name};
    }
}

export { CreateUserService };
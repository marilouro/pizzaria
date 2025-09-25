import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

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
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        //criptografar a senha

        const passwordHash = await hash(password, 8);


        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },

            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { CreateUserService };
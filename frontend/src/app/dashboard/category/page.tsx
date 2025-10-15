import styles from './styles.module.scss'
import {Button} from '@/app/dashboard/components/button'
import { api } from '@/services/api'
import {getCookieServer} from '@/lib/cookieServer'
import {redirect} from 'next/navigation'

export default function Category(){

    async function handleRegisterCategory(formData: FormData){
        "use server"

        const name = formData.get("name")

        if (name === "") return;

        const data = {
            name: name,
        }

        try {
            const token = await getCookieServer();
            
            const response = await api.post('/category', data, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            console.log("Categoria criada com sucesso:", response.data)
        } catch(err) {
            console.log("Erro ao criar categoria:", err)
            return;
        }
        
        redirect('/dashboard')

    }


    return (
        <main className={styles.container}>
            <h1>Nova Categoria</h1>

            <form className={styles.form}
                action={handleRegisterCategory}>
                <input
                    type="text"
                    name="name"
                    placeholder='Digite o nome da categoria. Ex: Pizzas'
                    required
                    className={styles.input}
                />

                <Button name="Cadastrar"/>
            </form>
        </main>
    )
}
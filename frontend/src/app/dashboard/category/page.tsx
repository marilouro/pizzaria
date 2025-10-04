import styles from './styles.module.scss'
import {Button} from '@/app/dashboard/componentes/button'

export default function Category(){

    async function handleRegisterCategory(){
        "use server"
        
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
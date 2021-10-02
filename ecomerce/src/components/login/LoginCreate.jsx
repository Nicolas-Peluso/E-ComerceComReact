import React from 'react'
import UseInput from "../../Hook/useInput"
import useForm from '../../Hook/useForm'
import { Context } from "../../UserContext"
import Style from "./LoginCreate.module.css"
import Modal from '../modal/modal'
import Cadastro from '../Cadastro/Cadastro'

function LoginCreate() {
    const username = useForm(false)
    const password = useForm(false)

    const { TOKEN, erro } = React.useContext(Context)
    const [cadastro, setCadastro] = React.useState(false)

    function handleSubmite(e) {
        e.preventDefault()
        console.log(username.value)
        console.log(password.value)

        if (!!username.error === false && !!password.error === false) {
            TOKEN(password.value, username.value)
            console.log(erro)
        }
    }

    return (
        <section className={`${Style.container} container`}>
            <h1 >Login</h1>
            <form onSubmit={handleSubmite} className={Style.form}>
                <UseInput type="text" label="Nome"
                    {...username}
                />
                {username.error && <Modal erro={username.error} classNam={!!username.error} tope={250} />}
                <UseInput type="password" label="Senha" name="senha"
                    {...password}
                />
                {password.error && <Modal erro={password.error} classNam={!!password.error} />}
                <button type="submit" className="button">Login</button>
            </form>

            <div className={Style.cadastroCont}>
                <h1 className={Style.titleCadastro}>Nao possui cadastro? cadastrese no site</h1>
                {cadastro === false && <button onClick={() => setCadastro(true)} className="button">Cadastrar</button>}
                {cadastro && <Cadastro />}
            </div>
        </section>
    )
}

export default LoginCreate

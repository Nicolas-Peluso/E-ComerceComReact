import React from 'react'
import Style from "./Comprar.module.css"
import UseInput from '../Hook/useInput'
import useForm from '../Hook/useForm'
import { Context } from './App'

function Comprar() {
    const [UserName, setUserName] = React.useState('')
    const [Email, setEmail] = React.useState('')
    const [Pass, setSenha] = React.useState('')
    const [Cep, setCep] = React.useState('')
    const [Rua, setRua] = React.useState('')
    const [Numero, setNumero] = React.useState(0)
    const [Bairro, setBairro] = React.useState('')
    const [Cidade, setCidade] = React.useState('')
    const [Estado, setEstado] = React.useState('')
    const e = React.useContext(Context)
    console.log(e)

    const cep = useForm("Cep")
    const senha = useForm("senha")
    const nome = useForm(false)
    const email = useForm("email")
    const rua = useForm(false)
    const numero = useForm(false)
    const bairro = useForm(false)
    const cidade = useForm(false)
    const estado = useForm(false)

    function handleSubmit(e) {
        e.preventDefault()
        setUserName(nome.value)
        setEmail(email.value)
        setCep(cep.value)
        setSenha(senha.value)

        console.log(UserName)
        console.log(Email)
        console.log(Pass)
        console.log(Cep)
    }

    return (
        <div className={Style.ContainerFormComprar}>
            <form onSubmit={handleSubmit}>
                <UseInput type="text"
                    name="userName"
                    label="nome"
                    {...nome}
                /> <br />
                {email.error && <p>{email.error}</p>}
                <UseInput type="email"
                    name="Email"
                    label="Email"
                    {...email}
                /> <br />
                {senha.error && <p>{senha.error}</p>}
                <UseInput type="password"
                    name="senha"
                    label="senha"
                    {...senha}
                /> <br />
                {cep.error && <p>{cep.error}</p>}
                <UseInput type="text"
                    name="cep"
                    label="cep"
                    {...cep}
                /> <br />
                <UseInput type="text"
                    name="Rua"
                    label="rua"
                    {...rua}
                />
                <br />
                <UseInput type="text"
                    name="numero"
                    label="numero"
                    {...numero}
                />
                <br />
                <UseInput type="text"
                    name="Bairro"
                    label="Bairro"
                    {...bairro}
                />
                <br />
                <UseInput type="text"
                    name="cidade"
                    label="Cidade"
                    {...cidade}
                />
                <br />
                <UseInput type="text"
                    name="estado"
                    label="Estado"
                    {...estado}
                />
                <button type="submit">enviar</button>
            </form>
        </div>
    )
}

export default Comprar

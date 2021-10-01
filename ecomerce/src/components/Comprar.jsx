import React from 'react'
import Style from "./Comprar.module.css"
import UseInput from '../Hook/useInput'
import useForm from '../Hook/useForm'
import { Context } from '../App'
import StyleBtn from "../components/Header.module.css"
import Modal from './modal/modal'

function Comprar() {
    const e = React.useContext(Context)
    const [classNam, setClassNam] = React.useState(false)

    const cep = useForm("Cep")
    const senha = useForm("senha")
    const nome = useForm(false)
    const email = useForm("email")
    const rua = useForm(false)
    const numero = useForm(false)
    const bairro = useForm(false)
    const cidade = useForm(false)
    const estado = useForm(false)

    React.useEffect(() => {
        if (cep.error === null) {
            rua.setValue(cep.CepData.logradouro)
            bairro.setValue(cep.CepData.Bairro)
            cidade.setValue(cep.CepData.localidade)
            estado.setValue(cep.CepData.uf)
            console.log("mnçnn")
        }
    }, [cep])

    function handleSubmit(e) {
        e.preventDefault()
        if (nome.error === null &&
            senha.error === null &&
            cep.error === null &&
            numero.error === null &&
            estado.error === null &&
            rua.error === null &&
            email.error === null &&
            bairro.error === null &&
            cidade.error === null) {

            console.log(nome.value)
            console.log(email.value)
            console.log(senha.value)
            console.log(cep.value)
            console.log(rua.value)
            console.log(bairro.value)
            console.log(cidade.value)
            console.log(estado.value)
            return true
        } setClassNam(true)
    }

    {
        classNam && setTimeout(() => {
            setClassNam(false)
            console.log("nnn")
        }, 2000)
    }

    return (
        <div className={Style.ContainerFormComprar}>
            <h1 style={{ fontFamily: "arial" }}>Enderço de Envio</h1>
            <form onSubmit={handleSubmit} className={Style.form}>
                <UseInput type="text"
                    name="userName"
                    label="nome"
                    {...nome}
                /> <br />
                {nome.error && <p>{nome.error}</p>}
                <UseInput type="email"
                    name="Email"
                    label="Email"
                    {...email}
                /> <br />
                {email.error && <p>{email.error}</p>}
                <UseInput type="password"
                    name="senha"
                    label="senha"
                    {...senha}
                /> <br />
                {senha.error && <p>{senha.error}</p>}
                <UseInput type="text"
                    name="cep"
                    label="cep"
                    {...cep}
                /> <br />
                {cep.error && <p>{cep.error}</p>}
                <UseInput type="text"
                    name="Rua"
                    label="rua"
                    {...rua}
                />
                {rua.error && <p>{rua.error}</p>}
                <br />
                <UseInput type="text"
                    name="numero"
                    label="numero"
                    {...numero}
                />
                {numero.error && <p>{numero.error}</p>}
                <br />
                <UseInput type="text"
                    name="Bairro"
                    label="Bairro"
                    {...bairro}
                />
                {bairro.error && <p>{bairro.error}</p>}
                <br />
                <UseInput type="text"
                    name="cidade"
                    label="Cidade"
                    {...cidade}
                />
                {cidade.error && <p>{cidade.error}</p>}
                <br />
                <UseInput type="text"
                    name="estado"
                    label="Estado"
                    {...estado}
                />
                {estado.error && <p>{estado.error}</p>}
                {classNam && <Modal erro="Todos os Campos Devem Estar Preenchidos " classNam={classNam} />}
                <button type="submit" className={`${StyleBtn.button} ${Style.button}`}>finalizar compra</button>
            </form>
        </div>
    )
}

export default Comprar

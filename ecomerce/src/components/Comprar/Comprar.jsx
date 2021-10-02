import React from 'react'
import Style from "./Comprar.module.css"
import UseInput from '../../Hook/useInput'
import useForm from '../../Hook/useForm'
import StyleBtn from "../Header.module.css"
import Modal from '../modal/modal'
import { Context } from "../../UserContext"
function Comprar({ title, TextButton }) {
    const [classNam, setClassNam] = React.useState(false)
    const { userCadastro, data, loading, erro } = React.useContext(Context)

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
        if (cep.CepData) {
            rua.setValue(cep.CepData.logradouro)
            bairro.setValue(cep.CepData.Bairro)
            cidade.setValue(cep.CepData.localidade)
            estado.setValue(cep.CepData.uf)
        }
    }, [cep.CepData])

    function handleSubmit(e) {
        e.preventDefault()
        if (!!nome.error === false &&
            !!senha.error === false &&
            !!cep.error === false &&
            !!numero.error === false &&
            !!estado.error === false &&
            !!rua.error === false &&
            !!email.error === false &&
            !!bairro.error === false &&
            !!cidade.error === false) {
            userCadastro(
                bairro.value,
                cep.value,
                cidade.value,
                email.value,
                estado.value,
                nome.value,
                numero.value,
                rua.value,
                senha.value
            )
            return true
        } setClassNam(true)
    }

    {
        classNam && setTimeout(() => {
            setClassNam(false)
        }, 6000)
    }

    return (
        <div className={`${Style.ContainerFormComprar} container`}>
            <h1 style={{ fontFamily: "arial" }}>{title ? title : 'Endereço de envio'}</h1>
            <form onSubmit={handleSubmit} className={Style.form}>
                <UseInput type="text"
                    name="userName"
                    label="nome"
                    {...nome}
                /> <br />
                {nome.error && <p>{nome.error}</p>}
                <UseInput type="text"
                    name="Email"
                    label="Email"
                    {...email}
                /> <br />
                {classNam && email.error && <Modal erro={email.error} classNam={classNam} tope={250} />}
                <UseInput type="password"
                    name="senha"
                    label="senha"
                    {...senha}
                /> <br />
                {classNam && senha.error && <Modal erro={senha.error} classNam={classNam} />}
                <UseInput type="text"
                    name="cep"
                    label="cep"
                    {...cep}
                /> <br />

                {classNam && cep.error && <Modal erro={cep.error} classNam={classNam} tope={400} />}

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
                {loading ? <button disabled className={`${StyleBtn.button} ${Style.button}`} style={{ opacity: 0.5 }}>CARREGANDO...</button>
                    : <button type="submit" className={`${StyleBtn.button} ${Style.button}`}>{TextButton ? TextButton : 'finalizar compra'}</button>
                }
                {erro && erro.message}
            </form>
        </div>
    )
}

export default Comprar

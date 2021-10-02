import React from 'react'
const Teste = {
    email: {
        regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "email invalido"
    },
    senha: {
        regexp: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: "senha deve ter: uma letra, um numero e oito caracteres"
    },
    Cep: {
        regexp: /^\d{5}-?\d{3}$/,
        message: "cep invalido"
    }
}

function useForm(type) {
    const [value, setValue] = React.useState('')
    const [error, setErro] = React.useState('')
    const [CepData, setCepData] = React.useState(false)

    function onChange({ target }) {
        if (type === "Cep" && target.value.length === 8) {
            GetCep(target.value)
        }
        setCepData(false)
        setErro(null)
        setValue(target.value)

    }
    async function GetCep(cep) {
        let request = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let response = await request.json()
        if (request.ok) {
            setCepData({
                Bairro: response.bairro,
                uf: response.uf,
                localidade: response.localidade,
                logradouro: response.logradouro,
            })
        }
        console.log(response)
    }

    async function Validar(value) {
        if (value.length === 0) {
            setErro("preencha um valor")
        }
        if (value) {
            if (type === false) return true
            else {
                setErro(null)
                if (!Teste[type].regexp.test(value)) {
                    setErro(Teste[type].message)
                }
            }
        }
    }

    return {
        value,
        setValue,
        error,
        setErro,
        onChange,
        onBlur: () => Validar(value),
        Validate: () => Validar(value),
        CepData
    }
}

export default useForm
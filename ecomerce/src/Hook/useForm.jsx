import React from 'react'
import useFetch from './useFetch'
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
    const { data, request, erro, loading } = useFetch()

    const [value, setValue] = React.useState('')
    const [error, setErro] = React.useState('')

    function onChange({ target }) {
        setErro(null)
        setValue(target.value)

    }

    async function Validar(value) {
        if (type === false) return true
        if (value.length === 0) {
            setErro("preencha um valor")
        } else {
            setErro(null)
            if (!Teste[type].regexp.test(value)) {
                setErro(Teste[type].message)
            } else {
                console.log("cep ok", value)
                fetch()
            }
        }
    }

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => Validar(value),
        Validate: () => Validar(value)
    }
}

export default useForm

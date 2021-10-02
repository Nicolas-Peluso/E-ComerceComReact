import React from 'react'
import { POST_TOKEN, POST_USER, GET_SEARCH } from "./services/api"
export const Context = React.createContext()

function UserContext({ children }) {
    const [erro, setErro] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [data, setData] = React.useState(false)
    const [Results, setResults] = React.useState(null)

    async function TOKEN(password, username) {
        const { url, options } = POST_TOKEN({ password, username })
        let request
        let response

        try {
            setErro(false)
            setLoading(true)
            request = await fetch(url, options)
            response = await request.json()
            if (request.ok === false) throw new Error(response.message)
            localStorage.setItem("tokenRanek", response.token)
        } catch (erro) {
            setErro(erro)
            setLoading(false)
        } finally {
            setData(response)
            console.log(response)
            setLoading(false)
        }
    }

    async function userCadastro(bairro, cep, cidade, email, estado, nome, numero, rua, senha) {
        const { url, options } = POST_USER({
            bairro, cep, cidade, email, estado, id: email, nome,
            numero, rua, senha
        })
        let request;
        let response;
        try {
            setErro(false)
            setLoading(true)
            request = await fetch(url, options)
            response = await request.json()
            if (request.ok === false) throw new Error(response.message)
            TOKEN(senha, nome)
        } catch (erro) {
            setErro(erro)
            setLoading(false)
        } finally {
            setData(response)
            setLoading(false)
        }
    }

    async function Search(query) {
        const { url, options } = GET_SEARCH(query)
        let request;
        let response;
        try {
            setErro(false)
            setLoading(true)
            request = await fetch(url, options)
            response = await request.json()
            if (request.ok === false) throw new Error(response.message)
        } catch (erro) {
            setErro(erro)
            setLoading(false)
        } finally {
            setData(response)
            setLoading(false)
        }
    }

    return (
        <Context.Provider value={{ userCadastro, TOKEN, Search, data, loading, erro, setResults, Results }}>
            {children}
        </Context.Provider>
    )
}

export default UserContext

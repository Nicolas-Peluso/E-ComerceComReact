import React from 'react'
import style from "./search.module.css"
import { useNavigate } from "react-router-dom"
import { Context } from '../UserContext'
import Modal from './modal/modal'

function Search(props) {
    const Navigate = useNavigate()
    const [erro, setErro] = React.useState(false)

    const { Search } = React.useContext(Context)
    const [search, setSearch] = React.useState('')
    function handleSubmit(e) {
        e.preventDefault()
        if (search) {
            Search(search)
            Navigate(`/pesquisa/${search}`)
        } else {
            setErro("voce deve usar um termo de pesquisa valido")
        }
        //props.Results = data
    }

    function handleChange({ target }) {
        setErro(false)
        setSearch(target.value)
    }

    {
        erro && setTimeout(() => {
            setErro(false)
        }, 3000)
    }

    return (
        <div className={style.containerForm}>
            {erro && <Modal erro={erro} classNam={!!erro} />}
            <h1 className={style.Label}>👍 Compre ou Venda 👎</h1>
            <form onSubmit={handleSubmit} className={style.Form}>
                <input type="text" value={search}
                    onChange={handleChange} placeholder="Buscar..." />
                <input type="submit" id="Lupa" className={style.Lupa} />
            </form>

        </div>
    )
}

export default Search

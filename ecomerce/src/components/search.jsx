import React from 'react'
import style from "./search.module.css"

function Search() {
    const [search, setSearch] = React.useState('')
    function handleSubmit(e) {
        e.preventDefault()
        console.log(search)
    }
    function handleChange({ target }) {
        setSearch(target.value)
    }

    return (
        <div className={style.containerForm}>
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

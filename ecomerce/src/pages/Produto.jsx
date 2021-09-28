import React from 'react'
import Style from "./Produto.module.css"
import useFetch from "../Hook/useFetch"
import Loading from '../components/Loading'
import ErroPage from './ErroPage'
import { Link, useNavigate } from 'react-router-dom'

function Produto(props) {
    const { request, data, error, loading } = useFetch()
    const Context = React.createContext()
    console.log(Context)

    const navigate = useNavigate()
    React.useEffect(() => {
        request(`https://ranekapi.origamid.dev/json/api/produto`)
    }, [request])

    function handleClick(name) {
        props.value(name)
        navigate(`/produto/${name}`)
    }

    return (
        <>
            <div className={Style.Container}>
                {loading && <Loading />}
                {error && <ErroPage />}
                {data && data.map(product => (
                    <div className={Style.Card} onClick={() => handleClick(product.nome)}>
                        <img src={product.fotos[0].src} alt="" />
                        <div className={Style.ContainerText}>
                            <p className={Style.preco}>R$ {product.preco[0]}.{product.preco.slice(1, product.preco.length)}</p>
                            <p className={Style.nome}>{product.nome}</p>
                            <p className={Style.desc}>{product.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Produto

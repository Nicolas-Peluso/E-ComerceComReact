import Style from "./ProductDetail.module.css"
import React from 'react'
import { useParams } from "react-router-dom"
import { Context } from "../components/App"
import useFetch from "../Hook/useFetch"
import Loading from "../components/Loading"
import ErroPage from "./ErroPage"

function ProductDetail() {
    const params = useParams()
    const { produtoNome } = React.useContext(Context)
    const { request, data, loading, erro } = useFetch()

    React.useEffect(() => {
        request(`https://ranekapi.origamid.dev/json/api/produto/${produtoNome}`)
    }, [request])

    return (
        <div className={Style.ContainerDetail}>
            {loading && <Loading />}
            {erro && <ErroPage />}
            {data && data.fotos && <>
                {data.fotos.map(foto => (
                    <img src={foto.src} alt="desculpe nao foi possivel encontrar" />
                ))}
                <div className={Style.ContainerText}>
                    <p className={Style.nome}>{data.nome}</p>
                    <p className={Style.preco}>R${data.preco[0]}.{data.preco.slice(1, data.preco.length)}</p>
                    <p className={Style.descricao}>{data.descricao}</p>
                </div>
                <button className={Style.comprar}>Comprar</button>
            </>
            }

        </div>
    )
}

export default ProductDetail

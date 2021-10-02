import Style from "./ProductDetail.module.css"
import React from 'react'
import { useParams } from "react-router-dom"
import useFetch from "../Hook/useFetch"
import Loading from "../components/Loading"
import ErroPage from "./ErroPage"
import Comprar from "../components/Comprar/Comprar"

function ProductDetail({ ProductName }) {
    const params = useParams()
    const { request, data, loading, erro } = useFetch()
    const [ComprarForm, setComprarForm] = React.useState(false)

    React.useEffect(() => {
        const ProductNamer = sessionStorage.getItem("produtoAtual")
        if (ProductNamer)
            ProductName = ProductNamer
        request(`https://ranekapi.origamid.dev/json/api/produto/${ProductName}`)
    }, [request])

    React.useEffect(() => {

    }, [])

    return (
        <div className={`${Style.ContainerDetail} container`}>
            {loading && <Loading />}
            {erro && <ErroPage />}
            {data && data.fotos && <>
                <div className={Style.containerFotos}>
                    {data.fotos.map(foto => (
                        <img src={foto.src} alt="desculpe nao foi possivel encontrar" key={foto.src} />
                    ))}
                </div>
                <div className={Style.ContainerText}>
                    <p className={Style.nome}>{data.nome}</p>
                    <p className={Style.preco}>R${data.preco[0]}.{data.preco.slice(1, data.preco.length)}</p>
                    <p className={Style.descricao}>{data.descricao}</p>
                    {ComprarForm === false ? <button className={Style.comprar} onClick={() => setComprarForm(true)}>Comprar</button> : <Comprar />}
                </div>
            </>
            }
        </div>
    )
}

export default ProductDetail

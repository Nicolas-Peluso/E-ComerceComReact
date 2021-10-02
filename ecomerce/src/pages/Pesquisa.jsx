import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import Search from '../components/search';
import { Context } from '../UserContext'
import Style from "./Produto.module.css";

function Pesquisa(props) {
    const para = useParams()
    const { Results } = React.useContext(Context)
    const navigate = useNavigate()
    const [Res, setRes] = React.useState(null)

    React.useEffect(() => {
        setRes(Results)
    }, [Results])

    console.log(Results)
    function handleClick(name) {
        props.value(name)
        sessionStorage.setItem("produtoAtual", name)
        navigate(`/produto/${name}`)
    }

    function handleResults(res) {
        console.log(res)
    }

    return (
        <>
            <Search Results={handleResults} />
            <div className={`${Style.Container} container`}>
                {Res && Res.map(product => (
                    <div className={Style.Card} onClick={() => handleClick(product.nome)} key={product.id}>
                        <img src={product.fotos[0].src} alt="" key={product.id + "33"} />
                        <div className={Style.ContainerText} key={product.id + "d"}>
                            <p className={Style.preco} key={product.id + "f"}>R$ {product.preco[0]}.{product.preco.slice(1, product.preco.length)}</p>
                            <p className={Style.nome} key={product.id + "w"}>{product.nome}</p>
                            <p className={Style.desc} key={product.id + "h"}>{product.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Pesquisa

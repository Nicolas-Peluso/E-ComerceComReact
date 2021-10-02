import React from 'react'
import Style from "./Header.module.css"
import Image from "../img/ranek.e7a4871b.svg"
import { Link } from "react-router-dom"
function Header() {
    return (
        <>
            <nav className={Style.nav}>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={Image} alt="desculpe nao foi possivel carrgar a imagem" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/login"><button className={Style.button}>Vender / Login</button></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header

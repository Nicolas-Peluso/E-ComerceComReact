import React from 'react'
import Style from "./Header.module.css"
import Image from "../img/ranek.e7a4871b.svg"
function Header() {
    return (
        <>
            <nav className={Style.nav}>
                <ul>
                    <li>
                        <img src={Image} alt="desculpe nao foi possivel carrgar a imagem" />
                    </li>
                    <li>
                        <button>Vender / Login</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header

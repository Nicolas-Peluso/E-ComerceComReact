import React from 'react'

function Modal({ erro, classNam, tope }) {
    return (
        <div className={`ModalContainer ${classNam ? 'ativo' : null}`} style={{ top: tope ? tope + 'px' : null }}>
            <p className="erroModal">{erro}</p>
        </div>
    )
}

export default Modal

import React from 'react'

function Modal({ erro, classNam }) {
    return (
        <div className={`ModalContainer ${classNam ? 'ativo' : null}`}>
            <p className="erroModal">{erro}</p>
        </div>
    )
}

export default Modal

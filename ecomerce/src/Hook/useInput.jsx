import React from 'react'
import Style from "./useInput.module.css"

function useInput({ value, onChange, onBlur, label, name, type }) {
    return (
        <div>

            <label className={Style.label}>{label}</label>
            <input type={type} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur}
                className={Style.input} />
        </div>
    )
}

export default useInput

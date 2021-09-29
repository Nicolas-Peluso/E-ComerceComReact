import React from 'react'

function useInput({ value, onChange, onBlur, label, name, type }) {
    return (
        <label>
            {label}
            <input type={type} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur} />
        </label>
    )
}

export default useInput

import React from 'react'

export default function InputTextarea({type, label, placeholder, value, change, name}) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} value={value} onChange={change} type={type} className="form-control" id={name} placeholder={placeholder} cols="30" rows="10" />
        </>
    )
}

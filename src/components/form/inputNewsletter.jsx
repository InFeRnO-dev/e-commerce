import React from 'react'

export default function InputNewsletter({type, placeholder, value, change, name}) {
    return (
        <div className="form-inline form-white">
            <input name={name} onChange={change} value={value} type={type} id={name} className="form-control col-8" placeholder={placeholder} />
            <button type="submit" className="btn btn-outline-light ml-2 col-3">S'Abonner</button>
        </div>
    )
}

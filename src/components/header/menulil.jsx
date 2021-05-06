import React from 'react'

export default function Menulil(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.url}>{props.nom}</a>
        </li>
    )
}

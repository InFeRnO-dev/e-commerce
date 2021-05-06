import React from 'react'
import Badge from 'react-bootstrap/Badge'

export default function Menulir(props) {
    return (
        <li className="nav-item ml-1">
            <a className="nav-link" href={props.url} style={{fontSize: "175%"}}><i className={props.icon}></i></a>{props.badge}
        </li>
    )
}
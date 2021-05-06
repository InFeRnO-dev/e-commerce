import React from 'react'

export default function FooterLink(props) {
    return (
        <li><a href={props.url} className="text-white">{props.nom}</a></li>
    )
}

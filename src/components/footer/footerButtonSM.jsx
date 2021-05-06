import React from 'react'

export default function FooterButtonSM(props) {
    return (
        <a className="btn btn-outline-light btn-floating m-1" href={props.url} role="button"><i className={props.icon}></i></a>
    )
}

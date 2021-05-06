import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div className="col-3">
            <div className="card" style={{ width: "64%", height: "92%" }}>
                <Link to={props.link}>
                    <img className="card-img-top" src={props.src} alt="Card image cap" style={{width: "155px", height: "150px"}} />
                    <div className="card-body">
                        <p className="card-text" style={{ textAlign: "center" }}>{props.nom}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

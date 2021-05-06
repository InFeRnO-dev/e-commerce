import React from 'react'
import Menulil from './menulil'
import Menulir from './menulir'
import Badge from 'react-bootstrap/Badge'
import { addPill, majPill } from '../../services/cartService'

export default function Header() {
    const menul = [
        {nom: "Accueil", url: "/"},
        {nom: "Ordinateur Portable", url: "/laptop"},
        {nom: "Ordinateur de Bureau", url: "/desktop"},
        {nom: "Accessoires", url: "/accessories"},
        {nom: "A Propos", url: "/about"},
        {nom: "Contact", url: "/contact"},
    ]
    const menur = [
        {icon:"bi bi-person-fill", url: "/login"},
        {icon:"bi bi-cart4", url: "/cart", badge: addPill()},
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <img className="img-fluid" src="https://i.postimg.cc/QMqZSvH8/compshop.png" width="6%"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-3" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    {menul.map((linkData, index) => <Menulil key={index} nom={linkData.nom} url={linkData.url}/>)}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Rechercher un produit"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Rechercher</button>
                </form>
                <ul className="navbar-nav ml-auto">
                    {menur.map((linkData, index) => <Menulir key={index} icon={linkData.icon} url={linkData.url} badge={linkData.badge}/>)}
                </ul>
            </div>
        </nav>
    )
}

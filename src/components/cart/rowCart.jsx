import React from 'react'
import { moinsQuantityLS, plusQuantityLS, refreshPage } from '../../services/cartService'

export default function RowCart({produit}){
    console.log(produit)

    return (
        <div className="row border-bottom">
            <div className="col-4 mt-2">
                <img className="float-left" style={{width: "30%", height:"90%"}} src={produit.img}/>
                    <p>{produit.marque} {produit.titre}</p>
                    <p>{produit.couleur}</p>
                    <p>{produit.modele}</p>
            </div>
            <div className="col-2 mt-2">
                <p>{produit.prix} €</p>
            </div>
            <div className="col-3 mt-2">
                <button onClick={() => {moinsQuantityLS(produit.id); refreshPage()}} className="btn btn-danger btn-sm">-</button>
                <p>{produit.quantite}</p>
                <button onClick={() => {plusQuantityLS(produit.id) ; refreshPage()}} className="btn btn-success btn-sm">+</button>
            </div>
            <div className="col-2 mt-2">
                <p>{produit.prix * produit.quantite} €</p>
            </div>
        </div>
    )
}

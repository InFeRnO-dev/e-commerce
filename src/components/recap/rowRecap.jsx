import React from 'react'

export default function RowRecap({produit}) {
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
                <p>{produit.quantite}</p>
            </div>
            <div className="col-2 mt-2">
                <p>{produit.prix * produit.quantite} €</p>
            </div>
        </div>
    )
}

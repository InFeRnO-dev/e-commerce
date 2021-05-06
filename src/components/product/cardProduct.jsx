import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CardProduct({produit}) {
    const srcurl = 'http://localhost:1337'
    return (produit.id != 0) && (
        <div className="col-4 mt-5">
            <div className="card" style={{ width: "64%", height: "92%" }}>
                <Link to={{pathname: `${produit.category.slugCategorie}/${produit.category.slugSousCategorie}/${produit.id}` , state: {produit: produit}}}>
                    <img className="card-img-top" src={srcurl + produit.images[0].formats.small.url} alt="Card image cap" style={{width: "75%", height: "65%"}} />
                    <div className="card-body">
                        <p className="card-text" style={{ textAlign: "center" }}>{produit.marque} {produit.titre}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { addPill, addProductLS, majPill, refreshPage } from '../services/cartService'
import { formHandleChange } from '../services/formService'

export default function Product(props) {
    const srcurl = "http://localhost:1337"
    console.log(props)

    const [item, setitem] = useState({
        id: props.location.state.produit.id,
        img: srcurl + props.location.state.produit.images[0].formats.medium.url,
        marque: props.location.state.produit.marque,
        titre: props.location.state.produit.titre,
        prix: props.location.state.produit.prix,
        modele: props.location.state.produit.models[0].modele,
        couleur: props.location.state.produit.colors[0].couleur,
        quantite: 1,
    })

    const history = useHistory();

    const handleChange = (event) => {
        formHandleChange(event, item, setitem)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        addPill()
        item.quantite = item.quantite * 1
        await addProductLS(item)
        history.push("/cart")
        refreshPage()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="container mt-5">
                <h1 className="text-center">PRODUIT</h1>
                <div className="container p-5">
                    <article className="row mt-5">
                    <div className="col-6">
                        <img value={item.img} src={srcurl + props.location.state.produit.images[0].formats.medium.url} alt="" width="90%" />
                    </div>
                    <div className="col-6 p-2">
                        <strong value={item.marque} className="text-uppercase" style={{fontSize: "200%"}}>{props.location.state.produit.marque}</strong><br/>
                        <strong value={item.titre} style={{fontSize: "175%"}}>{props.location.state.produit.titre}</strong>
                        <p value={item.prix} className="mt-2" style={{fontSize: "135%"}}>{props.location.state.produit.prix} €</p>
                        <div className="row">
                            <div className="form-group col-4">
                                <label htmlFor="SelectModele">Modèle</label>
                                <select name="modele" value={item.modele} onChange={handleChange} className="form-control float-right" id="SelectModele">
                                    <option>{props.location.state.produit.models[0].modele}</option>
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="SelectModele">Couleur</label>
                                <select name="couleur" value={item.couleur} onChange={handleChange} className="form-control float-right" id="SelectCouleur">
                                    <option>{props.location.state.produit.colors[0].couleur}</option>
                                </select>
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="SelectQuantite">Quantité</label>
                                <select name="quantite" value={item.quantite} onChange={handleChange} className="form-control float-right" id="SelectQuantite">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-info btn-sm btn-block mt-2">Ajouter au panier</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-5">
                                <h5>Description du produit :</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mt-2">
                                <p>{props.location.state.produit.description}</p>
                            </div>
                        </div>
                    </div>
                </article>
                </div>
            </div>
        </form>
    )
}

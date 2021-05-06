import React, { useEffect, useState } from 'react'
import InputLabel from '../components/form/inputLabel'
import Modal from '../components/recap/modal'
import RowRecap from '../components/recap/rowRecap'
import { formHandleChange } from '../services/formService'
import { addUser } from '../services/serviceApi'

export default function Recap() {
    const [montantTotal, setmontantTotal] = useState(0)
    const products = JSON.parse(localStorage.getItem("cart"))
    const livraison = JSON.parse(localStorage.getItem("livraison"))
    const adresse = JSON.parse(localStorage.getItem("adresse"))
    let modelivraison = ""

    const [cb, setcb] = useState({
        cardnb: "",
        cardexp: "",
        cardccv: "",
    })
    /*
    const commande = {
        orderNumber: Math.random(10000000),
        delivery: livraison.mode,
        deliveryAmount: livraison.prix,
        totalAmount: montantTotal,
        products: products,
        orderlines: lignecommande,
        user: user

    }
    const lignescommandes = []
    const lignecommande = {
        quantite: 0,
        prix: 0.0,
        product: 0,
        order: commande.id
    }
    {products.map((produit) => {
        lignecommande.quantite = produit.quantite,
        lignecommande.prix = produit.prix,
        lignecommande.product = produit.id
        lignescommandes.push(lignecommande)
    })}

    const user = {
        username: (adresse.nom + adresse.prenom),
        email: adresse.email,
        password: "Test1234",
        address: adresse.id,
    }
    
    */
    if(livraison.mode === "domicile") {
        modelivraison = "Colissimo (+5.90€)"
    }
    else {
        modelivraison = "Point relais (Gratuit)"
    }

    useEffect(async () => {
        let total = 0
        if(products !== null && products !== undefined){
            {products.map((product) => {
                total += (product.prix * product.quantite)
                setmontantTotal(total)
            })}
            total += livraison.prix
            setmontantTotal(total)
        }

    }, [])

    const handleChange = (event) => {
        formHandleChange(event, cb, setcb)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(cb)
        addUser()
    }

    return (
        <div className="container">
            <h2 className="text-center mt-5">Récapitulatif de votre panier d'achat</h2>
            <div className="row mt-5 border-bottom">
                <div className="col-4">
                    <p>Produit</p>
                </div>
                <div className="col-2">
                    <p>Prix</p>
                </div>
                <div className="col-3">
                    <p>Quantité</p>
                </div>
                <div className="col-2">
                    <p>Total</p>
                </div>
            </div>
            {products.map((linkData, index) => <RowRecap key={index} produit={linkData}/>)}
            <div className="row mt-3">
                <div className="col offset-5">
                    <h5>Mode de livraison :</h5>
                    <p>{modelivraison}</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col offset-5 d-inline-block">
                    <h5>Montant Total :</h5>
                </div>
            </div>
            <div className="row">
                <div className="col offset-8"> 
                    <h4>{montantTotal} €</h4>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h5><u>Votre paiement :</u></h5>
                    <p>Veuillez saisir les informations de votre paiement :</p>
                    <i className="bi bi-credit-card"></i>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-3 mt-3">
                        <InputLabel change={handleChange} label="Numéro de carte" name="cardnb" type="text" placeholder="1234 1234 1234 1234" value={cb.cardnb} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 mt-3">
                        <InputLabel change={handleChange} label="Date d'expiration" name="cardexp" type="text" placeholder="01/21" value={cb.cardexp} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 mt-3">
                        <InputLabel change={handleChange} label="Cryptogramme visuel" name="cardccv" type="text" placeholder="123" value={cb.cardccv} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col offset-9">
                        <Modal />
                        <button type="submit" className="btn btn-success btn-sm ml-3">Valider</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

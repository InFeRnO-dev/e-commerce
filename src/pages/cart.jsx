import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import RowCart from '../components/cart/rowCart'
import { setlivraisonLS } from '../services/cartService';
import { formHandleChange } from '../services/formService'

toast.configure()

export default function Cart() {
    const [montantTotal, setmontantTotal] = useState(0)
    const [livraison, setlivraison] = useState({ livraison: ""})
    const colissimo = 5.90
    const products = JSON.parse(localStorage.getItem("cart"))
    console.log(products)

    useEffect(async () => {
        let total = 0
        if(products !== null && products !== undefined){
            {products.map((product) => {
                total += (product.prix * product.quantite)
                setmontantTotal(total)
            })}
        }

    }, [])

    const handleChange = (event) => {
        formHandleChange(event, livraison, setlivraison)
        console.log(livraison.livraison)
        if(event.currentTarget.value === "domicile"){
            console.log("domicile")
            setmontantTotal(montantTotal + colissimo)
            localStorage.setItem("livraison", JSON.stringify({mode: event.currentTarget.value, prix: colissimo}))
        }
        else {
            console.log("pointrelais")
            setmontantTotal(montantTotal - colissimo)
            localStorage.setItem("livraison", JSON.stringify({mode: event.currentTarget.value, prix: 0.0}))
        }
    }

    return products ? (
        <div className="container mt-5">
            <h1 className="text-center">Votre Panier</h1>
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
            {products.map((linkData, index) => <RowCart key={index} produit={linkData}/>)}
            <div className="row mt-3">
                <div className="col offset-5">
                    <h5>Mode de livraison :</h5>
                </div>
            </div>
            <div className="row">
                <div className="col offset-8">
                    <input onChange={handleChange} className="mr-3" type="radio" name="livraison" value="domicile" />
                    <span>Colissimo 5,90 €</span>
                </div>
            </div>
            <div className="row">
                <div className="col offset-8">
                    <input onChange={handleChange} className="mr-3" type="radio" name="livraison" value="pointrelais" defaultChecked/>
                    <span>Point Relais (Gratuit)</span>
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
                <div className="col offset-3">
                    <Link to="/"><button className="btn btn-info btn-sm">Continuer mes achats</button></Link>
                </div>
                <div className="col offset">
                    <Link to={{pathname: "/cart/adresses"}}><button onClick={() => {setlivraisonLS()}} className="btn btn-success btn-sm">Valider le panier</button></Link>
                </div>
            </div>
        </div>
    ) 
    : (
            <div className="container mt-5">
                <h1 className="text-center">Votre Panier</h1>
                <div className="row mt-5">
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
            </div>
    )

}

import React, { useEffect, useState } from 'react'
import CardProduct from '../components/product/cardProduct'
import { getProductsByCategory } from '../services/serviceApi'

export default function AllProduct(props) {
    const [produit, setproduit] = useState([{
        id: 0,
        Marque: "",
        Titre: "",
        Prix: 0.0,
        Category: "",
        Modele: [],
        Couleur: [],
        Image: [],
    }])

    useEffect( async () => {
        
        if(props.match.params.slugsubcategory === undefined) {
            setproduit((await getProductsByCategory(`?_where[category.slugCategorie]=${props.match.params.slugcategory}`)).data)
        }
        else {
            setproduit((await getProductsByCategory(`?_where[category.slugSousCategorie]=${props.match.params.slugsubcategory}`)).data)
        }
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="text-center">Liste des Produits</h1>
            <div className="row">
                {produit.map((item, index) => <CardProduct key={index} produit={item}/>)}
            </div>
        </div>
    )
}

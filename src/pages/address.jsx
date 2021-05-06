import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import InputLabel from '../components/form/inputLabel'
import { formHandleChange } from '../services/formService'

export default function Address() {
    const [address, setaddress] = useState({
        email: '',
        civilite: 'Monsieur',
        nom: '',
        prenom: '',
        adresse1: '',
        adresse2: '',
        adresse3: '',
        codePostal: '',
        ville: '',
        pays: '',
        telephone: '',
    })

    const history = useHistory()

    const handleChange = (event) => {
        formHandleChange(event, address, setaddress)

        if(event.currentTarget.value === "Monsieur" || event.currentTarget.value === "Madame"){
            setaddress({...address, [event.currentTarget.name]: event.currentTarget.value})
        }
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(address)
        localStorage.setItem("adresse", JSON.stringify(address))
        history.push("/cart/recap")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <h2 className="text-center mt-5">Vos coordonnées - Adresse de livraison</h2>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Email *" name="email" value={address.email} change={handleChange} type="email" placeholder="exemple@exemple.com"/>
                    </div>
                </div>
                <div className="row">
                    <p className="col offset-2 mt-3">Civilite *</p>
                    <div className="col offset">
                        <input onChange={handleChange} className="mt-3" type="radio" name="civilite" value="Monsieur" defaultChecked/>
                        <span>Monsieur</span>
                    </div>
                    <div className="col offset">
                    <input onChange={handleChange} className="mt-3" type="radio" name="civilite" value="Madame" />
                        <span>Madame</span>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Nom *" name="nom" value={address.nom} change={handleChange} type="text" placeholder="DUPONT"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Prenom *" name="prenom" value={address.prenom} change={handleChange} type="text" placeholder="Jean"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="N° et libellé de la voie *" name="adresse1" value={address.adresse1} change={handleChange} type="text" placeholder="1 rue de la paix"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Immeuble, Bâtiment, Résidence" name="adresse2" value={address.adresse2} change={handleChange} type="text"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Lieu-dit, boîte postale, etc." name="adresse3" value={address.adresse3} change={handleChange} type="text"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Code postal *" name="codePostal" value={address.codePostal} change={handleChange} type="text" placeholder="13001"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Ville *" name="ville" value={address.ville} change={handleChange} type="text" placeholder="Marseille"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Pays *" name="pays" value={address.pays} change={handleChange} type="text" placeholder="FRANCE"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col offset-2">
                        <InputLabel label="Téléphone *" name="telephone" value={address.telephone} change={handleChange} type="text" placeholder="0601020304"/>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <p style={{color: "red"}}>* Champs obligatoire</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col offset-9">
                        <button onClick={() => {history.push("/cart")}} className="btn btn-danger btn-sm mr-3">Annuler</button>
                        <button type="submit" className="btn btn-success btn-sm ml-3">Valider</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

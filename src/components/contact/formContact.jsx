import React, { useState } from 'react'
import { formHandleChange } from '../../services/formService'
import { contactApi } from '../../services/serviceApi'
import InputLabel from '../form/inputLabel'
import InputTextarea from '../form/inputTextarea'

export default function FormContact(props) {
    const [contact, setcontact] = useState({nom: '', prenom: '', email: '', telephone: '', message: ''})

    const handleChange = (event) => {
        formHandleChange(event, contact, setcontact)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await contactApi(contact)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm">
                    <InputLabel label="Nom" name="nom" value={contact.nom} change={handleChange} type="text" placeholder="DUPONT"/>
                </div>
                <div className="col-sm">
                    <InputLabel label="Prenom" name="prenom" value={contact.prenom} change={handleChange} type="text" placeholder="Jean"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <InputLabel label="Email" name="email" value={contact.email} change={handleChange} type="email" placeholder="exemple@exemple.com"/>
                    <small id="emailHelp" className="form-text text-muted">Votre adresse Email ne sera pas partagé</small>
                </div>
                <div className="col-sm">
                    <InputLabel label="Téléphone" name="telephone" value={contact.telephone} change={handleChange} type="text" placeholder="+33601020304"/>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col">
                    <InputTextarea label="Message" name="message" value={contact.message} change={handleChange} type="textarea" placeholder="Votre message ..."/>
                </div>
            </div>
            <div className="row align-items-right">
                <div className="col pt-4">
                    <button type="submit" className="btn btn-primary btn-sm mx-3 float-right" style={{ width: 150 }}>Envoyer</button>
                </div>
            </div>
        </form>
    )
}

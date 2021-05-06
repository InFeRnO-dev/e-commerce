import React, { useContext, useState } from 'react'
import { AuthContext } from '../App'
import InputLabel from '../components/form/inputLabel'
import { formHandleChange } from '../services/formService'
import { loginApi } from '../services/serviceApi'

export default function Login(props) {
    const [login, setlogin] = useState({email: '', pwd: ''})
    const [error, seterror] = useState(false)
    const context = useContext(AuthContext)

    const handleChange = (event) => {
        formHandleChange(event, login, setlogin)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = await loginApi(login.email, login.pwd)
        if (data.length > 0) {
            seterror(false)
            context.setConnected(true)
            props.history.push('/')
        }
        else {
            seterror(true)
            context.setConnected(false)
        }
    }

    return (
        <div>
            <h1>Connexion</h1>
            {
                error && (
                <div className="alert alert-dismissible alert-danger ">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting again.
                </div>
                )
            }
            
            <form onSubmit={handleSubmit}>
                <InputLabel name="email" value={login.email} change={handleChange} type="Email" label="Email" placeholder="votre adresse email"/>
                <InputLabel name="pwd" value={login.pwd} change={handleChange} type="password" label="Mot de passe" placeholder="votre mot de passe"/>
                <button className="btn btn-primary mb-3">Connexion</button>
            </form>
        </div>
    )
}

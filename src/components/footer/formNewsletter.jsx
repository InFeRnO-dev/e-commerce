import React, { useState } from 'react'
import { formHandleChange } from '../../services/formService'
import { newsletterApi } from '../../services/serviceApi'
import InputNewsletter from '../form/inputNewsletter'

export default function FormNewsletter(props) {
    const [newsletter, setnewsletter] = useState({email: ''})
    
    const handleChange = (event) => {
        formHandleChange(event, newsletter, setnewsletter)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const result = await newsletterApi(newsletter)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="pt-2" style={{ color: 'white' }}>
                <strong>S'Abonner a la Newsletter</strong>
            </p>
            <InputNewsletter name="email" value={newsletter.newsletter} change={handleChange} type="email" placeholder="Adresse Email"/>
        </form>
    )
}

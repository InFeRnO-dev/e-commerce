import React from 'react'
import { useHistory } from 'react-router'

export default function Modal() {

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault()
        localStorage.removeItem("adresse")
        localStorage.removeItem("livraison")
        history.push("/")
    }
    return (
        <>
            <button className="btn btn-danger btn-sm" data-toggle="modal" data-target="#cancelModal">Annuler</button>
            <div className="modal fade" id="cancelModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Attention</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Etes-vous sûr(e) de vouloir annuler ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Non</button>
                            <button onClick={handleSubmit} type="button" className="btn btn-info" data-dismiss="modal">Oui</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

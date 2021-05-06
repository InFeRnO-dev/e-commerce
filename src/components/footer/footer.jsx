import React from 'react'
import FooterButtonSM from './footerButtonSM'
import FooterLink from './footerLink'
import FormNewsletter from './formNewsletter'

export default function Footer() {
    const socialMedia = [
        {url: "#!", icon: "bi bi-facebook"},
        {url: "#!", icon: "bi bi-twitter"},
        {url: "#!", icon: "bi bi-google"},
        {url: "#!", icon: "bi bi-instagram"},
        {url: "#!", icon: "bi bi-linkedin"},
        {url: "#!", icon: "bi bi-github"},
    ]
    const linkCategoryLaptop = [
        {url: "/laptop/office/", nom: "PC Bureautique"},
        {url: "/laptop/gamer", nom: "PC Gamer"},
        {url: "/laptop/2in1", nom: "PC 2 in 1"},
    ]
    const linkCategoryDesktop = [
        {url: "/desktop/office", nom: "PC Bureautique"},
        {url: "/desktop/gamer", nom: "PC Gamer"},
        {url: "/desktop/kit", nom: "PC en Kit"},
    ]
    const linkCategoryAccessories = [
        {url: "/accessories/keyboardmouse", nom: "Clavier + Souris"},
        {url: "/accessories/cableadapter", nom: "Câble et adaptateur"},
        {url: "/accessories/cover", nom: "Housse"},
    ]
    return (
        <footer className="bg-dark text-center mt-5">
            <div className="container p-4 pb-0">
                <div className="row">
                    <div className="col">
                        <p className="pt-2" style={{ color: 'white' }}>
                            <strong>Réseaux Sociaux</strong>
                        </p>
                        {socialMedia.map((linkData, index) => <FooterButtonSM key={index} url={linkData.url} icon={linkData.icon} />)}
                    </div>
                    <div className="col">
                        <FormNewsletter/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <ul className="list-unstyled mb-0">
                        <li><a href="/" className="text-white">ACCUEIL</a></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5 className="text-uppercase" style={{color: 'white'}}>Ordinateur Portable</h5>
                        <ul className="list-unstyled mb-0">
                            {linkCategoryLaptop.map((linkData, index) => <FooterLink key={index} url={linkData.url} nom={linkData.nom} />)}
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5 className="text-uppercase" style={{color: 'white'}}>Ordinateur de Bureau</h5>
                        <ul className="list-unstyled mb-0">
                        {linkCategoryDesktop.map((linkData, index) => <FooterLink key={index} url={linkData.url} nom={linkData.nom} />)}
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5 className="text-uppercase" style={{color: 'white'}}>Accessoires</h5>
                        <ul className="list-unstyled mb-0">
                            {linkCategoryAccessories.map((linkData, index) => <FooterLink key={index} url={linkData.url} nom={linkData.nom} />)}
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled mb-0">
                            <li><a href="/about" className="text-white">A PROPOS</a></li>
                            <li><a href="/contact" className="text-white mt-5">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2021 CompShop: Tous droits réservés
            </div>
        </footer>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/home/card'
import Carousel from '../components/home/carousel'

export default function Home() {
    const cards = [
        {nom: "Ordinateur Portable", link: "/laptop", src: "https://images.unsplash.com/photo-1596450580013-4ad354fde0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"},
        {nom: "Ordinateur de Bureau", link: "/desktop", src: "https://www.topachat.com/boutique/img/in/in2000/in20006779/in2000677902.jpg"},
        {nom: "Accessoires", link:"/accessories", src: "https://www.topachat.com/boutique/img/in/in1011/in10113190/in1011319002.jpg"},

    ]
    return (
        <>
        <Carousel />
            <div className="container">
                <div className="row">
                    <div className="col">
                        
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h5>Nos produits phares</h5>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    {cards.map((linkData, index) => <Card key={index} nom={linkData.nom} src={linkData.src} link={linkData.link}/>)}
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <h5>Présentation de l'entreprise</h5>
                    </div>
                </div>
                <div className="row mt-3 offset-1">
                    <div className="col-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit eros. Integer at pretium mi, eu aliquet elit. Aliquam laoreet metus aliquet, maximus dui in, tincidunt sapien. Sed id justo ac tellus pharetra tempor id at enim. Fusce nec interdum justo. Integer placerat risus non risus pharetra tempor. Nulla at tellus sit amet ex pretium ullamcorper.</p>
                    </div>
                    <div className="col-4">
                        <img src="https://www.pourlentreprise.com/wp-content/uploads/2018/06/instalacoes1-750x340.jpg"/>
                    </div>
                </div>
            </div>
        </>
    )
}

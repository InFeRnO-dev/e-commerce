import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Badge from 'react-bootstrap/Badge'

toast.configure()

export async function addProductLS(produit) {
    let ifExist = false
    console.log(produit)
    let getProduits = localStorage.getItem(("cart"))
    console.log(getProduits)
    if(getProduits !== null)
    {
        getProduits = JSON.parse(getProduits)

        {getProduits.map((getproduit) => {
            if(getproduit.id === produit.id) {
                getproduit.quantite += produit.quantite
                ifExist = true
            }else {
                ifExist = false
            }
        })}
        if(ifExist === true) {
            localStorage.setItem("cart", JSON.stringify(getProduits))
        }else {
            getProduits.push(produit)
            localStorage.setItem("cart", JSON.stringify(getProduits))
        } 
    }
    else{
        localStorage.setItem("cart", JSON.stringify([produit]))
    }
    
}

export function moinsQuantityLS(id){
    let idTab = null
    let getProduits = localStorage.getItem(("cart"))
    getProduits = JSON.parse(getProduits)
    {getProduits.map((getproduit, index) => {
        if(getproduit.id === id) {
            console.log("quantity -1")
            getproduit.quantite--
            if(getproduit.quantite <= 0){
                idTab = index
            }
        }
    })}
    if(idTab !== null) {
        getProduits.splice(idTab, 1)
    }
    localStorage.setItem("cart", JSON.stringify(getProduits))
    

}
export function plusQuantityLS(id){
    let getProduits = localStorage.getItem("cart")
    getProduits = JSON.parse(getProduits)
    {getProduits.map((getproduit) => {
        if(getproduit.id === id) {
            console.log("quantity +1")
            getproduit.quantite++
        }
    })}
    localStorage.setItem("cart", JSON.stringify(getProduits))
}

export function refreshPage() {
    window.location.reload(false);
  }

export function majPill() {
    let quantityTotal = 0
    const products = JSON.parse(localStorage.getItem("cart"))
    products.map((product) => {
        quantityTotal += product.quantite
    })
    return quantityTotal
  }

export function addPill() {
    return <Badge pill variant="info">{majPill()}</Badge>
}

export function setlivraisonLS() {
    if(localStorage.getItem("livraison") === null || localStorage.getItem("livraison") === undefined) {
        localStorage.setItem("livraison", JSON.stringify({mode: "pointrelais", prix: 0.0}))
    }
}
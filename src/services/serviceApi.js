import axios from "axios"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const BASE_URL = 'http://localhost:1337/'

export async function loginApi() {
    
}

export async function newsletterApi(email) {
    toast.configure()
    const url = BASE_URL + 'newsletters'
    const result = await axios.post(url, email).then((response) => {
        toast.success('Votre adresse a bien été enregistrée', {autoClose:10000})
    }).catch(() => {
        toast.warning('Votre adresse a déjà été enregistrée précédement', {autoClose:10000})
    })
    return result
}

export async function contactApi(contact) {
    toast.configure()
    console.log(contact)
    const url = BASE_URL + 'contacts'
    await axios.post(url, contact).then(() => {
        toast.success('Votre message a bien été transmit, un retour vous sera fait dans les plus brefs délais', {autoClose:10000})
    }).catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
    })
}

export async function getAllProducts() {
    const url = BASE_URL + 'products'
    const result = await axios.get(url)

    return result
}

export async function getSubCategoryById(where) {
    const url = BASE_URL + "subcategory" + where
    const result = await axios.get(url)
    return result
}

export async function getProductsByCategory(where) {
    
    const url = BASE_URL + "products" + where
    const result = await axios.get(url)
    return result

}
export async function getProductById(id) {
    const url = BASE_URL + 'product/' + id
    const result = await axios.get(url)

    return result
}

export async function addUser(user) {
    const url = BASE_URL + 'user'
    const result = await axios.post(url, user)
    return result
}
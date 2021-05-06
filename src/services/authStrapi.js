import axios from 'axios';

export async function authStrapi() {
    await axios
    .post('http://localhost:1337/auth/local', {
        identifier: "public",
        password: "Public13",
    })
    .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        return response.data.jwt
    })
    .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
    });
}

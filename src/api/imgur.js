import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'REPLACE WITH YOUR OWN';
const ROOT_URL = 'https://api.imgur.com';

export default{
    login(){
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
    },

    fetchImages(token){
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    upload(images, token){
        //Turns images into an array
        //and then loops through each item in 
        //array, named "image"
        const promises = Array.from(images).map( image => {
            const formData = new FormData();
            //Attaches actual file to request 
            //we will make. 
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        });

        return Promise.all(promises);

    }

}
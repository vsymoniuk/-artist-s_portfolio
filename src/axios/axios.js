import axios from "axios";

export default axios.create({
    baseURL: 'https://k8art-91cf9.firebaseio.com/'
})
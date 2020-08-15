import axios from 'axios';

export default class geniusAPIHandler{
    constructor(){
        this.clientAccessToken = 'LMQTsyzU3HrvG1rjx6N46jylIgDOqCVkt0BHU8Nfh3TjHigxVSa0cmV9vKFcckSD';
        this.redirectURLAddress = 'http://192.168.43.118:8080';
        this.geniusAPIBaseURL = 'https://api.genius.com';
    }

    async geniusGetSong(id){
        let getSongURL = `${this.geniusAPIBaseURL}/songs/${id}?access_token=${this.clientAccessToken}`;
        console.log(getSongURL);
        const song = await axios.get(getSongURL,{
            headers: {
                'Accept' : 'application/json',
                'Access-Control-Allow-Origin' : `${this.redirectURLAddress}`,
                'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers' : 'Content-Type, Authorization'
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

        return song;
    }
}
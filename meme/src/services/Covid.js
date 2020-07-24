import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL
const rapidApiHost = process.env.REACT_APP_RAPID_API_HOST
const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY

export async function getStatistics() {
    try {
        const response = axios({
            url: `${baseUrl}`,
            method: 'GET',
            headers:{
                'x-rapidapi-host': `${rapidApiHost}`,
                'x-rapidapi-key': `${rapidApiKey}`,
                'useQueryString': 'true'
            }
        })
        return response
    } catch (e) {
        console.log(e)        
    }
}

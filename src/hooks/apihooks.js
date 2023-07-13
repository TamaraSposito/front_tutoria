import api from '../services/api'
export const useApi = async (route, type, body) =>{


    try {
        switch(type) {
            case 'get':
                const responseGet = await api.get( route, body)
                return {
                    data: responseGet.data,
                    error: null
                };
            case 'post':
                const responsePost = await api.post( route, body)
                return {
                    data: responsePost.data,
                    error: null
                }
            case 'put':
                const responsePut = await api.put(`${route}/${body.id}`, body)
                return {
                    data: responsePut.data,
                    error: null
                }
            case 'delete':
            await api.delete(route)
            default:
                console.log('error')
        }
    } catch(error) {
        return {
        data: null,
         error: error.response.data.message ? error.response.data.message : error.message
        }
    }
}
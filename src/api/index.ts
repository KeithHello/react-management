import axios from 'axios'

// create axios service
const service = axios.create({
    baseURL: '/', // TODO: change to your own url
    timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        return config
    }, error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data

        // if the custom code is not 200, it is judged as an error.
        // if (res.code !== 200) {
        //     console.log('Error: ' + res.message || 'Error')

        //     return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        //     return res
        // }

        return res;
    }, error => {
        console.log('Error: ' + error.message)
        return Promise.reject(error)
    }
)

export default service
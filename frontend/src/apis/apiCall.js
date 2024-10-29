import axios from "axios"

export const axiosInstance = axios.create({})

export const apiCall = (method,url,body,header,params)=>{

    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data:body ? body : null,
        headers:header ? header : null,
        params:params ? params : null,
    })
}
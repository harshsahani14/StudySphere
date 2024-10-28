import axios from "axios"

export const axiosInstance = axios.create({})

export const apiCall = (method,url,body,header,params)=>{

    return axiosInstance({
        method:method,
        url:url,
        data:body,
        headers:header,
        params:params
    })
}
const BASE_URL = "http://localhost:4000/v1"

export const categoryApiURL = {
    getAll: `${BASE_URL}/getAllCategories`
}

export const authApiUrl = {
    sendOtp:`${BASE_URL}/sendOtp`,
    resetPasswordStep1:`${BASE_URL}/resetPasswordStep1`,
    resetPasswordStep2:`${BASE_URL}/resetPasswordStep2`,
    signup : `${BASE_URL}/signup`,
    login : `${BASE_URL}/login`
}

export const contactUsApiURL = {
    contactUs: `${BASE_URL}/contactUs`
}

export const profileApiURL = {
    getUserDetails: `${BASE_URL}/getUserDetails`,
    getEnrolledCourses : `${BASE_URL}/getEnrolledCourses`,
    updateDisplayPicture : `${BASE_URL}/updateDisplayPicture`,
    deleteUserAccount : `${BASE_URL}/deleteAccount`
}


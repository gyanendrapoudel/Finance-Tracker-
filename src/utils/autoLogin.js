// getting access token from local storage

import { getUser } from "./axios"

const getAccessToken = ()=>{
    return localStorage.getItem("accessJWT")
}

// calling api with access token, passing it through headers

export const loggedUser = async()=>{
    const accessToken = getAccessToken()
    if(accessToken){
             const res = await getUser()
             return res
    }
   
  
}
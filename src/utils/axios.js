import axios from "axios";


const apiEP = 'http://localhost:8000/api/v1'

const getAccessToken = ()=>{
    return localStorage.getItem("accessJWT")
}

const userAPICall= async({method,user,url,headers})=> {
    try {
        const response = await axios({
            method,
            url,
            data:user,
            headers

        })
        return response.data
    } catch (error) {
        console.log(error)
        return {
            status:"error",
            message:error.message
        }
    }
}

export const  createUser = async (user)=>{
 const postAPIEP = apiEP+"/users"
 const obj = {
    url:postAPIEP,
    method:"post",
    user:user,
 }
 return userAPICall(obj) 
}

export const loginUser = async (user)=>{
    const getAPIEP = apiEP + '/users/login'
    const obj = {
        url:getAPIEP,
        user:user,
        method:'post'
    }
    return userAPICall(obj)
}

export const getUser = async ()=>{
    const getUserAPIEP = apiEP+'/users'
    const obj = {
        url:getUserAPIEP,
        method:"get",
        headers:{
            Authorization:getAccessToken()
        }
    }
    return userAPICall(obj)
}

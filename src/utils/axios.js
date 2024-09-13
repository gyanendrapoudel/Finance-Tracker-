import axios from "axios";

const apiEP = 'http://localhost:8000/api/v1'

const userAPICall= async(method,obj,url)=> {
    try {
        const response = await axios({
            method,
            url,
            data:obj
        })
        return response.data
    } catch (error) {
        console.log(error.message)
        return {
            status:"error",
            message:error.message
        }
    }
}

export const  createUser = async (user)=>{
 const postAPIEP = apiEP+"/users"
 return userAPICall('post', user, postAPIEP) 
}
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
const signToken = async (payload) => {
    var token = jwt.sign(payload, "shhhhh", { expiresIn: '1d' });
    return token;
}
const storeToken = (token) => {
    Cookies.set('token', token)
}

const verifyToken = async() => {
    const token = Cookies.get('token');
    if(!token){
        return false
    }

    let decoded = jwt.verify(token, 'shhhhh', (err, data)=>{
        if(err){
            return false;
        }else{
            return data;
        }
        
    });
    return decoded;
}

const deleteToken = () => {
    Cookies.remove('token')
}
export {
    signToken,
    storeToken,
    verifyToken,
    deleteToken
}
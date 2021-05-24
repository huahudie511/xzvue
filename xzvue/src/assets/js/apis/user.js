import axios from "axios"
//用户登录
function Login(user){

    return new Promise(function(resolve,reject){
        axios.post("/user/login",user).then(result=>{
            resolve(result.data)
        })
    })
}
//用户登出
function Logout(){
    return new Promise(function(resolve,reject){
        axios.get("/user/logout",user).then(result=>{
            resolve(result.data)
        })
    })
}

function getUserSeesionData(){
    return new Promise(function(resolve,reject){
        axios.post("/user/seeiondata",user).then(result=>{
            resolve(result.data)
        })
    })
}
export{Login,Logout,getUserSeesionData}
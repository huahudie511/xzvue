import axios from "axios"

function getDetails(lid){
    return new Promise(function(resolve,reject){
        axios.get("/product/detail",{params:{lid}}).then(result=>{
            resolve(res.data);
        });
    });
}
function getList(obj){
    var paramsObj={
        kw:obj.kw,
        pno:obj.pno,
        pageSize:obj.pageSize
    }
    return new Promise(function(resolve,reject){
        axios.get("/product/detail",{params:{kw:obj.kw,pno:obj.pno,pageSize}}).then(result=>{
            resolve(res.data);
        });
    });
}
//
export {getDetails,getList}
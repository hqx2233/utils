import axios from 'axios';
import qs from 'qs';
  export const axi=(method='get')=>(url,data)=> new Promise(function(resolve,reject){
            if(method==='get'){
                axios({
                    method:'get',
                    url:url,
                    params:data
                }).then(res=>{
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            }else if(method==='post'){
                let postData=qs.stringify(data);
                axios({
                    method:'post',
                    url:url,
                    data:postData
                }).then(res=>{
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
            }

           
        })

 export const post=axi('post');
 export const get=axi('get');
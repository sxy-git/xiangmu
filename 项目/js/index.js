const baseURL=`http://shequ.lanlianhua.work/api/v1`;
const imgUrl=`http://shequ.lanlianhua.work`
//token  发送参数时需要token就会自动传入
const AUTH_TOKEN = localStorage.getItem('token')
axios.defaults.headers.common['token'] = AUTH_TOKEN;

const get=(url,params)=>{
    return new Promise((resolve,reject)=>{
        axios.get(baseURL+url,{params,}).then(res=>{    //axios.get(baseURL+url,{params,headers:             
                                                        //{authorization:`Bearer${localStorage.getItem(`token`)}`}}).then(res=>{
            resolve(res.data);
        }).catch(err=>{
            reject(err);
        });
    });
};
const post =(url,data)=>{
    return new Promise((resolve,reject)=>{
        axios.post(baseURL+url,data).then(res=>{   // axios.post(url,{data},{请求头同上}).then
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
const delete1 =(url,data)=>{
    return new Promise((resolve,reject)=>{
        axios.delete(baseURL+url,data).then(res=>{   // axios.post(url,{data},{请求头同上}).then
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}

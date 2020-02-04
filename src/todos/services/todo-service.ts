
export const  fetchData=async <T>(url:string, method:string="GET",param?:T) => {
  return fetch(url,{
    method: method,
    body: JSON.stringify(param),
    headers: {
      'Content-Type':'application/json',
<<<<<<< HEAD
      "Authorization": "Bearer XXXXAPIKEYXXXXX"
=======
      'Accept': 'application/json',
>>>>>>> d9b3535b99a57b2ee467d187c8bae5ba1b7f8a39
    }
  }).then(res=>{ 
        if (res.status >= 200 && res.status < 300) {  
           return Promise.resolve(res)  
        } else {  
          
          return Promise.reject(new Error(res.statusText))  
        }  
      }).then(res=>res.json());  
}
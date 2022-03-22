

import { fetchConToken } from './fetch';

export const startChecking = async(setChecking, setAdmin) => {
    
    const resp = await fetchConToken('auth/renew');
    const body = await resp.json();
    console.log(body)
    if (body.ok){
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        setChecking(false);
        setAdmin({
            uid:body.uid,
            userName:body.userName
        });
      
    }else{
       console.log('Error', body.msg, 'error') ;
        setChecking(false);
    } 
}

import Axios from 'axios'
import Store from '@/Vuex/Store'
Axios.defaults.baseURL="http://www.maodou.com";
Axios.interceptors.request.use((config)=>{
    return config;   
    
},(error)=>{

    return Promise.reject(error);
});
Axios.interceptors.response.use((response)=>{
    return response;
});
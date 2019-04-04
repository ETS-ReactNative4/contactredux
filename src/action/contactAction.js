import  {GET_CONTACTS,DELETE_CONTACTS,ADD_CONTACTS,GET_CONTACT,UPDATE_CONTACTS} from './type';
import Axios from 'axios';


export const getContacts=() => async dispatch =>{
   const res=await Axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({
        type:GET_CONTACTS,
       payload:res.data
   })
}
export const getContact=(id) => async dispatch =>{
    const res=await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     dispatch({
         type:GET_CONTACT,
        payload:res.data
    })
 }
export const deleteContacts=(id)=>async dispatch =>{
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch ({
        type:DELETE_CONTACTS,
        payload:id
    })
}
export const addContacts=(contact)=>async dispatch=>{
    const res=await Axios.post('https://jsonplaceholder.typicode.com/users',contact)
    dispatch ({
        type:ADD_CONTACTS,
        payload:res.data
    })
}
export const updateContacts=(contact)=>async dispatch=>{
    const res=await Axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact)
    dispatch ({
        type:UPDATE_CONTACTS,
        payload:res.data
    })
}



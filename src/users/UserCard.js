import React from 'react'
import Swal from 'sweetalert2';
import { fetchConToken } from '../helpers/fetch';

export const UserCard = ({name, lastName, company, email,id}) => {
    const handleDelete = async(e)=>{
        e.preventDefault();
        console.log(e);
        const resp = await fetchConToken(`users/${id}`, {}, 'DELETE');
        
        const body = await resp.json();
        
        if (body.ok){
            Swal.fire('Success', `usuario ${name} ${lastName}  eliminado`, 'success'); 
        }else{
            Swal.fire('Error', body.msg, 'error');
        }
    }
  return (
    <div className = "card animate__animated animate__bounce">
    <h3>{name} {lastName}</h3> 
    <br />
    <p> <b>Empresa </b>: {company} </p>
    <p> <b> Email </b>: {email}</p>
    <button onClick={handleDelete} className='btn btn-outline btn-danger'>Eliminar ⛔</button>
    
</div>
  )
}

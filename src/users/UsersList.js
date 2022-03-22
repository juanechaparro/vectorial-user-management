import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetchUsers } from '../hooks/useFetchUsers'
import { UserCard } from './UserCard';



export const UsersList = () => {
  const {loading, users} = useFetchUsers();
  const navigate = useNavigate();
  return (
    <>
    <h3 className = 'animate__animated animate__fadeIn'>Lista de usuarios:
     <button onClick={(e)=>{navigate("/create_user")}} className='btn btn-primary ml-20'> Añadir Usuario</button></h3>
     <br />
     <b></b>
    {loading && <p className ='animate__animated animate__flash'>'Cargando...'</p> }
     
         
             <div className = "card-grid">
             {
                users.map((user)=><UserCard key={user.id}
                {...user}/>)
             }
             </div>
           
         
      
     </>
  )
}

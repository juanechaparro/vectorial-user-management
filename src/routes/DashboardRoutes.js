
import { Routes, Route } from "react-router-dom";
import { UsersList } from "../users/UsersList";
import { CreateUserScreen } from "../users/CreateUserScreen";
import { NavBar } from "../ui/NavBar";
export const DashboardRoutes = () => {
    return (
        <>
          <NavBar/>   
          
         <div className = "container">
          
           <Routes>
      
        <Route path="admin_list_active_users" element={<UsersList/>} />
        <Route path="create_user" element={<CreateUserScreen/>} />
        </Routes>
        </div>
        </>
    )
}

import { useState } from "react";
import { AuthContext } from "./auth/authContext";
import { AppRouter } from "./routes/AppRouter";


function App() {
  
const [admin, setAdmin] = useState({});
const [checking, setChecking] = useState(true);



  return (
    <div>
      <AuthContext.Provider value={
                {
                    admin,
                    setAdmin,
                    checking,
                    setChecking
                }
            } >
     <AppRouter/>
     </AuthContext.Provider>
    </div>
  );
}

export default App;

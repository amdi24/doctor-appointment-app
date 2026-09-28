import {createContext,useContext,useMemo,useState,} from "react";
const AuthContext =createContext(null);
function getStoredUser() {
  try {
    return (
      JSON.parse(localStorage.getItem("campuscare-user")) || null);
  } catch {
    return null;
  }
}
export function AuthProvider({children,}) {
  const [user,setUser] = useState(getStoredUser);
  function login(phone,name , email) {
    const nextUser = {
      name:name.trim() ,
      phone:phone.trim(),
      email:email.trim(),
    };
    localStorage.setItem("campuscare-user",
      JSON.stringify(nextUser)
    );
    setUser(nextUser);
  }

  function logout() {
    localStorage.removeItem("campuscare-user");
    setUser(null);
  }
  const value = useMemo(() => ({user,
    loading: false,  login, logout,}),
    [user]
  );
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context =useContext(AuthContext);
  if (!context) {throw new Error(
      "Not found "
    );
  }
  return context;
}

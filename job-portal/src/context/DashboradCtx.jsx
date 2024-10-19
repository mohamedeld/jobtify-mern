import { createContext, useContext, useState } from "react"

const DashboardContext = createContext();

function checkDefaultTheme(){
  const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
  document.body.classList.toggle('dark-theme',isDarkTheme);

  return isDarkTheme
}

const DashboardProvider = ({children}) => { 
  const user = {name:"mohamed"}
  const [showSidebar,setShowSidebar] = useState(false);
  const [isDarkTheme,setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleShowSidebar = ()=>{
    setShowSidebar(prev=> !prev);
  }
  const toggleIsDarkTheme = ()=>{
    const newDarkMode = !isDarkTheme;
    setIsDarkTheme(prev => !prev);
    
    localStorage.setItem('dark-theme',newDarkMode)
  }
  const logoutUser = async ()=>{
    console.log("user log out")
  }
  return (
    <DashboardContext.Provider value={{
      user,
      showSidebar,
      isDarkTheme,
      toggleShowSidebar,
      toggleIsDarkTheme,
      logoutUser
    }}>{children}</DashboardContext.Provider>
  )
}
function useDashboardCtx(){
  const context = useContext(DashboardContext);
  if(context === undefined){
    throw new Error("Dashboard context used outside dashboard provider");
  }else{
    return context;
  }

}
export {DashboardProvider,useDashboardCtx}

import { createContext, useContext } from "react";
import useNav from "../hooks/useNav";


//context
const NavContext = createContext();

//provider
export const NavProvider = ({ children }) => {
    const nav = useNav();
    return (
        <NavContext.Provider value={{ ...nav }}>
            {children}
        </NavContext.Provider>
    );
}

//consumer
export const useNavContext = () => useContext(NavContext);
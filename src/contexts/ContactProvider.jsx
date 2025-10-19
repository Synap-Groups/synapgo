import { createContext, useContext } from "react";
import useContact from "../hooks/useContact";


//context
const ContactContext = createContext();

//provider
export const ContactProvider = ({ children }) => {
    const contact = useContact();
    return (
        <ContactContext.Provider value={{ ...contact }}>
            {children}
        </ContactContext.Provider>
    );
}

//consumer
export const useContactContext = () => useContext(ContactContext);
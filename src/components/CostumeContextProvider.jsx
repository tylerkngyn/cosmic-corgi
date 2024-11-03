import {createContext, useState} from "react";

const CostumeContext = createContext();
export default CostumeContext;

// eslint-disable-next-line react/prop-types
export function CostumeContextProvider({ children }) {
    const [costume, setCostume] = useState("./assets/main-corgi-1.svg"); // ADD IN INITIAL STATE HERE
    return(
        <CostumeContext.Provider value={[costume, setCostume]}>
            {children}
        </CostumeContext.Provider>
    );
}
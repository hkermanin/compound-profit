import { createContext, useState } from "react";

export const MainContext = createContext();

export function MainContextProvider({children}){

    const [result,setResult] = useState({input1:0,input2:0,input3:0});


    return(
        <MainContext.Provider value={{result,setResult}}>
            {children}
        </MainContext.Provider>
    )
}
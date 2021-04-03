import React,{useState,createContext} from 'react';

export const AppContext = createContext();

function Context(props) {
    const [toggleIcon,setToggleIcon] = useState(false);

    const ChangeIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    return (
        <div>
            <AppContext.Provider value={{toggleIcon,ChangeIcon}}>
            {props.children}    
            </AppContext.Provider>
        </div>
    )
}

export default Context;

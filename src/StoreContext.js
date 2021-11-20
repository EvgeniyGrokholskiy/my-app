import {createContext} from "react";

const StoreContext = createContext(null);

export const Provider = (props) => {
    return(
        <StoreContext.Provider value={props.state}>
            {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContext;
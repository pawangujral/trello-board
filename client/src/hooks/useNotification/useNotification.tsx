import React from "react";
import {toastType, toastTypeContext} from "./../../utils/types";
import Toast from "./../../components/toast";
import "./notification.css";

const TOAST_DEFAULT_toasts: toastTypeContext = {
    toasts: [] 
} 

const Ctx = React.createContext(TOAST_DEFAULT_toasts);

export const ToastProvider: React.FC = ({children}) => {
    const [state, setState] = React.useState<toastTypeContext>(TOAST_DEFAULT_toasts);

    React.useEffect(() => {
        const toastTimeOut = setTimeout(() => {
            setState({toasts: []});
        },3000);

        return (() => clearTimeout(toastTimeOut))
    },[state.toasts]);

    const addToast = (toast: toastType) =>  setState({toasts: [...state.toasts, toast]});

    const methods = {
        addToast
    };


    return <Ctx.Provider value={{...state, ...methods}}>
            {children}
            <div className="toast-wrapper">
                {state.toasts.map((item, index) => { 
                    return <Toast message={item.message} variant={item.variant} key={index}/>
                })}
            </div>
        </Ctx.Provider>
}


const useNotification = () => React.useContext(Ctx) as toastTypeContext;

export default useNotification;
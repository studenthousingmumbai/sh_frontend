import { useEffect, useRef } from "react";
import useAuth from "./useAuth";

const withAuth = (props) => { 
    const { isAuth, isAuthenticated, isLoading } = useAuth(); 
    const is_mounted = useRef(false); 

    useEffect(() => {
        if(!is_mounted.current){
            is_mounted.current = true; 
            isAuth(); 
        }
    }, []);

    return { isAuthenticated, isLoading }; 
}

export default withAuth;
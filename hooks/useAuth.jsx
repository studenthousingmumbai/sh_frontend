import { useEffect, useState } from "react";
import { useRouter } from 'next/router'; 
import apis from "../lib/apis";
import useApi from './useApi'; 
import { googleLogout } from '@react-oauth/google';

const useAuth = (props) => { 
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const [loginErrors, setLoginErrors] = useState([]); 
    const [signupErrors, setSignupErrors] = useState([]); 
    const home_route = '/'; 
    const { signup: signupUser, signin, isAuthenticated: isUserAuthenticated, googleSignin } = useApi();
    const auth_routes = ['/booking', '/profile', '/order-history']; 

    const isAuth = async () => { 
        setIsLoading(true); 
        const token = localStorage.getItem('login_token');
        
        // if the user has logged out send them to the signin page (only if the page is not already signin or signup)
        if(!token){
            console.log("Pathname: ", router.pathname);

            if(router.pathname !== '/signin' && router.pathname !== '/signup' && (auth_routes.includes(router.pathname) || router.pathname.includes('/booking'))){ 
                router.push('/signin'); 
            }
        }
        // check if the token in valid 
        else { 
            const auth_response = await isUserAuthenticated(token);
            
            // if its invalid send then to the signin page (only if the page is not already signin or signup)
            if(!auth_response) { 
                setIsAuthenticated(false);
                
                if(router.pathname !== '/signin' && router.pathname !== '/signup' && auth_routes.includes(router.pathname)){ 
                    router.push('/signin'); 
                }
            } 
            // set the isAuthenticated state and send the user to the dashboard (only if the current page is signin or signup)
            else { 
                const { currentUser } = auth_response;

                // setUser({ ...currentUser }); 
                useAuth.user = currentUser; 
                setIsAuthenticated(true);

                if(router.pathname === '/signin' || router.pathname === '/signup'){ 
                    router.push(home_route); 
                }
            }
        }

        setIsLoading(false); 
    }

    const googleLogin = async (googleData) => { 
        setIsLoading(true); 

        const login_response = await googleSignin(googleData); 
        
        if(login_response){ 
            const { access_token, user: user_data } = login_response;
            
            localStorage.setItem('login_token', access_token); 
            localStorage.setItem('user', JSON.stringify(user_data)); 
            useAuth.user = user_data;
            // setUser({ ...user }); 
            setIsAuthenticated(true); 
            router.push(home_route); 
        }

        setIsLoading(false); 
    }

    const getUser = () => { 
        if (typeof window !== 'undefined') {
            const user = JSON.parse(localStorage.getItem("user"));
            return user && user || {};
        }
    }

    const login = async (email, password) => { 
        setIsLoading(true); 

        const login_response = await signin(email, password); 
        console.log("Login response: ", login_response);

        if(login_response){ 
            const { access_token, user, errors } = login_response;
            
            if(access_token && user) { 
                localStorage.setItem('login_token', access_token); 
                useAuth.user = user; 
                setIsAuthenticated(true); 
                router.push(home_route); 
            }
            else{ 
                // set login errors here 
                setLoginErrors(errors);
                setIsAuthenticated(false); 
            }
        }

        setIsLoading(false); 
    }

    const signup = async (firstname, lastname, email, password, phoneNumber) => { 
        setIsLoading(true); 

        const login_response = await signupUser(firstname, lastname, email, password, phoneNumber); 
        
        if(login_response){ 
            const { access_token, user, errors } = login_response;

            if(access_token && user) { 
                // localStorage.setItem('login_token', access_token); 
                // useAuth.user = user; 
                // setIsAuthenticated(true); 
                // router.push(home_route); 
                return true; 
            }
            else{ 
                // set login errors here 
                setSignupErrors(errors);
                setIsAuthenticated(false); 
                return false;
            }
        }

        setIsLoading(false); 
    }

    const logout = async () => { 
        try{ 
            localStorage.removeItem("login_token"); 
            setIsAuthenticated(false); 
            googleLogout();
            await router.push('/signin');
        }
        catch(err) { 
            console.log("error occured : ", err);
        }
    }

    return {  
        isAuthenticated, 
        isLoading, 
        loginErrors,
        signupErrors,
        isAuth,
        googleLogin, 
        login,
        signup,
        logout, 
        getUser
    }
};

useAuth.user = {}; 

export default useAuth; 
import axios from 'axios'; 

const base_url = 'http://localhost:8000';

const apis = { 
    apiHealth: async () => { 
        try{    
            const response = await axios.get(base_url + '/health'); 
            return response.data; 
        } 
        catch(err) { 
            return err.response.data;
        }
    },

    signin: async (email, password) => { 
        try{ 
            const response = await axios(base_url + `/user/login`, { 
                method: "POST", 
                data: { email, password }
            }); 

            return response.data; 
        }
        catch(err){ 
            return err.response.data;
        }
    }, 

    signup: async (firstname, lastname, email, password) => { 
        try{ 
            const response = await axios(base_url + `/user/signup`, { 
                method: "POST", 
                data: { 
                    firstname, 
                    lastname, 
                    email, 
                    password
                }
            }); 

            return response.data; 
        }
        catch(err){ 
            return err.response.data;
        }
    },

    googleSignin: async (googleData) => { 
        try{ 
            const response = await axios(base_url + `/user/google-signin`, { 
                method: "POST", 
                data: { token: googleData.credential }
            }); 
            
            return response.data; 
        }
        catch(err){
            return err.response.data;
        }
    }, 

    isAuthenticated: async (token) => { 
        try{ 
            // send the token to backend and verify validity 
            const response = await axios(base_url + '/user/current-user', { 
                method: "GET", 
                headers: { 
                    'authorization': `bearer ${token}`
                }
            });

            return response.data; 
        }
        catch(err){
            return err.response.data;
        }
    }
}

export default apis; 
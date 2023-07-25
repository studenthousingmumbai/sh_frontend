import axios from 'axios';

export default function useApi() {
    const base_url = process.env.NEXT_PUBLIC_API_BASE_URL 
    const admin_key = process.env.NEXT_PUBLIC_ADMIN_KEY

    const isAuthenticated = async (token) => { 
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

    const signup = async (firstname, lastname, email, password, phoneNumber) => { 
        try{ 
            const response = await axios(base_url + '/user/signup', { 
                method: "POST", 
                data: { firstname, lastname, email, password, phoneNumber }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const adminSignup = async (firstname, lastname, email, password, role) => { 
        try{ 
            const response = await axios(base_url + '/user/signup', { 
                method: "POST", 
                headers: { 
                    "admin-api-key": admin_key
                },
                data: { firstname, lastname, email, password, role }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const getUser = async (user_id) => { 
        try{ 
            const response = await axios.get(base_url + `/user/${user_id}`); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const updateUser = async (data) => { 
        try{ 
            const response = await axios(base_url + `/user`, { 
                method: "PATCH", 
                data
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const signin = async (email, password) => { 
        try{ 
            const response = await axios(base_url + '/user/login ', { 
                method: "POST", 
                data: { email, password }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const googleSignin = async (googleData) => { 
        try{ 
            const response = await axios(base_url + '/user/google-signin', { 
                method: "POST", 
                data: { token: googleData.credential  }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }
    
    const getUsers = async (data) => { 
        try{ 
            const response = await axios(base_url + '/user/all', { 
                method: "POST", 
                data
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const createListing = async (formData) => { 
        try{ 
            const response = await axios.post(base_url + "/listing", formData); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const getListing = async (listing_id) => { 
        try{ 
            const response = await axios(base_url + `/listing/${listing_id}`, { method: "GET" }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        } 
    }

    const getAllListings = async (data) => { 
        try{ 
            const response = await axios(base_url + '/listing/all', { 
                method: "POST", 
                data
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        } 
    }

    const updateListing = async (formData) => { 
        try{ 
            const response = await axios.patch(base_url + '/listing', formData); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const addFloor = async (listing_id, floor_number) => { 
         try{ 
            const response = await axios(base_url + '/listing/create-floor', { 
                method: "POST", 
                data: { id: listing_id, floor_number }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const addAppartment = async (listing_id, floor_number, appartment_number) => { 
         try{ 
            const response = await axios(base_url + '/listing/create-appartment', { 
                method: "POST", 
                data: { 
                    listing_id, 
                    floor_number,
                    appartment_number
                }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const updateAppartment = async (formData) => { 
         try{ 
            const response = await axios.patch(base_url + '/listing/update-appartment', formData); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const availableBeds = async (listing_id) => { 
         try{ 
            const response = await axios(base_url + '/stats/available-beds', { 
                method: "POST", 
                data: { listing_id }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const studentsInAppartment = async (listing_id, appartment_id) => { 
         try{ 
            const response = await axios(base_url + '/stats/students-in-appartment', { 
                method: "POST", 
                data: { listing_id, appartment_id }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const studentsOnFloor = async (listing_id) => { 
         try{ 
            const response = await axios(base_url + '/stats/students-on-floor', { 
                method: "POST", 
                data: { listing_id }
            }); 

            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const getBeds = async (appartment_id) => { 
        try{ 
            const response = await axios.get(base_url + `/listing/get-beds/${appartment_id}`); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const getBed = async (bed_id) => { 
        try{ 
            const response = await axios.get(base_url + `/listing/beds/${bed_id}`); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const createBed = async (data) => {
        try{ 
            const response = await axios(base_url + `/listing/beds/create`, { 
                method: "POST", 
                data
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const updateBed = async (bed_id, data) => {
        try{ 
            const response = await axios(base_url + `/listing/beds/${bed_id}`, { 
                method: "PATCH", 
                data
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const deleteBed = async  (bed_id) => {
        try{ 
            const response = await axios.delete(base_url + `/listing/beds/${bed_id}`); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const createOrder = async (data) => { 
        try{ 
            const response = await axios(base_url + `/order`, { 
                method: "POST", 
                data 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const getOrders = async (data) => { 
        try{ 
            const response = await axios(base_url + `/order/all`, { 
                method: "POST", 
                data 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const createPaymentSession = async (data) => { 
        try{ 
            const response = await axios(base_url + `/order/create-session`, { 
                method: "POST", 
                data 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const verifyAccount = async (verification_code) => { 
        try{ 
            const response = await axios(base_url + `/user/verify/${verification_code}`, { 
                method: "GET", 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const studentsByListing = async (data) => { 
        try{ 
            const response = await axios(base_url + `/stats/students-by-listing`, { 
                method: "POST",
                data 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const forgotPassword = async (email) => { 
        try{ 
            const response = await axios(base_url + `/user/forgot-password`, { 
                method: "POST",
                data: { email } 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    } 

    const verifyResetCode = async (reset_code) => { 
        try{ 
            const response = await axios(base_url + `/user/verify-reset-code`, { 
                method: "POST",
                data: { reset_code } 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const resetPassword = async (password, reset_code) => { 
        try{ 
            const response = await axios(base_url + `/user/reset-password`, { 
                method: "POST",
                data: { password, reset_code } 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const contactUs = async ({ name, email, phone, message }) => { 
        try{ 
            const response = await axios(base_url + `/user/contact-us`, { 
                method: "POST",
                data: { name, email, phone, message  } 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    const referAndEarn = async ({ name, contact, housingProperty, referralName, referralContact, referralHousingProperty }) => { 
        try{ 
            const response = await axios(base_url + `/user/refer-and-earn`, { 
                method: "POST",
                data: { name, contact, housingProperty, referralName, referralContact, referralHousingProperty  } 
            }); 
            return response.data; 
        }
        catch(err){ 
            console.log(err); 
            return err.response.data; 
        }
    }

    return { 
        addAppartment, 
        addFloor,
        adminSignup,
        availableBeds, 
        createBed, 
        createListing, 
        deleteBed, 
        getAllListings, 
        getBed, 
        getBeds, 
        getListing, 
        getUser, 
        getUsers, 
        googleSignin, 
        isAuthenticated, 
        signin, 
        signup, 
        studentsInAppartment, 
        studentsOnFloor, 
        updateAppartment, 
        updateBed, 
        updateListing, 
        updateUser, 
        createOrder, 
        getOrders, 
        createPaymentSession,
        verifyAccount, 
        studentsByListing,
        forgotPassword,
        verifyResetCode,
        resetPassword,
        contactUs,
        referAndEarn
    }
}
import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import useApi from '../hooks/useApi';

export default function Example() {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const { locations } = useApi();


    return (
        <Layout> 
           
        </Layout>
    )
}

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import Head from "next/head";
import Layout from '../components/Layout'
import Listing from '../components/Listings/Listing'; 
import useApi from '../hooks/useApi';
import Search from '../components/common/Search';
import apis from '../lib/apis';

// const listings = [ 
//     {
//         id: 1, 
//         name: 'Ganga Nivas', 
//         description: 'Home away from home', 
//         price: 20000, 
//         images: ['https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no'], 
//         amenities: ['Air conditioning', 'Attached Washroom', 'Spacious Cubboards', 'Spacious Cubboards', 'Spacious Cubboards'], 
//         address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
//     }, 
//     { 
//         id: 2, 
//         name: 'Ganga Nivas', 
//         description: 'Home away from home', 
//         price: 20000, 
//         images: ['https://imganuncios.mitula.net/medium/2_bhk_apartment_in_andheri_west_for_rent_mumbai_the_reference_number_is_10493020_3370002667829082565.jpg'], 
//         amenities: ['Air conditioning', 'Attached Washroom', 'Spacious Cubboards'], 
//         address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
//     }, 
//     { 
//         id: 3, 
//         name: 'Ganga Nivas', 
//         description: 'Home away from home', 
//         price: 20000, 
//         images: ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGRgYGBwYGBgaGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQkISE0NDQ0NDQxNDQ0NDE0MTQ0NDQ0NDQ0NDQ0NDQ0MTQxNDQ0NDQ0NDQ0NDQ0NDExNDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAD4QAAIBAgQDBQUGBAUFAQAAAAECAAMRBBIhMQVBUSJhcYGRE6GxwdEGFDJCUvAjYnLhU4KSsvEVJKLC0rP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQACAgICAgMBAQAAAAAAAAAAAQIREiEDMUFREzJhIvD/2gAMAwEAAhEDEQA/ALM0L+HKDaj7o+BfT3zmTp11nlHcVT0IB6Ut3pchF6lOAFUUnhEdenAukYheSVpzJPLSlIKCq0MjxQGTVpadiLGnUjtGrKqk8bQykxF1hsTaWdHGTNI8ZSvHYqNKuNgqmL1lKMTIviY7FRZ1cVK+tXirYiLtUY3Olh3xNjQd6kEXgDUkc8kYxmklMVDyYeTQxxTJKYmKkl7SKgHLzxniTVYJq0VBY1VqxKo95EuSZNE1jGciRqnTnqU4yiQEeJTjFOlJ00j2HpjnFYAPu86X1MCw0E6LInIxKtyEJfp5xdTy5woa3jJNKJsOUC6/3hbyLD+8AE3SCZI2ywbLAYkyQbJG2WCZYCFSk9RdYUrPaa6xoQejTvLClREXw6SwVJdiOGFnhoWhaV+sPaPIKEGQwT3jzrF3EdioScwTvp5xiosCchFs1j0ymFhQuXnAwYHdCoBCwo9WFVZ6iQ6LFkOiKU4ZMPJosOqxZBQucLFvZWuO+WbIYqE38T8YrASRO1Gkp6yVCndo5RoxgBRIdVtGPurWvbTrBiiSdfSICVK7bbS1wlKV6OFNgLn3DxMssBUzQBlolPQToVGFp00wj7OfJnzZffJg85BZIHnMDrCCe/syAMkD6wA8Ig2WGkTABZ1gLRtxAuIIBcrJ0l1nMJOiNYxDdBJf18AVRWtuJTYebjFKDRN/0g+6axjkn+GU5U0ZijShnpxV+LU0Jz5rDQmwt6kwT/aPDn8/vT/6iUJPpFOSDVFidUSDcbonZven/wBQFTitL9XvX6zRcU/RLnH2DrLcxdqYgMdWpuQc5HLQr9Yo+T/EP+ofWaLhkT8iHsgk1w9/+ZTPUT/F/wDJZ6AP1v7pnLjaKUy+opY/3vG1EpMHiQmjFz/l19bx9eIp/N6f3mTiy0y0prGqaSppcUT+b0H1jtDi9P8Am9B9ZNMZZjDytRNPX4yxo8WptsHJ7kv8IlT/AAjwEAPcBSux8DL3hODB1YX7uUrOGLq3hNJw8dmacauSRnyOog+K2CXPhYdZnqdbMSLWtLzjx7AA3zfIzMYN9X8bR8q/psXH9SdSpZ216fASx4W+/j8pRYhru3iP9olhwur2b9SZm41s0NOtWdKr7xOiIwRkVa8kG5wIaSDSTYMGks3rAB57mgAbNPM0GWkS0AJu0E5njPIM8AZ4xk6J1gC0LQOsBDqPLIcSJUgncAeQ5SpvBGpNYqyGJcYqdhu8i/kYrwbhrVEJVSfxHQdL/Q/sSfFW7B8ZtPsFXQYVACucu+a1rjtkjN00y28uhnocH8xbo5ObbooOAcED18jjTKWbqNvmZqOK8FT2LHIudSpQgb2IVQeu+vkY1gbHF1bW7C5bbWutIj4N6Sy4h+D/ADp/+iTeU3ar8MVFU7MNxvAI1JCiAZcO72tsxr0sw06XcDu0l7hfs/h8w/hqyOoYIwBUNzt3ZXHkOt4TFYS9Womlmw75dds7Lp6gn3yPD+JU1wlF3ZVKiy33JS6lR3lb+Gbvg22lX+sSSvZ8vr4ENVdUA0ZiB2QMoY6XJ6W2nuMYio9jz67WAjVWqVd2Q6uSjaC+Rr3FuV9vdKvH1+2/9R+MOWKtFQlpjmGqMVqEsdFA3PNgInVqd59Z7h37D9+Qe8mI1WnNirZtlpDVGppufU/WWFWtanTtcElzcE3toNTfXaUlJ5YvqiDop5kbkn5RYK0PLTHOHcSqI65XYXIFszW169Zt72Xynz/AJeomg/ENbnum6qNpOfnjTRtxO0P8Oewbyl1gseqhgb78pm8G/ZP9UJSxNie+YxbjK0W0mqZa8dxWawUXyte17X0I+cosMCM19CzE2vewnmN4iqkhidBc6Ei3lBnELlzZhl3vytG232Cil0dVpsWJV7X30B5AfKM4YZFC32laeJJcC510vlIHqY4rwd+Rj3tp0S9pOk0MqA09DQWae5pBQUNJZoHNOzQAKXnheCLzwtAVk2aDZpEtIM0AJFobDnWKFobDtrAB8mKO0PmlfXxCr+JgPEgTo40ZyFOMPZPOO/YzFezC1T+DOVfS9gxsH16EgG1tCOplJxnGoyZVa5O3Q275pPsPSQYV2qMuQB86ljcKM2mXlp/ut+YT0eHSaZx8/ho2vBSPa4l/1VFUHuRBsef4t/OO8SqAJfo6HptUW/w938syX2W4n7NXpHt1A5P4wRYqtiX1B2PpL7H1y1CobWsAR2lbbKdPdv3fzS5ReSZkpaoZNT/uz3UB76h+Y9e6ZT2dELiaVVmBpOz0yGYCzrmTs7cgdtjvtNEH/wC8qbaUE7xq9QfLbnqOkxP22xJp4ksoH8SnlYZgbkaBmt/l8bA7SoLdClIygxBLp2t3HjqRz/fvnlZrs/8AU3+4xbD0x7RNTfOvxki+56k/GTN3IqHQ2htTbvZfcCZXVGjSv/D/AM//AKxBzMV5NfQSm9hHHxQXKLX7A98qw5jT6sOgAH/jF5Q70WvBKoasgsd/gJt6z6TB/Zdga47gT8vnNtVbScnPuSOji+ozh37I8TIK8Gj9keBkFaYpGhWcbrEOe9B8422mHHci/KLcVwjOSVF7gDexEaxulJh0X4Wmnon2U+MrkjU8/rNGhsB4TMVUN1vzdR75pAYT+wo9BM06DvOkUWVoM9zQQadeZFhc07NA552aAgpaRzQRaRLwAKWkGeAr4lUUsxsBud+7lEn4xRtcOD3bfGNJsVliWhsM+sqsPj6b7Ot+mZbxzPbaFAWoaYLjFc+0P8pOvcTrNnh6txMZxVNXP9U6eHsymVuNxZYi/wCXQeXOW2AxTahWsWXLobZgfynqDM64LGw3jVCoyWv5a8515PvyY0un0bLgfHEw9RnZCxIy5CoIB01J5Wt53Ms+LfamocwFkpsoUBlAJBAubHW+h15jxMwZxZaxG+99v3rPPbFg2cFm5EnYDQzohyKXa2c8uKuma5vttXFVnV0LMiISEXZC5Hn29/CUePxr1Gz1HJa9zc315+HhKam+ViSNrW1G50nVKjNfoL87Dz9RKcl4Ixdllga4asnj7wLz1H7MR4TfOOq39Mpk6bm0xbuRqlSLAt/DH9RPuEr2feFxFYoiG1wS1/UCV74jOwAAHKZqSVmmLdDbkWnKxLZvIX8LbQLU7EZiPKdWrj8szlO3o1jCvsaL7IL/ABWP8p89RrNhUaY/7GG7ueiqPUn6TVu05+TcjWPQfNp5TxDBlp6hkpDYcGc4BFiLg7iRBnt4AJrw1AwIXY3Gp3EcvPLzwmAHt55I3nRAVYaeNUAFybdT3QLPaI4nE7g+B7xMkU2OLj6fJ0PcHW5hRxKkADmXUXt+I+BEwnEVUG6C3UcvKV4rGdEeJNGcp0byvxQXOVT8Im+Pc87eH95laOLZTcH5yVSs7bsfDlD4QzLnE4pSLO9+4m/ulbVxCflUn3RMCSsBLUUhOVl9wfA3Ku4Ft1F9uhImgLTOYctYWY7CN03f9XunPO2zRaRY1cQykBbi477ROoga4YA335bwiu/Ue+emq/Med4LJdC0xFOH0QblOX6m+sV4hSRMpRG3NxuNvdNGmFTKCVGovuZXYykCRkFwP3zmnHKTktkyiqM+1W9rpbloLX1jWHwVRw2UKe0VPaA1Bvp6nWNYumbJodHU/EfOWPCkyhwy/nJFxuCB87zqXI47aMXG9FIeHVcx/hk2I/MpOhvYz04WtoDSa3PTw+k1yIn6V9BDBF/4JEfzL0S+H9MjgMM6OTkYKVbpuQQO8Sf3Y5dvcf3zmprUVbcn/AFE/GJPgl6n3fSJ8yvQ1xaozXExZEXvPxv8AKUy0WvexHkZqeMYOyEgkm62GnMgfOL/9My7O/iPpMpcqXZpGBSHN1g7G8v24ef8AFN+hUN66wL8MY/nX/SB8JK5YlOLLf7GLZXbqwHoP7zR1KoEz/BAKKFSbkm+ktS/ProOszk022ioqlscSpeGRpWHQ6X8Sd/rC0a9jrFGQ2izUyV4BHhA0oCd5EmeXnEwEdedIXnRAU2I6ynxWpMta79hiOQv6SpasrbiZRRTKfGJKmoljNTUwyPzI8gfpFK/BsxutRfAgj4XnRCaXZnKNlRSwjMARaStr3zR0+H2AAKm2m/1ld/06oHvkNsxNxY+GxjU7sMaE8JRzvlJtYX290lj8KEtYk30N4euDTrK5UkMDoB2r2tt6GR4jWDjRXBB/MpESbbT8BqhnCG6r4R9BK3AP2B++csEMzl2y10NqZ6x0gVael9JLYUOKt1AJvoNOXnPBSuT3W+EhUxSoov0274iEeu2VFLE62Gw5XJ+c14YSk78ETkkixq4PMLEncHTqpBHwjNNbSqfgWIXYX/pcfC4ij1a1JsrFwd7Fjt6zqwfsyc/w06kyaC/KZlOKON2Op0BsdO/TWabAFmRWLXzAG4GmusTVdhF30dUGmixVwf0/GWroBIkCR/LL2UGIol7Lt2lNzqOyc3yidXCMuz3H9Nh4bzRYgaadZW16QH5rHwuPXec/K6ejSC0Vf3d9SCD3a3gGDjdT5fSXaYYtbS99tDb0kXw+XQgjysPeJlk12iypwdclxfkL2P0mgw76gDU9T5SprIBrzHduIzQq7WO9z9JcXYmiyO34rX57mwgnUA6XP1nUrdksfLkJJHzbC1zvud97yWhhsPXI0MeR7ynd+g+sLQxBBsY4yE0W+aeEwKVLyd5oiSV50HedACjxFSyOOqn4TNUqugmgqUC+5yg+Zi6cDpj8z+o+kUKS2ErZWrVhBWlkOBp+t/d9J4eB9HPmo+sr+SdiC4iNYarfnJNwR/1j0I+ZnJw90Ba4Omtr3+EmVUUrsVx9NmdCATlIJPdzEfR+oIhqOoGkZWmJF2kiqK7hWHsrhhpna1xuult442GQbqPIfSFyz0iD2wAfdE7x5mKY1EQXzMTyUW192gjmQmUP2iqBSoW4c6lgSDbYD4+kcVboUnSBVWLG7W7hfQTeYCoForkNO+UXQG2oG2bU9BqOfjb5YazfqJ8YVMW4Fr+6d3FUeznm2+j6Pi+ItlC5ChP5iQR17LSixeKQKS1j0BF7nz+My/399r+hNp4cUz2Da+cJVdiVtDLve7H/AIHQTfcGoMtFAd8o07yLn4zH8MwWYB22zCw6269202mDcgCZSlbNIxoZrUyNecXe8ZLkxZ3kXsqhTEPbeKFwL2J8xYGHruCYvXqa220Go+dt5hyPZpEEH30t3i3xnlR+pzeJ1EGU/mB8f7iE+7aXIA7xf4bTMoXe/I390BQexIPiPjCuh5Ejy09IpVLCx0NvI9+kuJLLSkwADNrpqOrHUA+saFs/eLAW2UlZVq+YqBqD8z8bRtVJY66HUnpfYD0lMAj4pVGi87anXuMQbE3uT/xI41gOZMUNXoPreCiJsu+GYy/ZJ1l0GmL4a/b85rlaXVCsNedB3nQAqxiUPdDgCUi/GWNKtoB0Em6GO5pLOBEzUMG9W3T3/WDkFDjVOsVr4jQgC+kCt2PQQ1UWRso0tqZDKPcLbLDE3kMBTDL5x37sICFbfu89AMcGFWR9iBtGAqwIma+0tAllcbWynuIJI+PumzNIHSI1OG5gc2x0t1EqLp2TJWigo4I4imrNoeoty09O6KVOBsNr+6aWlgWpqEQ6D5yQpvzW8tTaeiXFGZw3Bte3f4RRcLkrhL3s6692h175sXPMpKTDcPIqu7D8zFB/UTqfIy8nu2LEtaCXIAFlGwAtLmmIvgVBG2sfWnMk3ZdAXeADxirTi7oRGAjjSArE9Dz9JR/fTax3vpLniLWRvC0oWW8KT7AKvECNhrzno4iW3OkVYWgiB3RYxDJliMZbU8tZIY9TuBKp0gjb9mHxoeTLtcSvKw8AB8IT7ypGXl3aSgXQ3BMmzkw+P9DIs6tMHZj/AMxb2JHO8WSswkvb+Mai0K0F4XcPY73mzRpiMNV/iL4ibGk2kqRKD3nshedFRRnl2h8FUuD3E/GLodJLAp+K/wCoyJLbCI4xudJwpddTCJr+HbrCqAPrILOp0uvp9ZLEnsMP5T8J47wRBfuU8+vhBKwJYFrLHRUi9OnlFhGEtLUSbDJU7oU1B0MDlhEpkwoLJIgvcbme1jaESnGMRY202G8QFSUJhEpGNin3T3JGAqF5HeGOGHSeNUCnrCfeh0hsAPsemk4ob31hjXEg1QdYASc3EWcSbv0MWdjKQhHiq9gzPM0vuMOQg8ZnqkaERZ7QbtPHaL1XjSCyftJ4SOsRznrOzGXiTkO5xPM94n7Tuk1qx4hkNq07NFfaz0vpFQWMYM3fzm0wz9keExHDj2psMK/ZHhCQRY9edB3nSChX7PIrYhAyqwuxKsAymyORcHfUCbBOBsuDTEn7sc4puyDDUgMtQrYB7antDlMPwzF+yqq+UNlJ7JNrhlKkXG34pa4fjCWCexfIpDKhxVQoCOYQiwjbSbsnbqi9rYaoRiKlOjQ9nQqMlvYISVDsDbTXKMpPjKvGMgrpdEs1Ok5QFaalnoIxIuQo7Rva4B25z2px8EtlpP22ZmVcTUVLuSW0AsAbmLnEZqoqezWwRECElgFRAi6ka/hBkOmUrHmwFFiLuLqDorqqOc9Ygdq+XRUFySLMO4mdXC0syhWuMr651GZldwouRZLqFNzoeUDTxC2INNbHbWxGmmtr+/nParqwsEC94Ym3r5w0GwrYaiHXtkrnUMbixQl7mwFxYKt9/wAUYTC0yBnKK97EU3UoFJsGJuwuO1cA7WvqbysSnGUTpHYUWKU6KBt3/Da5Ulh282XK3Yv2d9RpoYU4amW/GLE7BkFtXHPYWCG/8x3iCJJXhf4Kj0LCFhBT20mij3NIPJGDJvEMAUnvs4S06AAikE6xhmEGzCMBVlMhr1jDGQVLmMRV8aHZG+8zzzT8Yokp2Rcg30mWrkjdSPEGOKE2Bcxd4UuDA1NJokS2LZJzCOUlBIh6eHB0IjcqFjZVkzy8tq+AUbHlc914k1DoYKSYnFoVnpkmScqyiRjANYzVYN+yJj6LWM0WAraCRIuJdZ55FvaTpBViabwy7nwnTop/YI9D+B/CI+k6dJKCSQnToDJpCLOnSyQwkhOnRMD1ZLlOnRMZB5ETp0Q0eNBmdOiYEHgGns6CAgZKjvPZ0piOrSlxwnToIGU+IQX2HpKuvOnTVEM6luI1+adOikNdFtx5yWJJJNhqTc7dZQrz/fKdOkRGxVp4k6dNkZeTw7y1wG08nRT6Kj2W06dOmYz/2Q=='], 
//         amenities: ['Air conditioning', 'Attached Washroom', 'Spacious Cubboards'], 
//         address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
//     }
// ]


function ListingSekeletons() { 
    const skeletons = [1,2,3]; 
    return ( 
        <>
            { 
                skeletons.map(num => ( 
                    <div className='hidden lg:flex w-full rounded-md p-6 hover:shadow-md hover:cursor-pointer border border-2 border-gray-200 transition ease-in-out'>
                    <div className="rounded-xl bg-gray-300 w-[700px] mr-6 relative">
                        <div className='w-full h-[300px] bg-gray-200 animate-pulse'></div>
                    </div>
        
                    <div className="rounded-md w-full flex flex-col justify-between">
                        <div className='w-full h-[40px] bg-gray-200 animate-pulse mb-2'></div>
                        <div className='w-2/3 h-[40px] bg-gray-200 animate-pulse mb-2'></div>
                        <div className='w-2/3 h-[40px] bg-gray-200 animate-pulse mb-2'></div>
                        <div className='w-2/3 h-[40px] bg-gray-200 animate-pulse mb-2'></div>
                        <div className='w-2/3 h-[40px] bg-gray-200 animate-pulse'></div>
                    </div>
                </div>
                ))
            }
        </>
    )
}

const genderOptions = [
    { id: 'all', title: 'All' },
    { id: 'male', title: 'Boys' },
    { id: 'female', title: 'Girls' },
]; 

export default function Listings({ all_listings, total, gender }) {
    const router = useRouter();
    const { getAllListings } = useApi(); 
    const [listings, setListings] = useState(all_listings); 
    const [searchQuery, setSearchQuery] = useState(""); 
    const [searchResults, setSearchResults] = useState([]); 
    const [loading, setLoading] = useState(false); 
    // const { gender } = router.query;
    const is_mounted = useRef(false); 
    const [listingGender, setListingGender] = useState("all"); 

    const fetchListings = async (filters = {}, skip = 0, limit = 0) => { 
        setLoading(true); 

        const { listings: all_listings, total } = await getAllListings({ 
          filters, 
          skip, 
          limit
        }); 
        
        console.log("Fetched all listings: ", all_listings); 

        setListings(all_listings); 
        setLoading(false);
    } 

    useEffect(() => {
        if(gender) { 
            // setListingFilters({ gender });
            setListingGender(gender); 
        }
    },  []); 

    useEffect(() => { 
        if(!is_mounted.current){ 
            is_mounted.current = true;
        } else { 
            if(listingGender === 'all') { 
                fetchListings({ publish: true }); 
            } else { 
                fetchListings({ gender: listingGender, publish: true }); 
            }
        }
    }, [listingGender])

    const handleSearch = (searchTerm, results) => { 
        setSearchQuery(searchTerm);
        setSearchResults(results);  
    }

    return (
        <>
            <Head>
                {
                    gender ? (
                        gender === 'male' ? 
                        <>
                            <title>Book Boys hostel with Facilities in Mumbai</title>
                            <meta name='description' content="One of the best boy's hostels is provided by Student Housing. Location, Hygiene, and service are three main pillars of the outstanding stay we provide to students in Mumbai."/>
                        </>
                        :
                        <>
                            <title>Book Girls hostel with Facilities in Mumbai</title>
                            <meta name='description' content="Student housing offers girls' hostel in Mumbai an safe space with 24/7 security and biometric scan entry. Services like delicious three-times-a-day meals, laundry, and drop-off services will also save their valuable time."/>
                        </>
                    )
                    : 
                    <>
                        <title>Book Student Hostel in Mumbai with facilities | Student Housing</title>
                        <meta name='description' content='Student housing provides students hostels in Mumbai at prime locations. Hostels are strategically located near major colleges and prime residential areas. We provide hostel stays for girls and boys.'/>
                    </>
                }
            </Head>
            <Layout>
                <div className='flex flex-col lg:flex-row w-full mt-5 px-4 sm:px-16'> 
                    <div className='hidden lg:block h-[800px] w-1/4 mr-5 relative'>
                        <div className='h-full w-full rounded-md bg-white border border-gray-200 p-3'>
                            <h1 className='capitalize text-lg mb-3 flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                                </svg>
                                <span>Filters</span>
                            </h1>

                            <div className="h-[1px] border border-gray-100 mb-3"></div>
                            
                            <fieldset className="mt-4">
                                <legend className='font-semibold text-md mb-3'>Gender</legend>
                                <div className="ml-3">
                                {genderOptions.map((option) => (
                                    <div key={option.id} className="flex items-center mb-2">
                                        <input
                                            id={option.id}
                                            name="asdf"
                                            type="radio"
                                            value={option.id}
                                            checked={listingGender === option.id}
                                            className="h-4 w-4 border-gray-300 text-brandColor focus:ring-brandColor"
                                            onChange={e => setListingGender(e.target.value)}
                                        />
                                        <label htmlFor={option.id} className="ml-3 block text-sm font-medium text-gray-700">
                                            {option.title}
                                        </label>
                                    </div>
                                ))}
                                </div>
                            </fieldset>

                            <div className="h-[1px] border border-gray-100 mb-3"></div>
                        </div>
                    </div>

                    <div className='flex lg:hidden bg-white border-b-2 border-gray-200 p-3 gap-3 overflow-y-auto'>
                        <div className='capitalize text-lg flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 mr-1 sm:mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                            </svg>
                            <span className='text-sm sm:text-base'>Filters</span>
                        </div>

                        <div className=" border border-gray-300"></div>
                        
                        <fieldset className="flex items-center">
                            <div>
                                <legend className='font-semibold text-sm sm:text-base'>Gender</legend>
                            </div>
                            <div className="flex items-center">
                            {genderOptions.map((option) => (
                                <div key={option.id} className="flex items-center ml-3">
                                    <input
                                        id={option.id}
                                        name="notification-method"
                                        type="radio"
                                        value={option.id}
                                        checked={listingGender === option.id}
                                        className="border-gray-300 text-brandColor focus:ring-brandColor"
                                        onChange={e => setListingGender(e.target.value)}
                                    />
                                    <label htmlFor={option.id} className="ml-3 block text-sm font-medium text-gray-700">
                                        {option.title}
                                    </label>
                                </div>
                            ))}
                            </div>
                        </fieldset>

                        {/* <div className="h-[1px] border border-gray-100 mb-3"></div> */}
                    </div>

                    <div className="w-full lg:w-3/4">
                        <div className='mb-2 mt-2 lg:mt-0'> 
                            <Search 
                                api_endpoint={`${process.env.NEXT_PUBLIC_API_BASE_URL}/listing/search-listings`}
                                placeholder="Search Listings"
                                onResult={handleSearch}
                            />
                        </div>

                        <div className='mb-3'> 
                            {
                                listings.length !== 0 && searchQuery === "" && 
                                <h3 className='text-md text-gray-500'> 
                                    Showing {listings.length} results     
                                </h3> 
                            }
                            {
                                searchQuery !== "" && searchResults.length > 0 &&
                                <h3 className='text-md text-gray-500'> 
                                    Showing {searchResults.length} results     
                                </h3> 
                            }
                        </div>  
                        
                        {
                            loading && 
                            <ListingSekeletons/>
                        }

                        {
                            !loading && listings.length !== 0 && searchQuery === "" && listings.map((listing,index) => ( 
                                <>
                                    <Listing 
                                        id={listing.id}
                                        key={listing.id}
                                        name={listing.name}
                                        description={listing.description}
                                        images={listing.images}
                                        price={listing.price} 
                                        amenities={listing.amenities} 
                                        address={listing.address} 
                                        location={listing.location}
                                        video_link={listing.video_link}
                                    />  
                                    {/* { index !== listings.length - 1 && <div className='w-full h-[0.5px] border border-gray-200 my-3'></div>} */}
                                </>
                            )) 
                        }
                        {
                            !loading && searchQuery !== "" && searchResults.length > 0 && searchResults.map((listing,index) => (
                                <>
                                    <Listing 
                                        id={listing.id}
                                        key={listing.id}
                                        name={listing.name}
                                        description={listing.description}
                                        images={listing.images}
                                        price={listing.price} 
                                        amenities={listing.amenities} 
                                        address={listing.address} 
                                        video_link={listing.video_link}
                                    />  
                                    {/* { index !== listings.length - 1 && <div className='w-full h-[0.5px] border border-gray-200 my-3'></div>} */}
                                </>
                            ))
                        }
                    </div> 
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    console.log("Get server side props called!"); 
    const { query } = context;
    const { gender } = query;

    // Fetch data from external API
    const { listings: all_listings, total } = await apis.getAllListings(process.env.NEXT_PUBLIC_API_BASE_URL, { 
        filters: gender ? { publish: true, gender } : { publish: true }, 
        skip: 0, 
        limit: 0 
    }); 

    console.log("All listings: ", all_listings, " total: ", total); 

    // Pass data to the page via props
    return { 
        props: { 
            all_listings, 
            total, 
            gender: gender && gender || null
        } 
    }
}
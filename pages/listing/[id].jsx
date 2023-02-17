import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'; 
import { TbView360 } from "react-icons/tb";

import { Dialog, Disclosure, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Layout from '../../components/Layout'; 
import useApi from '../../hooks/useApi';

const listings = [ 
  {
      id: 1, 
      name: 'Ganga Nivas', 
      description: 'Home away from home', 
      price: 20000, 
      images: [
        'https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no', 
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUYGRgYGBwYGBgaGBgYGBgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQkISE0NDQ0NDQxNDQ0NDE0MTQ0NDQ0NDQ0NDQ0NDQ0MTQxNDQ0NDQ0NDQ0NDQ0NDExNDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAD4QAAIBAgQDBQUGBAUFAQAAAAECAAMRBBIhMQVBUSJhcYGRE6GxwdEGFDJCUvAjYnLhU4KSsvEVJKLC0rP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQACAgICAgMBAQAAAAAAAAAAAQIREiEDMUFREzJhIvD/2gAMAwEAAhEDEQA/ALM0L+HKDaj7o+BfT3zmTp11nlHcVT0IB6Ut3pchF6lOAFUUnhEdenAukYheSVpzJPLSlIKCq0MjxQGTVpadiLGnUjtGrKqk8bQykxF1hsTaWdHGTNI8ZSvHYqNKuNgqmL1lKMTIviY7FRZ1cVK+tXirYiLtUY3Olh3xNjQd6kEXgDUkc8kYxmklMVDyYeTQxxTJKYmKkl7SKgHLzxniTVYJq0VBY1VqxKo95EuSZNE1jGciRqnTnqU4yiQEeJTjFOlJ00j2HpjnFYAPu86X1MCw0E6LInIxKtyEJfp5xdTy5woa3jJNKJsOUC6/3hbyLD+8AE3SCZI2ywbLAYkyQbJG2WCZYCFSk9RdYUrPaa6xoQejTvLClREXw6SwVJdiOGFnhoWhaV+sPaPIKEGQwT3jzrF3EdioScwTvp5xiosCchFs1j0ymFhQuXnAwYHdCoBCwo9WFVZ6iQ6LFkOiKU4ZMPJosOqxZBQucLFvZWuO+WbIYqE38T8YrASRO1Gkp6yVCndo5RoxgBRIdVtGPurWvbTrBiiSdfSICVK7bbS1wlKV6OFNgLn3DxMssBUzQBlolPQToVGFp00wj7OfJnzZffJg85BZIHnMDrCCe/syAMkD6wA8Ig2WGkTABZ1gLRtxAuIIBcrJ0l1nMJOiNYxDdBJf18AVRWtuJTYebjFKDRN/0g+6axjkn+GU5U0ZijShnpxV+LU0Jz5rDQmwt6kwT/aPDn8/vT/6iUJPpFOSDVFidUSDcbonZven/wBQFTitL9XvX6zRcU/RLnH2DrLcxdqYgMdWpuQc5HLQr9Yo+T/EP+ofWaLhkT8iHsgk1w9/+ZTPUT/F/wDJZ6AP1v7pnLjaKUy+opY/3vG1EpMHiQmjFz/l19bx9eIp/N6f3mTiy0y0prGqaSppcUT+b0H1jtDi9P8Am9B9ZNMZZjDytRNPX4yxo8WptsHJ7kv8IlT/AAjwEAPcBSux8DL3hODB1YX7uUrOGLq3hNJw8dmacauSRnyOog+K2CXPhYdZnqdbMSLWtLzjx7AA3zfIzMYN9X8bR8q/psXH9SdSpZ216fASx4W+/j8pRYhru3iP9olhwur2b9SZm41s0NOtWdKr7xOiIwRkVa8kG5wIaSDSTYMGks3rAB57mgAbNPM0GWkS0AJu0E5njPIM8AZ4xk6J1gC0LQOsBDqPLIcSJUgncAeQ5SpvBGpNYqyGJcYqdhu8i/kYrwbhrVEJVSfxHQdL/Q/sSfFW7B8ZtPsFXQYVACucu+a1rjtkjN00y28uhnocH8xbo5ObbooOAcED18jjTKWbqNvmZqOK8FT2LHIudSpQgb2IVQeu+vkY1gbHF1bW7C5bbWutIj4N6Sy4h+D/ADp/+iTeU3ar8MVFU7MNxvAI1JCiAZcO72tsxr0sw06XcDu0l7hfs/h8w/hqyOoYIwBUNzt3ZXHkOt4TFYS9Womlmw75dds7Lp6gn3yPD+JU1wlF3ZVKiy33JS6lR3lb+Gbvg22lX+sSSvZ8vr4ENVdUA0ZiB2QMoY6XJ6W2nuMYio9jz67WAjVWqVd2Q6uSjaC+Rr3FuV9vdKvH1+2/9R+MOWKtFQlpjmGqMVqEsdFA3PNgInVqd59Z7h37D9+Qe8mI1WnNirZtlpDVGppufU/WWFWtanTtcElzcE3toNTfXaUlJ5YvqiDop5kbkn5RYK0PLTHOHcSqI65XYXIFszW169Zt72Xynz/AJeomg/ENbnum6qNpOfnjTRtxO0P8Oewbyl1gseqhgb78pm8G/ZP9UJSxNie+YxbjK0W0mqZa8dxWawUXyte17X0I+cosMCM19CzE2vewnmN4iqkhidBc6Ei3lBnELlzZhl3vytG232Cil0dVpsWJV7X30B5AfKM4YZFC32laeJJcC510vlIHqY4rwd+Rj3tp0S9pOk0MqA09DQWae5pBQUNJZoHNOzQAKXnheCLzwtAVk2aDZpEtIM0AJFobDnWKFobDtrAB8mKO0PmlfXxCr+JgPEgTo40ZyFOMPZPOO/YzFezC1T+DOVfS9gxsH16EgG1tCOplJxnGoyZVa5O3Q275pPsPSQYV2qMuQB86ljcKM2mXlp/ut+YT0eHSaZx8/ho2vBSPa4l/1VFUHuRBsef4t/OO8SqAJfo6HptUW/w938syX2W4n7NXpHt1A5P4wRYqtiX1B2PpL7H1y1CobWsAR2lbbKdPdv3fzS5ReSZkpaoZNT/uz3UB76h+Y9e6ZT2dELiaVVmBpOz0yGYCzrmTs7cgdtjvtNEH/wC8qbaUE7xq9QfLbnqOkxP22xJp4ksoH8SnlYZgbkaBmt/l8bA7SoLdClIygxBLp2t3HjqRz/fvnlZrs/8AU3+4xbD0x7RNTfOvxki+56k/GTN3IqHQ2htTbvZfcCZXVGjSv/D/AM//AKxBzMV5NfQSm9hHHxQXKLX7A98qw5jT6sOgAH/jF5Q70WvBKoasgsd/gJt6z6TB/Zdga47gT8vnNtVbScnPuSOji+ozh37I8TIK8Gj9keBkFaYpGhWcbrEOe9B8422mHHci/KLcVwjOSVF7gDexEaxulJh0X4Wmnon2U+MrkjU8/rNGhsB4TMVUN1vzdR75pAYT+wo9BM06DvOkUWVoM9zQQadeZFhc07NA552aAgpaRzQRaRLwAKWkGeAr4lUUsxsBud+7lEn4xRtcOD3bfGNJsVliWhsM+sqsPj6b7Ot+mZbxzPbaFAWoaYLjFc+0P8pOvcTrNnh6txMZxVNXP9U6eHsymVuNxZYi/wCXQeXOW2AxTahWsWXLobZgfynqDM64LGw3jVCoyWv5a8515PvyY0un0bLgfHEw9RnZCxIy5CoIB01J5Wt53Ms+LfamocwFkpsoUBlAJBAubHW+h15jxMwZxZaxG+99v3rPPbFg2cFm5EnYDQzohyKXa2c8uKuma5vttXFVnV0LMiISEXZC5Hn29/CUePxr1Gz1HJa9zc315+HhKam+ViSNrW1G50nVKjNfoL87Dz9RKcl4Ixdllga4asnj7wLz1H7MR4TfOOq39Mpk6bm0xbuRqlSLAt/DH9RPuEr2feFxFYoiG1wS1/UCV74jOwAAHKZqSVmmLdDbkWnKxLZvIX8LbQLU7EZiPKdWrj8szlO3o1jCvsaL7IL/ABWP8p89RrNhUaY/7GG7ueiqPUn6TVu05+TcjWPQfNp5TxDBlp6hkpDYcGc4BFiLg7iRBnt4AJrw1AwIXY3Gp3EcvPLzwmAHt55I3nRAVYaeNUAFybdT3QLPaI4nE7g+B7xMkU2OLj6fJ0PcHW5hRxKkADmXUXt+I+BEwnEVUG6C3UcvKV4rGdEeJNGcp0byvxQXOVT8Im+Pc87eH95laOLZTcH5yVSs7bsfDlD4QzLnE4pSLO9+4m/ulbVxCflUn3RMCSsBLUUhOVl9wfA3Ku4Ft1F9uhImgLTOYctYWY7CN03f9XunPO2zRaRY1cQykBbi477ROoga4YA335bwiu/Ue+emq/Med4LJdC0xFOH0QblOX6m+sV4hSRMpRG3NxuNvdNGmFTKCVGovuZXYykCRkFwP3zmnHKTktkyiqM+1W9rpbloLX1jWHwVRw2UKe0VPaA1Bvp6nWNYumbJodHU/EfOWPCkyhwy/nJFxuCB87zqXI47aMXG9FIeHVcx/hk2I/MpOhvYz04WtoDSa3PTw+k1yIn6V9BDBF/4JEfzL0S+H9MjgMM6OTkYKVbpuQQO8Sf3Y5dvcf3zmprUVbcn/AFE/GJPgl6n3fSJ8yvQ1xaozXExZEXvPxv8AKUy0WvexHkZqeMYOyEgkm62GnMgfOL/9My7O/iPpMpcqXZpGBSHN1g7G8v24ef8AFN+hUN66wL8MY/nX/SB8JK5YlOLLf7GLZXbqwHoP7zR1KoEz/BAKKFSbkm+ktS/ProOszk022ioqlscSpeGRpWHQ6X8Sd/rC0a9jrFGQ2izUyV4BHhA0oCd5EmeXnEwEdedIXnRAU2I6ynxWpMta79hiOQv6SpasrbiZRRTKfGJKmoljNTUwyPzI8gfpFK/BsxutRfAgj4XnRCaXZnKNlRSwjMARaStr3zR0+H2AAKm2m/1ld/06oHvkNsxNxY+GxjU7sMaE8JRzvlJtYX290lj8KEtYk30N4euDTrK5UkMDoB2r2tt6GR4jWDjRXBB/MpESbbT8BqhnCG6r4R9BK3AP2B++csEMzl2y10NqZ6x0gVael9JLYUOKt1AJvoNOXnPBSuT3W+EhUxSoov0274iEeu2VFLE62Gw5XJ+c14YSk78ETkkixq4PMLEncHTqpBHwjNNbSqfgWIXYX/pcfC4ij1a1JsrFwd7Fjt6zqwfsyc/w06kyaC/KZlOKON2Op0BsdO/TWabAFmRWLXzAG4GmusTVdhF30dUGmixVwf0/GWroBIkCR/LL2UGIol7Lt2lNzqOyc3yidXCMuz3H9Nh4bzRYgaadZW16QH5rHwuPXec/K6ejSC0Vf3d9SCD3a3gGDjdT5fSXaYYtbS99tDb0kXw+XQgjysPeJlk12iypwdclxfkL2P0mgw76gDU9T5SprIBrzHduIzQq7WO9z9JcXYmiyO34rX57mwgnUA6XP1nUrdksfLkJJHzbC1zvud97yWhhsPXI0MeR7ynd+g+sLQxBBsY4yE0W+aeEwKVLyd5oiSV50HedACjxFSyOOqn4TNUqugmgqUC+5yg+Zi6cDpj8z+o+kUKS2ErZWrVhBWlkOBp+t/d9J4eB9HPmo+sr+SdiC4iNYarfnJNwR/1j0I+ZnJw90Ba4Omtr3+EmVUUrsVx9NmdCATlIJPdzEfR+oIhqOoGkZWmJF2kiqK7hWHsrhhpna1xuult442GQbqPIfSFyz0iD2wAfdE7x5mKY1EQXzMTyUW192gjmQmUP2iqBSoW4c6lgSDbYD4+kcVboUnSBVWLG7W7hfQTeYCoForkNO+UXQG2oG2bU9BqOfjb5YazfqJ8YVMW4Fr+6d3FUeznm2+j6Pi+ItlC5ChP5iQR17LSixeKQKS1j0BF7nz+My/399r+hNp4cUz2Da+cJVdiVtDLve7H/AIHQTfcGoMtFAd8o07yLn4zH8MwWYB22zCw6269202mDcgCZSlbNIxoZrUyNecXe8ZLkxZ3kXsqhTEPbeKFwL2J8xYGHruCYvXqa220Go+dt5hyPZpEEH30t3i3xnlR+pzeJ1EGU/mB8f7iE+7aXIA7xf4bTMoXe/I390BQexIPiPjCuh5Ejy09IpVLCx0NvI9+kuJLLSkwADNrpqOrHUA+saFs/eLAW2UlZVq+YqBqD8z8bRtVJY66HUnpfYD0lMAj4pVGi87anXuMQbE3uT/xI41gOZMUNXoPreCiJsu+GYy/ZJ1l0GmL4a/b85rlaXVCsNedB3nQAqxiUPdDgCUi/GWNKtoB0Em6GO5pLOBEzUMG9W3T3/WDkFDjVOsVr4jQgC+kCt2PQQ1UWRso0tqZDKPcLbLDE3kMBTDL5x37sICFbfu89AMcGFWR9iBtGAqwIma+0tAllcbWynuIJI+PumzNIHSI1OG5gc2x0t1EqLp2TJWigo4I4imrNoeoty09O6KVOBsNr+6aWlgWpqEQ6D5yQpvzW8tTaeiXFGZw3Bte3f4RRcLkrhL3s6692h175sXPMpKTDcPIqu7D8zFB/UTqfIy8nu2LEtaCXIAFlGwAtLmmIvgVBG2sfWnMk3ZdAXeADxirTi7oRGAjjSArE9Dz9JR/fTax3vpLniLWRvC0oWW8KT7AKvECNhrzno4iW3OkVYWgiB3RYxDJliMZbU8tZIY9TuBKp0gjb9mHxoeTLtcSvKw8AB8IT7ypGXl3aSgXQ3BMmzkw+P9DIs6tMHZj/AMxb2JHO8WSswkvb+Mai0K0F4XcPY73mzRpiMNV/iL4ibGk2kqRKD3nshedFRRnl2h8FUuD3E/GLodJLAp+K/wCoyJLbCI4xudJwpddTCJr+HbrCqAPrILOp0uvp9ZLEnsMP5T8J47wRBfuU8+vhBKwJYFrLHRUi9OnlFhGEtLUSbDJU7oU1B0MDlhEpkwoLJIgvcbme1jaESnGMRY202G8QFSUJhEpGNin3T3JGAqF5HeGOGHSeNUCnrCfeh0hsAPsemk4ob31hjXEg1QdYASc3EWcSbv0MWdjKQhHiq9gzPM0vuMOQg8ZnqkaERZ7QbtPHaL1XjSCyftJ4SOsRznrOzGXiTkO5xPM94n7Tuk1qx4hkNq07NFfaz0vpFQWMYM3fzm0wz9keExHDj2psMK/ZHhCQRY9edB3nSChX7PIrYhAyqwuxKsAymyORcHfUCbBOBsuDTEn7sc4puyDDUgMtQrYB7antDlMPwzF+yqq+UNlJ7JNrhlKkXG34pa4fjCWCexfIpDKhxVQoCOYQiwjbSbsnbqi9rYaoRiKlOjQ9nQqMlvYISVDsDbTXKMpPjKvGMgrpdEs1Ok5QFaalnoIxIuQo7Rva4B25z2px8EtlpP22ZmVcTUVLuSW0AsAbmLnEZqoqezWwRECElgFRAi6ka/hBkOmUrHmwFFiLuLqDorqqOc9Ygdq+XRUFySLMO4mdXC0syhWuMr651GZldwouRZLqFNzoeUDTxC2INNbHbWxGmmtr+/nParqwsEC94Ym3r5w0GwrYaiHXtkrnUMbixQl7mwFxYKt9/wAUYTC0yBnKK97EU3UoFJsGJuwuO1cA7WvqbysSnGUTpHYUWKU6KBt3/Da5Ulh282XK3Yv2d9RpoYU4amW/GLE7BkFtXHPYWCG/8x3iCJJXhf4Kj0LCFhBT20mij3NIPJGDJvEMAUnvs4S06AAikE6xhmEGzCMBVlMhr1jDGQVLmMRV8aHZG+8zzzT8Yokp2Rcg30mWrkjdSPEGOKE2Bcxd4UuDA1NJokS2LZJzCOUlBIh6eHB0IjcqFjZVkzy8tq+AUbHlc914k1DoYKSYnFoVnpkmScqyiRjANYzVYN+yJj6LWM0WAraCRIuJdZ55FvaTpBViabwy7nwnTop/YI9D+B/CI+k6dJKCSQnToDJpCLOnSyQwkhOnRMD1ZLlOnRMZB5ETp0Q0eNBmdOiYEHgGns6CAgZKjvPZ0piOrSlxwnToIGU+IQX2HpKuvOnTVEM6luI1+adOikNdFtx5yWJJJNhqTc7dZQrz/fKdOkRGxVp4k6dNkZeTw7y1wG08nRT6Kj2W06dOmYz/2Q==',
        'https://imganuncios.mitula.net/medium/2_bhk_apartment_in_andheri_west_for_rent_mumbai_the_reference_number_is_10493020_3370002667829082565.jpg',
        'https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no', 
        'data:image/jpeg;base64,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',
        'https://imganuncios.mitula.net/medium/2_bhk_apartment_in_andheri_west_for_rent_mumbai_the_reference_number_is_10493020_3370002667829082565.jpg'
      ], 
      amenities: [
          { name: 'Air conditioning', images: [] }, 
          { name: 'Attached Washroom', images: [] }, 
          { name: 'Spacious Cubboards', images: [] }, 
      ], 
      address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
  }, 
  { 
      id: 2, 
      name: 'Ganga Nivas', 
      description: 'Home away from home', 
      price: 20000, 
      images: [
        'https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no', 
        'data:image/jpeg;base64,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',
        'https://imganuncios.mitula.net/medium/2_bhk_apartment_in_andheri_west_for_rent_mumbai_the_reference_number_is_10493020_3370002667829082565.jpg'
      ], 
      amenities: [
          { name: 'Air conditioning', images: [] }, 
          { name: 'Attached Washroom', images: [] }, 
          { name: 'Spacious Cubboards', images: [] }, 
      ], 
      address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
  }, 
  { 
      id: 3, 
      name: 'Ganga Nivas', 
      description: 'Home away from home', 
      price: 20000, 
      images: [
        'https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no', 
        'data:image/jpeg;base64,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',
        'https://imganuncios.mitula.net/medium/2_bhk_apartment_in_andheri_west_for_rent_mumbai_the_reference_number_is_10493020_3370002667829082565.jpg'
      ], 
      amenities: [
          { name: 'Air conditioning', images: [] }, 
          { name: 'Attached Washroom', images: [] }, 
          { name: 'Spacious Cubboards', images: [] }, 
      ], 
      address: '123 Ganga Nivas, 34th Street, Juhu, Mumbai 401202'
  }
]


const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Amenities',
      items: [
        'Washing Machine',
        'Air Conditioning', 
        'Fridge', 
        'Television',
        'Spacious Cupboards'
      ],
    },
    // More sections...
  ],
}


const relatedProducts = [
  {
    id: 1,
    name: 'Cresenzo',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://lh5.googleusercontent.com/p/AF1QipMD8uMloIMenAHDHnRg77jXZOdWXkr64pWC57VC=w348-h160-k-no',    
    imageAlt: 'Listing Image',
    price: '₹20000',
  },
  // More products...
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({  }) {
  const router = useRouter();
  const { isReady } = router; 
  const { id } = router.query; 
  const [listing, setListing] = useState({}); 
  const { getListing } = useApi();


  console.log("Listing : ", listing); 

  useEffect(() => { 
    if(isReady){
        console.log("listing id: ", id); 
        fetchListing(id); 
    }
  }, [isReady]); 

  const fetchListing = async (id) => { 
    const Listing = await getListing(id); 
    console.log("listing retrieved: ", Listing);
    setListing(Listing)
  }

  return (
    <Layout> 

      <div className="bg-white">
        <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            {/* Product */}
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* Image gallery */}
              <Tab.Group as="div" className="flex flex-col-reverse">
                {/* Image selector */}
                <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {listing && listing.images && listing.images.map((image) => (
                      <Tab
                        key={image}
                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      >
                        {({ selected }) => (
                          <>
                            {/* <span className="sr-only"> {image.name} </span> */}
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                              <img src={image} alt="Listing Image" className="h-full w-full object-cover object-center" />
                            </span>
                            <span
                              className={classNames(
                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                  {listing && listing.images &&  listing.images.map((image) => (
                    <Tab.Panel key={image.id}>
                      <img
                        src={image}
                        alt={"Listing Image"}
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                      />
                    </Tab.Panel>
                  ))}

                  {
                    listing.images && listing.images.length ===0  && 
                    <img 
                      src='https://movi.com.tr/wp-content/uploads/2021/08/placeholder-home.png'
                      alt={"Listing Image"}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    /> 
                  }
                </Tab.Panels>
              </Tab.Group>

              {/* Product info */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{listing.name}</h1>
                
                <div className="mt-3">
                  <h2 className="sr-only">Listing address</h2>
                  <p className="text-xl tracking-tight text-gray-600">{listing.address}</p>
                </div>

                <div className="mt-3">
                  <h2 className="sr-only">Distances</h2>
                  <a className="text-md tracking-tight text-green-500 hover:text-green-600 underline cursor-pointer">View distances</a>
                </div>

                <div className='flex mt-3'> 
                    {/* <button
                        type="button"
                        className="mr-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => router.push(`/listing/${id}`)}
                    >
                      <TbView360 className='-ml-1 mr-2 h-5 w-5 text-white'/> 360 View
                    </button>    */}

                    <button
                        type="button"
                        className="mr-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <TbView360 className='-ml-1 mr-2 h-5 w-5'/> 360 View
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        View on Map
                    </button>
                </div>

                <div className="mt-3">
                  <h2 className="sr-only">Listing price</h2>
                  <h1 className='uppercase text-xl text-gray-600'>starting at</h1>
                  <p className="text-3xl tracking-tight text-gray-900">₹{listing.price}/-</p>
                </div>
{/* 
                <div className="mt-6">
                  <h3 className="sr-only">Description</h3>
                  <div
                    className="space-y-6 text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: listing.description }}
                  />
                </div> */}

                <div className='flex mt-3'> 
                  <button
                      type="button"
                      className="mr-3 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      onClick={() => router.push(`/booking/${id}`)}
                  >
                      Book Now
                  </button>   

                  <button
                      type="button"
                      className="mr-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ml-1 mr-2 h-5 w-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Contact Us
                  </button> 
                </div>

                <section aria-labelledby="details-heading" className="mt-12">
                  <h2 id="details-heading" className="sr-only">
                    Additional details
                  </h2>

                  <div className="divide-y divide-gray-200 border-t">
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <h3>
                              <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                <span
                                  className={classNames(
                                    open ? 'text-indigo-600' : 'text-gray-900',
                                    'text-sm font-medium'
                                  )}
                                >
                                  Amenities
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                              <ul role="list">
                                {listing && listing.amenities && listing.amenities.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                  </div>
                </section>
              </div>
            </div>

            <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
              {/* <h2 id="related-heading" className="text-xl font-bold text-gray-900">
                Similar Properties
              </h2> */}

              {/* <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {relatedProducts.map((product) => (
                  <div key={product.id}>
                    <div className="relative">
                      <div className="relative h-72 w-full overflow-hidden rounded-lg">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="relative mt-4">
                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      </div>
                      <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                        />
                        <p className="relative text-lg font-semibold text-white">{product.price}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a
                        href={product.href}
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
                      >
                        Book Now <span className="sr-only">, {product.name}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div> */}
            </section>
          </div>
        </main>
      </div>
    </Layout>
  )
}
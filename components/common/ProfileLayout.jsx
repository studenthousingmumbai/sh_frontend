import Layout from '../Layout'
import ProfileSidebar from './ProfileSidebar';

export default function ProfileLayout(props) {
    return (
        <Layout>
        <div className='flex flex-col lg:flex-row w-full mt-5'>
            { props.children }
        </div>
        </Layout>
        
      )
}
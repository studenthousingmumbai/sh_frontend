import { useRouter } from 'next/router'; 
import Modal from '../../components/common/Modal';
// import Receipt from './Receipt';
import { Document, Page, StyleSheet, Text, View, pdf, Image } from '@react-pdf/renderer';
import useAuth from '../../hooks/useAuth';
import withAuth from '../../hooks/withAuth';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    // textDecoration: "underline",
    marginBottom: 15,
    borderLeft: "5px",
    borderColor: "#FFCC29", 
    paddingLeft: "10px"
  },
  sectionItem: {
    fontSize: 10,
    marginBottom: 10,
  },
  sectionDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  fontBold: {
    fontWeight: "bold",
  },
  textSm: {
    fontSize: 8,
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 20,
  },
  alert: { 
    padding: "10px 15px 10px 15px", 
    backgroundColor: "#D9D9D9", 
    borderRadius: "8px"
  }, 
  alertText: { 
    fontSize: 10, 
    fontWeight: "bold"
  }
});

async function generatePdf({booking_details, payment_details}) {
    const element = (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image src='/sh_logo.png' style={styles.logo}/>
                <View style={styles.section}>
                <Text style={styles.sectionTitle}>Booking Details</Text>
                <View style={styles.sectionDivider} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Listing: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {booking_details.listing_name}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Name: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {booking_details.firstname} {booking_details.lastname}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Order ID: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>{booking_details.orderId}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Floor Number: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {booking_details.floor_number}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Apartment Number: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {booking_details.appartment_number}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Bed Number: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>{booking_details.bed_no}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        College: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>{booking_details.college || 'N.A'}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Course: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>{booking_details.course || 'N.A'}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>Year: &nbsp;</Text>
                    <Text style={styles.sectionItem}>{booking_details.year || 'N.A'}</Text>
                </View>
                </View>
                
                <Text style={styles.sectionTitle}>Payment Details</Text>
                <View style={styles.sectionDivider} />
                
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Name: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {payment_details.name}
                    </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Email: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {payment_details.email}
                    </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Total Amount Paid: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        Rs.{(parseInt(payment_details.total)/100).toLocaleString('en-IN', { maximumFractionDigits: 2 })} /-
                    </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Paid On: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {payment_details.paymentDate}
                    </Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Billing Address: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {payment_details.billing_address}
                    </Text>
                </View>

                <View style={{ flexDirection: "row", marginBottom: "25px" }}>
                    <Text style={[styles.sectionItem, styles.fontBold]}>
                        Phone number: &nbsp;
                    </Text>
                    <Text style={styles.sectionItem}>
                        {payment_details.phone_number}
                    </Text>
                </View>

                <View style={styles.alert}>
                    <Text style={styles.alertText}>Note: Please carry a print of this confirmation receipt during your visit to the hostel</Text>
                </View>
            </Page>
        </Document>
    );
    const blob = await pdf(element).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

export default function Listing({
    id,
    name,
    status,
    floor_no,
    room_no,
    appartment_no,
    bed_id,
    amenities,
    address,
    images,
    scheduled_term,
    course, 
    listing_id, 
    createdAt, 
    bed_no, 
    college, 
    year, 
    payment_details, 
    amount
}) {
    const router = useRouter(); 
    const { isAuthenticated, isLoading } = withAuth(); 
    const user = useAuth.user; 
    
    const handleDownload = async () => {
        await generatePdf({ 
            booking_details: { 
                firstname: user.firstname, 
                lastname: user.lastname, 
                orderId: id, 
                floor_number: floor_no, 
                bed_no, 
                appartment_number: appartment_no, 
                college, 
                course, 
                year,
                listing_name: name 
            }, 
            payment_details: {
                name: payment_details ? payment_details.name : "", 
                email: payment_details ? payment_details.email : "", 
                billing_address: payment_details ? payment_details.address.line1 + ", " + payment_details.address.line2 + ", " + payment_details.address.city + ", " + payment_details.address.state + ", " + payment_details.address.postal_code: "", 
                phone_number: payment_details ? payment_details.phone : "",
                total: amount, 
                paymentDate: new Date(createdAt).toDateString()
            }
        });
    };

    return (
        <div className='w-full mb-6 border border-2 border-gray-300 rounded-3xl px-4 sm:px-8 py-4'>
            <div className='flex w-full gap-0 lg:gap-2'>
                <div className='w-[33.33%] lg:w-[20%] flex flex-col text-center lg:text-start'>
                    <div className='capitalize font-semibold text-sm sm:text-md'>Order ID</div>
                    <div className='text-xs sm:text-sm break-all'>{id}</div>
                </div>
                <div className='w-[33.33%] lg:w-[20%] flex flex-col text-center lg:text-start'>
                    <div className='capitalize font-semibold text-sm sm:text-md'>date placed</div>
                    <div className='text-xs sm:text-sm'>{new Date(createdAt).toDateString()}</div>
                </div>
                <div className='w-[33.33%] lg:w-[20%] flex flex-col text-center lg:text-start'>
                    <div className='capitalize font-semibold text-sm sm:text-md'>status</div>
                    <div className='capitalize text-[#158802] text-xs sm:text-sm font-bold'>{status}</div>
                </div>
                <div className='hidden lg:flex w-[40%] justify-end items-center'>
                    <button
                        type="button"
                        className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-3 flex items-center"
                        onClick={handleDownload}
                    >
                        Receipt &nbsp; <ArrowDownTrayIcon className='w-4 h-4'/>
                    </button>

                    <button className='bg-[#BDFDB3] uppercase px-2 py-1 text-xs font-semibold rounded-3xl text-sm mr-3' onClick={() => router.push('/contact-us')}>
                        contact us
                    </button>
                    
                    <button className='bg-[#FBCF5F] uppercase px-2 py-1 text-xs font-semibold rounded-3xl text-sm text-white' onClick={() => router.push(`/listing/${listing_id}`)}>
                        view property
                    </button>
                </div>
            </div>

            <div className='w-full h-[0.5px] border border-gray-200 my-3'></div>

            <div className='flex flex-col lg:flex-row py-3'>
                <div className="rounded-xl w-full lg:w-2/6 h-[250px] mr-3 relative">
                    {/* <div className='bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-full rounded-3xl'></div> */}
                    <img className='w-full h-full object-cover rounded-3xl' src={images[0] || 'https://movi.com.tr/wp-content/uploads/2021/08/placeholder-home.png'} alt="no image"/>
                </div>
                <div className="rounded-md w-full lg:w-4/6 lg:h-[250px] flex flex-col p-4 pb-0">
                    <h2 className='text-3xl font-bold uppercase'> 
                        {name}
                    </h2>
                    <h2 className='text-lg uppercase'> 
                        {address.line_1}
                    </h2>
                    <div className='lg:hidden flex gap-4 flex-col justify-start items-start sm:items-center py-2'>
                        <button
                            type="button"
                            className="rounded-full w-full bg-white px-4 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-3 flex items-center justify-center"
                            onClick={handleDownload}
                        >
                            Receipt &nbsp; <ArrowDownTrayIcon className='w-4 h-4'/>
                        </button>
                        <button className='w-full px-4 py-2 text-md bg-[#BDFDB3] uppercase font-bold rounded-3xl text-md flex items-center justify-center' onClick={() => router.push('/contact-us')}>
                            contact us
                        </button>
                        <button className='w-full px-4 py-2 bg-[#FBCF5F] uppercase font-bold rounded-3xl text-md  text-white flex items-center justify-center' onClick={() => router.push(`/listing/${listing_id}`)}>
                            view property
                        </button>
                    </div>
                    <div className='w-full sm:w-[80%] border border-gray-200 my-3'>
                    </div>

                    <div className='uppercase font-medium'>booking information</div>
                    <div className='flex w-full gap-2'>
                        <div className='flex flex-col w-1/2'>
                            <div className='flex w-full justify-start pt-2 items-center'>
                                <div className='w-4/6 capitalize text-sm sm:text-md'>
                                    floor no:
                                </div>
                                <div className='w-2/6 text-sm sm:text-md'>
                                    {floor_no}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2 items-center'>
                                <div className='w-4/6 capitalize text-sm sm:text-md'>
                                    apartment no:
                                </div>
                                <div className='w-2/6 text-sm sm:text-md'>
                                    {appartment_no}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2 items-center'>
                                <div className='w-4/6 capitalize text-sm sm:text-md'>
                                    Bed No.:
                                </div>
                                <div className='w-2/6 text-sm sm:text-md'>
                                    {bed_no}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <div className='flex w-full justify-start pt-2 items-center'>
                                <div className='w-4/6 capitalize text-sm sm:text-md'>
                                    scheduled term:
                                </div>
                                <div className='w-2/6 text-sm sm:text-md'>
                                    {scheduled_term}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2 items-center'>
                                <div className='w-4/6 capitalize text-sm sm:text-md'>
                                    selected year:
                                </div>
                                <div className='w-2/6 text-sm sm:text-md'>
                                    {year}
                                </div>
                            </div>
                            <div className='flex w-full justify-start pt-2 items-center'>
                                <div className='w-4/6 capitalize text-sm sm:text-md'>
                                    selected course:
                                </div>
                                <div className='w-2/6 text-sm sm:text-md'>
                                    {course}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}
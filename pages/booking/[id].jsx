import { useState, useRef, useEffect  } from 'react'
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Stepper from '../../components/Stepper'; 
import { step_status, steps } from '../../constants';
import FloorPlanTest from '../../components/Booking/FloorPlanTest'; 
import useApi from '../../hooks/useApi';
import SelectMenu from '../../components/SelectMenu'; 
import useAuth from '../../hooks/useAuth';

const stepper_data = [
  { 
    id: '01', 
    name: steps.FLOOR_SELECTION, 
    description: 'Select your preferred floor', 
    href: '#', 
    status: step_status.CURRENT 
  },
  { 
    id: '02', 
    name: steps.APPARTMENT_SELECTION, 
    description: 'Select your preferred appartment', 
    href: '#', 
    status: step_status.UPCOMING 
  },
  { 
    id: '03', 
    name: steps.ROOM_SELECTION, 
    description: 'Select your preferred room', 
    href: '#', 
    status: step_status.UPCOMING 
  },
  { 
    id: '04', 
    name: steps.PAYMENT, 
    description: 'Summary and Payment', 
    href: '#',  
    status: step_status.UPCOMING 
  }
]; 

const courses = [ 
  { id: 1, value: "BCOM" }, 
  { id: 2, value: "BSC" }, 
  { id: 3, value: "MSC" }
];

const years = [ 
  { id: 1, value: 1 }, 
  { id: 2, value: 2 }, 
  { id: 3, value: 3 }, 
];

const FloorSelection = ({ setBookByCourse, bookByCourse, setSelectedFloor, selectedFloor, selectedYear, selectedCourse, setSelectedCourse, setSelectedYear, onProceed, availableBeds }) => { 
  return ( 
    <div className="flex flex-col lg:flex-row w-full items-center">
      <div className="w-full flex mr-3">
        <img src='/correct_icon.png' className='w-10 h-10 mr-3'/>
        <div className="">
          <h1 className='font-semibold text-2xl mb-2'>Select the floor as per your preference</h1>
          <p className='text-md text-gray-600 mb-3'>after selection, click on the proceed button to get directed towards the next step of apartment selection</p>
          
          <div className="relative flex items-start mb-3">
            <div className="flex h-5 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={bookByCourse}
                onChange={e => setBookByCourse(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                Book by course
              </label>
            </div>
          </div>
          {
            bookByCourse && 
            <div className='flex mb-3'> 
              <div className='w-full mr-2'> 
                <SelectMenu 
                  label="Select course"
                  options={courses}
                  value={selectedCourse}
                  onChange={change => setSelectedCourse(change.value)}
                />
              </div>
              <div  className='w-full'> 
                <SelectMenu 
                  label="Select year"
                  options={years}
                  value={selectedYear}
                  onChange={change => setSelectedYear(change.value)}
                />
              </div>
            </div>
          }


          <div className="w-full lg:hidden">
            {
              availableBeds !== {} && Object.keys(availableBeds).map(key => (
                <div className='h-[60px] mb-3'> 
                  <div className='w-full items-center'>
                    Beds available: {availableBeds[key]}
                  </div> 
                  <div 
                    className={`w-full py-3 mr-3 bg-gray-300 hover:bg-green-200 cursor-pointer flex items-center justify-center ${selectedFloor !== null && selectedFloor === key && 'bg-green-400 hover:bg-green-400'} active:bg-green-400`} 
                    onClick={() => setSelectedFloor(key)}
                  >
                    Floor {key}  
                  </div>  

                </div> 
              ))
            } 
          </div>

          <button
            type="button"
            className="mt-3 items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => selectedFloor && onProceed()}
          >
            Proceed
          </button>
        </div>
      </div>

      <div className="h-full w-full hidden lg:block">
        {
          availableBeds !== {} && Object.keys(availableBeds).map(key => (
            <div className='flex h-[60px] mb-2'> 
              <div 
                className={`h-full w-full mr-3 bg-gray-300 hover:bg-green-200 cursor-pointer flex items-center justify-center ${selectedFloor !== null && selectedFloor === key && 'bg-green-400 hover:bg-green-400'} active:bg-green-400`} 
                onClick={() => setSelectedFloor(key)}
              >
                Floor {key}  
              </div>  
              <div className='h-full w-full flex items-center'>
                Beds available: {availableBeds[key]}
              </div> 
            </div> 
          ))
        } 
      </div>
    </div>
  )
}

const AppartmentSelection = ({ listing, setSelectedAppartment, selectedFloor, selectedAppartment, onProceed, onBack }) => {  
  return ( 
    <div className="flex flex-col lg:flex-row w-full items-center">
      <div className="w-full flex">
        <img src='/correct_icon.png' className='w-10 h-10 mr-3'/>
        <div className="">
          <h1 className='font-semibold text-2xl mb-2'>Select the Appartment as per your preference</h1>
          <p className='text-md text-gray-600 mb-3'>after selection, click on the proceed button to get directed towards the next step of room selection</p>

          <div className="w-full lg:hidden mb-3">
            <div className='border border-gray-300 w-full grid grid-cols-3 gap-4 p-5'>
              { 
                listing && (listing.floors.find(floor => floor.floor_number === selectedFloor.toString())).appartments.map((appartment,index) => ( 
                    <div 
                      className={`bg-gray-300 w-full h-[50px] flex hover:bg-green-200 cursor-pointer items-center justify-center ${selectedAppartment !== null && selectedAppartment.appartment_number === appartment.appartment_number && 'bg-green-400 hover:bg-green-400'} active:bg-green-400`}
                      onClick={() => setSelectedAppartment({appartment_number: appartment.appartment_number, id: appartment.id, floor_plan: appartment.floor_plan })}
                    >
                      {appartment.appartment_number}
                    </div>
                ))
              }
            </div> 
          </div>

          <div className='flex'>
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => onBack(steps.FLOOR_SELECTION)}
            >
              Back
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={onProceed}
            >
              Proceed
            </button>
          </div>

        </div>
      </div>

      <div className="h-full w-full hidden lg:block">
        <div className='border border-gray-300 w-full h-full grid grid-cols-3 gap-4 p-5'>
          { 
            listing && (listing.floors.find(floor => floor.floor_number === selectedFloor.toString())).appartments.map((appartment,index) => ( 
                <div 
                  className={`bg-gray-300 w-full h-[50px] flex hover:bg-green-200 cursor-pointer items-center justify-center ${selectedAppartment !== null && selectedAppartment.appartment_number === appartment.appartment_number && 'bg-green-400 hover:bg-green-400'} active:bg-green-400`}
                  onClick={() => setSelectedAppartment({appartment_number: appartment.appartment_number, id: appartment.id, floor_plan: appartment.floor_plan })}
                >
                  {appartment.appartment_number}
                </div>
            ))
          }
        </div> 
      </div>
    </div>
  )
}

const BedSelection = ({ bedsInAppartment, beds, selectedAppartment, selectedBed, setSelectedBed, onProceed, onBack, lockBed }) => { 
  console.log("Beds in appartment: ", bedsInAppartment); 
  return ( 
    <div className="flex flex-col lg:flex-row w-full items-center">
      <div className="w-full flex">
        <img src='/correct_icon.png' className='w-10 h-10 mr-3'/>
        <div className="">
          <h1 className='font-semibold text-2xl mb-2'>Select the room as per your preference</h1>
          <p className='text-md text-gray-600 mb-3'>after selection, click on the proceed button to get directed towards the next step of payment</p>

          <div className="w-full lg:hidden mb-3">
            <FloorPlanTest 
              floor_plan={selectedAppartment.floor_plan} 
              beds={bedsInAppartment} 
              selectedBed={selectedBed} 
              setSelectedBed={setSelectedBed}
            />
          </div>

          <div className='flex'>
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => onBack(steps.APPARTMENT_SELECTION)}
            >
              Back
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => { 
                onProceed(); 
                lockBed(); 
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-full hidden lg:block">
        <FloorPlanTest 
          floor_plan={selectedAppartment.floor_plan} 
          beds={bedsInAppartment} 
          selectedBed={selectedBed} 
          setSelectedBed={setSelectedBed}
        />
      </div>
    </div>
  )
}

const Payment = ({ loading, selectedFloor, selectedAppartment, selectedBed, onProceed, completePayment, onBack }) => { 
  return ( 
    <div className="flex w-full h-full items-center min-h-[50vh]">
      <div className="flex m-auto">
        <img src='/correct_icon.png' className='w-10 h-10 mr-3'/>
        <div className="">
          <h1 className='font-semibold text-2xl mb-2'>Gaurav Bhatena</h1>
          <h2 className='font-semibold text-xl mb-2'></h2>
          <div className='flex mb-2'>
            <p className='mr-2'> 
              <span className='font-semibold'>Gender: </span> Male
            </p>
            {/* <p className='mr-2'> 
              <span className='font-semibold'>Age: </span> 22
            </p>
            <p className='mr-2'> 
              <span className='font-semibold'>College: </span> NMIMS
            </p> */}
          </div>
          
          <p className='mb-2'> 
            <span className='font-semibold'>Term: </span> 12 Months | 1 Academic year
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Property: </span> Ganga Nivas
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Floor: </span> {selectedFloor || '__'}
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Appartment No: </span> {selectedAppartment.appartment_number || "__"} 
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Bed No: </span> {selectedBed || '__'}
          </p>

          <div className='flex flex-col lg:flex-row'>
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => onBack(steps.ROOM_SELECTION)}
            >
              Back
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => { 
                onProceed(); 
                completePayment(); 
              }}
            >
              <span className='mr-2'>
                Proceed to payment
              </span>
              {
                loading && 
                <svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              }
          </button>
          </div>
          {/* <p className='text-md text-gray-600 mb-3'>after selection, click on the proceed button to get directed towards the next step of apartment selection</p> */}
          
        </div>
      </div>
    </div>
  )
}

export default function booking() { 
    const router = useRouter();
    const { isReady } = router; 
    const { id } = router.query; 
    const { getListing, updateListing, availableBeds, getBeds, createPaymentSession, updateBed } = useApi();
    const [listing, setListing] = useState({}); 
    const [availableBedsOnFloor, setAvailableBedsOnFloor] = useState({}); 
    const user = useAuth.user; 

    useEffect(() => { 
        if(isReady){
            console.log("listing id: ", id); 
            fetchListing(id); 
        }
    }, [isReady]); 

    const fetchListing = async (id) => { 
        const Listing = await getListing(id); 
        const { result } = await availableBeds(id); 
        
        console.log("Available beds on each floor: ", result);
        console.log("listing retrieved in booking: ", Listing);
        
        setAvailableBedsOnFloor(result);
        setListing(Listing); 
    }

    const [stepperState, setStepperState] = useState(stepper_data); 
    const [currentStep, setCurrentStep] = useState(steps.FLOOR_SELECTION);
    const [selectedFloor, setSelectedFloor] = useState(""); 
    const [selectedAppartment, setSelectedAppartment] = useState({}); 
    const [selectedBed, setSelectedBed] = useState(""); 
    const [bedsInAppartment, setBedsInAppartment] = useState([]); 
    const [selectedCourse, setSelectedCourse] = useState("BCOM"); 
    const [selectedYear, setSelectedYear] = useState("1"); 
    const [bookByCourse, setBookByCourse] = useState(false); 
    const [loading, setLoading] = useState(false); 

    useEffect(() => { 
      if(currentStep === steps.ROOM_SELECTION) { 
        fetchBeds(); 
      }
    }, [currentStep])

    const onProceed = () => { 
        const stepper_state = [...stepperState]; 
        console.log("current state is: ", stepper_state); 

        const current_step_index = stepper_state.findIndex(step => step.name === currentStep); 
        console.log("Current step index: ", current_step_index); 

        // set the next step (make sure not to increment step index beyond last step )
        const next_step_index = current_step_index + 1 < stepperState.length ? current_step_index + 1 : stepperState.length - 1;  
        console.log("Next step index: ", next_step_index); 

        const current_step = stepper_state[current_step_index]; 
        const next_step = stepper_state[next_step_index]; 

        // update the state of the current step 
        if(current_step.status !== step_status.COMPLETE) { 
            current_step.status = step_status.COMPLETE; 
            stepper_state[current_step_index] = current_step;
            console.log("Current step state updated to: ", current_step); 
        }

        // update the state of next step 
        if(next_step.status !== step_status.COMPLETE){ 
            next_step.status = step_status.CURRENT;  
            stepper_state[next_step_index] = next_step; 
            console.log("Next step state updated to: ", next_step); 
        }

        setCurrentStep(next_step.name); 
        setStepperState(stepper_state); 
    }; 


    const onBack = (prev_step) => { 
      setCurrentStep(prev_step); 
    };

    const completePayment = async () => { 
      setLoading(true); 

      const create_order_response = await createPaymentSession({ 
        user: user.id, 
        appartment: selectedAppartment.id, 
        bed: selectedBed, 
        course: bookByCourse ? selectedCourse : "", 
        year: bookByCourse ? selectedYear : "",
        floor: selectedFloor, 
        listing: id, 
        amount: listing.price
      }); 

      // router.push('/order-history');
      console.log("Payment session response: ", create_order_response);

      window.location.href = create_order_response; 

      setLoading(false);
    }

    const fetchBeds = async () => { 
      const beds = await getBeds(selectedAppartment.id); 
      console.log("Got beds for the selected appartment: ", beds); 
      
      setBedsInAppartment(
        beds.map(bed => ({ 
          bb: bed.bounding_box, 
          id: bed.id, 
          available: bed.available, 
          locked: bed.locked, 
          deleted: bed.deleted 
        })
      )); 
    }

    const lockBed = async () => { 
      const update_bed_response = await updateBed(selectedBed, { locked: true, locked_by: user.id }); 
      console.log("update bed response: ", update_bed_response); 
    }

    return (
        <Layout>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3'> 
                <div className='border border-gray-200 mb-3'> 
                    <Stepper steps={stepperState}/> 
                </div>
                { 
                    currentStep === steps.FLOOR_SELECTION && 
                    <FloorSelection 
                      selectedFloor={selectedFloor}
                      setSelectedFloor={setSelectedFloor}
                      onProceed={onProceed}
                      availableBeds={availableBedsOnFloor}
                      selectedYear={selectedYear}
                      setSelectedYear={setSelectedYear}
                      selectedCourse={selectedCourse}
                      setSelectedCourse={setSelectedCourse}
                      bookByCourse={bookByCourse}
                      setBookByCourse={setBookByCourse}
                    />
                    || 
                    currentStep === steps.APPARTMENT_SELECTION && 
                    <AppartmentSelection  
                      listing={listing}   
                      selectedFloor={selectedFloor} 
                      selectedAppartment={selectedAppartment}
                      setSelectedAppartment={setSelectedAppartment}
                      onProceed={onProceed}
                      availableBeds={availableBedsOnFloor}
                      onBack={onBack}
                    /> 
                    || 
                    currentStep === steps.ROOM_SELECTION && 
                    <BedSelection 
                      // floor_plan={floor_plan} 
                      // beds={beds}
                      selectedBed={selectedBed}
                      selectedFloor={selectedFloor}
                      selectedAppartment={selectedAppartment}
                      setSelectedBed={setSelectedBed}
                      onProceed={onProceed}
                      bedsInAppartment={bedsInAppartment}
                      onBack={onBack}
                      lockBed={lockBed}
                    /> 

                    || 
                    currentStep === steps.PAYMENT && 
                    <Payment 
                      selectedFloor={selectedFloor}
                      selectedAppartment={selectedAppartment}
                      selectedBed={selectedBed}
                      onProceed={onProceed}
                      completePayment={completePayment}
                      loading={loading}
                      onBack={onBack}
                    /> 
                    || 
                    <></>
                }
            </div>
        </Layout>
    )
}
import { useState, useRef, useEffect  } from 'react'
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Stepper from '../../components/Stepper'; 
import { step_status, steps } from '../../constants';
import FloorPlanTest from '../../components/Booking/FloorPlanTest'; 
import useApi from '../../hooks/useApi';
import SelectMenu from '../../components/SelectMenu'; 
import useAuth from '../../hooks/useAuth';
import Modal from '../../components/common/Modal';
import VirtualTour from '../../components/common/VirtualTour';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const colleges = {
  "Mukesh Patel School of Tech": { 
      courses: [
          'B.Tech', 
          'MBA.Tech',
          'MCA', 
          'M.Tech', 
          'B.Tech Integrated'
      ],
      years: ['1', '2', '3', '4', '5']
  }, 
  "NMIMS": { 
      courses: [
          'MBA - Core', 
          'MBA Pharmaceuticals Management',
          'MBA (Decision Sciences & Analytics)',
          'MBA Law',
          'Master of Business Adm Part Time',
          'Master of Bus Adm Part Time (SE)/Diploma in SE',
          'MBA (Real Estate Management)',
          'MBA Entrepreneurship & Family Business',
          'MBA Entrepreneurship',
          'Integrated MBA(E & FB)',
          'Bachelor of Busi Adm (Entrepreneurship & Family Business )',
          'Bachelor of Business Mgmt & Marketing',
          'Bachelor of Architecture',
          'Master of Architecture',
          'B.A. (Hon.) Interior Envt. and Design',
          'Master of Business Administration (Business Analytics)',
          'MBA (Digital Transformation)',
          'B.Des (Humanising Technology)',
          'BBA',
          'B.COM (HONS.)',
          'B.SC.FINANCE',
          'M.SC.FINANCE',
          'B.A.(Hons) Liberal Arts',
          'BBA In Branding & Advertising',
          'Master of Law (LL.M)',
          'BA LLB/BBA LLB',
          'Master of Law (LL.M)',
          'MBA Common',
          'M.Sc. Statistics & Data Science',
          'M.Sc. Statistics',
          'M.Sc. Ph.D. Biological Sciences (Integrated prog)',
          'M.Sc. Biological Sciences',
          'Master of Physiotherapy',
          'M.Sc. Chemistry (Analytical & Organic Chemistry)',
          'M.Sc. Ph.D. Chemistry (Analytical & Organic Chemistry) (Int. Prog)',
          'B.Sc. (Applied Statistics & Analytics)',
          '5-Year Integrated M.Sc. in Biomedical Science',
          'M.Sc. (Applied Statistics & Analytics)',
          'M.Sc. (Applied Psychology)',
          'B.Sc. (Applied Psychology)',
          'B.Sc. (Data Science)',
          'B.Sc. (Artificial Intelligence)',
          'B.Sc. (Animation and VFX)',
          'B. Pharm',
          'B. Pharm+MBA',
          'D. Pharm',
          'M.Pharm (Ind. Pharmacy)+MBA (PT & HCM)',
          'M.Pharm (Pharmaceutics)+MBA (PT & HCM)',
          'M.Pharm (Pharm Tech)+MBA (PT & HCM)',
          'M.Pharm (Pharm QA)+MBA (PT & HCM)',
          'B.Sc. Economics',
          'M.Sc. Economics',
          'Bachelor of Science in Agriculture',
          'BBA-Hospitality Operations & Management',
          'Bachelor of Science in Mathematics (Honours)',
          'B.A Music (Indian Music)',
          'Bachelor of Performing Arts (Music)',
          'B.A Music (Western Contemporary Music)'
      ],
      years: ['1', '2', '3', '4', '5']
  },
  "Mithibai": { 
      courses: [
          'B.Sc. Biotechnology', 
          'Accountancy',
          'B. Com. Banking & Insurance', 
          'B. Com. Financial Markets', 
          'B. Com. Accounting & Finance',
          'B.M.S. (Bachelor in Management Studies',
          'B. Sc. Computer Science',
          'B.A. Sociology',
          'B.A. Politics',
          'B.A. Philosophy',
          'Business Law',
          'B.Sc. Statistics',
          'B.Sc. Mathematics', 
          'Environmental Studies', 
          'B.Sc. Microbiology',
          'B.Sc. Biochemistry',
          'B.Sc. Botany',
          'B.Sc. Zoology',
          'B.Sc. Physics',
          'B.Sc Chemistry',
          'Business Economics',
          'Bachelor of Commerce (B.Com)',
          'Bachelor of Mass Media (B. M. M)',
          'B.A. Hindi',
          'B.A. Gujarati',
          'B.A. English',
          'B. A. Psychology',
          'Junior College (Science)',
          'Junior College (Commerce)',
          'Junior College (Arts)'
      ],
      years: ['1', '2', '3']
  }, 
  "NM": {
      courses: [
          'Bachelor of Commerce (B.Com)',
          'Bachelor of Mass Media (B. M. M)',
          'Junior College (Science)',
          'Junior College (Commerce)',
          'Junior College (Arts)',
          'Bachelor of Management Studies (BMS)'
      ],
      years: ['1', '2', '3']
  },
  "other": { 
      courses: [
          'Junior College',
          'Diploma', 
          'Under-graduate', 
          'Post-graduate', 
          'Phd'
      ],
      years: ['1', '2', '3', '4', '5']
  }
};

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

// const colleges = [
//   { id: 1, value: 'NMIMS' }, 
//   { id: 2, value: 'Mithibai' }, 
// ]

// const courses = [ 
//   { id: 1, value: "BCOM" }, 
//   { id: 2, value: "BSC" }, 
//   { id: 3, value: "MSC" }
// ];

// const years = [ 
//   { id: 1, value: 1 }, 
//   { id: 2, value: 2 }, 
//   { id: 3, value: 3 }, 
// ];

const FloorSelection = ({ setBookByCourse, bookByCourse, setSelectedFloor, selectedFloor, selectedYear, selectedCourse, setSelectedCourse, selectedCollege, setSelectedCollege, setSelectedYear, onProceed, availableBeds, studentsStatsFloor }) => { 
  console.log("Availabled beds: ", availableBeds);
  console.log("Students on floor: ", studentsStatsFloor);
  
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
            <>
              <div> 
                <label htmlFor="College" className="block text-sm font-medium leading-6 text-gray-900">
                  Select College
                </label>
                <select
                  id="College"
                  name="College"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue=""
                  placeholder='Select College'
                  onChange={e => setSelectedCollege(e.target.value)}
                >
                  {
                    Object.keys(colleges).map(key => ( 
                      <option key={key} value={key}>{key}</option>
                    ))
                  }
                </select>
              </div>
              {
                selectedCollege && 
                <div> 
                  <label htmlFor="College" className="block text-sm font-medium leading-6 text-gray-900">
                    Select Course
                  </label>
                  <select
                    id="College"
                    name="College"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue=""
                    placeholder='Select College'
                    onChange={e => setSelectedCourse(e.target.value)}
                  >
                    {
                      colleges[selectedCollege].courses.map(course => ( 
                        <option key={course} value={course}>{course}</option>
                      ))
                    }
                  </select>
                </div>
              }
              {
                selectedCollege && 
                <div> 
                  <label htmlFor="College" className="block text-sm font-medium leading-6 text-gray-900">
                    Select Year
                  </label>
                  <select
                    id="College"
                    name="College"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue=""
                    placeholder='Select College'
                    onChange={e => setSelectedYear(e.target.value)}
                  >
                    {
                      colleges[selectedCollege].years.map(year => ( 
                        <option key={year} value={year}>{year}</option>
                      ))
                    }
                  </select>
                </div>
              }
            </>
            // <div className='flex mb-3'> 
            //   <div  className='w-full mr-2'> 
            //     <SelectMenu 
            //       label="Select College"
            //       options={colleges}
            //       value={selectedCollege}
            //       onChange={change => setSelectedCollege(change.value)}
            //     />
                
            //   </div>
            //   <div className='w-full mr-2'> 
            //     <SelectMenu 
            //       label="Select course"
            //       options={courses}
            //       value={selectedCourse}
            //       onChange={change => setSelectedCourse(change.value)}
            //     />
            //   </div>
            //   <div  className='w-full'> 
            //     <SelectMenu 
            //       label="Select year"
            //       options={years}
            //       value={selectedYear}
            //       onChange={change => setSelectedYear(change.value)}
            //     />
            //   </div>
            // </div>
          }


          <div className="w-full lg:hidden border border-gray-300 p-5">
            {
              availableBeds !== {} && Object.keys(availableBeds).map(key => (
                <div className='mb-3'> 
                  <div className={`w-full items-center ${availableBeds[key] == 0 && 'text-red-500'}`}>
                    Beds available: {availableBeds[key]}
                  </div> 
                  <div className='text-sm text-gray-600 mb-2'>
                    { 
                      bookByCourse && Object.keys(studentsStatsFloor).length > 0 && studentsStatsFloor[key] && availableBeds[key] > 0 &&
                      studentsStatsFloor[key] + ` ${selectedCollege} year ${selectedYear} student${studentsStatsFloor[key] > 1 && 's' || ''}, from ${selectedCourse}`
                    }
                  </div>
                  <div 
                    className={`h-[60px] w-full py-3 mr-3 bg-gray-300 hover:bg-green-200 cursor-pointer flex items-center justify-center ${selectedFloor !== null && selectedFloor === key && 'bg-green-400 hover:bg-green-400'} active:bg-green-400 ${availableBeds[key] == 0 && ' pointer-events-none bg-red-100 text-red-500'}`} 
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

      <div className="w-full hidden lg:block border border-gray-300 p-5">
        {
          availableBeds !== {} && Object.keys(availableBeds).map(key => (
            <div className='flex mb-2 items-center'> 
              <div 
                className={`h-[60px] w-full mr-3 bg-gray-300 hover:bg-green-200 cursor-pointer flex items-center justify-center ${selectedFloor !== null && selectedFloor === key && 'bg-green-400 hover:bg-green-400'} active:bg-green-400 ${availableBeds[key] == 0 && ' pointer-events-none bg-red-100 text-red-500'}`} 
                onClick={() => setSelectedFloor(key)}
              >
                Floor {key}  
              </div>  
              
              <div className='w-full'>
                <div className={availableBeds[key] == 0 && 'text-red-500'}>
                  Beds available: {availableBeds[key]}
                </div> 
                <div className='text-sm text-gray-600'>
                  { 
                    bookByCourse && Object.keys(studentsStatsFloor).length > 0 && studentsStatsFloor[key] && availableBeds[key] > 0 &&
                    studentsStatsFloor[key] + ` ${selectedCollege} year ${selectedYear} student${studentsStatsFloor[key] > 1 && 's' || ''}, from ${selectedCourse}`
                  }
                </div>
              </div>
            </div> 
          ))
        } 
      </div>
    </div>
  )
}

const AppartmentSelection = ({ listing, setSelectedAppartment, selectedFloor, selectedAppartment, onProceed, onBack, bookByCourse, selectedCollege, selectedCourse, selectedYear, studentStats }) => {  
  console.log("Student stats: ", studentStats);
  console.log("Length: ", Object.keys(studentStats).length); 

  return ( 
    <div className="flex flex-col lg:flex-row w-full items-center">
      <div className="w-full flex">
        <img src='/correct_icon.png' className='w-10 h-10 mr-3'/>
        <div className="">
          <h1 className='font-semibold text-2xl mb-2'>Select the Appartment as per your preference</h1>
          <p className='text-md text-gray-600 mb-3'>after selection, click on the proceed button to get directed towards the next step of room selection</p>

          
          <div className="w-full lg:hidden mb-3">
            <h1>
              {
                bookByCourse && `College: ${selectedCollege}, Course: ${selectedCourse}, Year: ${selectedYear}`
              }
            </h1>
            <div className="border border-gray-300 p-5">
              { 
                <h1 className='mb-2'>FLOOR NUMBER: {selectedFloor}</h1>
              }
              <div className='w-full grid grid-cols-3 gap-4'>
                { 
                  listing && (listing.floors.find(floor => floor.floor_number === selectedFloor.toString())).appartments.map((appartment,index) => ( 
                      <div 
                        className={`relative bg-gray-300 w-full h-[50px] flex hover:bg-green-200 cursor-pointer items-center justify-center ${selectedAppartment !== null && selectedAppartment.appartment_number === appartment.appartment_number && 'bg-green-400 hover:bg-green-400'} active:bg-green-400`}
                        onClick={() => setSelectedAppartment({appartment_number: appartment.appartment_number, id: appartment.id, floor_plan: appartment.floor_plan, walkthrough_url: appartment.walkthrough_url })}
                      >
                        {
                          bookByCourse && Object.keys(studentStats).length > 0 &&
                          <span className='px-2 py-1 text-xs bg-green-200 text-green-800 absolute right-[-10px] top-[-10px] rounded-full'>
                            {
                              `${studentStats[selectedFloor][appartment.appartment_number]} student${studentStats[selectedFloor][appartment.appartment_number] > 0 && 's' || ''}`
                            }
                          </span>
                        }
                        {appartment.appartment_number}
                      </div>
                  ))
                }
              </div> 
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
              onClick={() => Object.keys(selectedAppartment).length > 0 && onProceed()}
            >
              Proceed
            </button>
          </div>

        </div>
      </div>


      <div className='h-full w-full hidden lg:block'>
        <h1>
          {
            bookByCourse && `College: ${selectedCollege}, Course: ${selectedCourse}, Year: ${selectedYear}`
          }
        </h1>
        <div className="border border-gray-300 p-5">
          { 
            <h1 className='mb-2'>FLOOR NUMBER: {selectedFloor}</h1>
          }
          <div className='w-full h-full grid grid-cols-3 gap-4'>
            { 
              listing && (listing.floors.find(floor => floor.floor_number === selectedFloor.toString())).appartments.map((appartment,index) => ( 
                <div 
                  className={`relative bg-gray-300 w-full h-[50px] flex hover:bg-green-200 cursor-pointer items-center justify-center ${selectedAppartment !== null && selectedAppartment.appartment_number === appartment.appartment_number && 'bg-green-400 hover:bg-green-400'} active:bg-green-400`}
                  onClick={() => setSelectedAppartment({appartment_number: appartment.appartment_number, id: appartment.id, floor_plan: appartment.floor_plan, walkthrough_url: appartment.walkthrough_url })}
                >
                  {
                    bookByCourse && Object.keys(studentStats).length > 0 &&
                    <span className='px-2 py-1 text-xs bg-green-200 text-green-800 absolute right-[-10px] top-[-10px] rounded-full'>
                      {
                        `${studentStats[selectedFloor][appartment.appartment_number]} student${studentStats[selectedFloor][appartment.appartment_number] > 0 && 's' || ''}`
                      }
                    </span>
                  }
                  {appartment.appartment_number}
                </div>
              ))
            }
          </div> 
        </div>
      </div>

    </div>
  )
}

const BedSelection = ({ setVirtualTourOpen, bedsInAppartment, beds, selectedAppartment, selectedBed, setSelectedBed, onProceed, onBack, lockBed }) => { 
  console.log("Selected appartment: ", selectedAppartment);
  console.log("Beds in appartment: ", bedsInAppartment); 

  return ( 
    <div className="flex flex-col lg:flex-row w-full items-center">
      <div className="w-full flex">
        <img src='/correct_icon.png' className='w-10 h-10 mr-3'/>
        <div className="">
          <h1 className='font-semibold text-2xl mb-2'>Select the room as per your preference</h1>
          <p className='text-md text-gray-600 mb-3'>after selection, click on the proceed button to get directed towards the next step of payment</p>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-3"
            onClick={() => setVirtualTourOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            Take a 360 virtual tour
          </button>

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
              onClick={async () => { 
                if(Object.keys(selectedBed).length > 0) { 
                  await lockBed(); 
                  onProceed(); 
                }
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

const Payment = ({ loading, selectedFloor, selectedAppartment, selectedBed, onProceed, completePayment, onBack, user, listing, selectedCollege, selectedCourse, selectedYear }) => { 
  const [agree, setAgree] = useState(false); 
  console.log("Selected bed: ", selectedBed);

  return ( 
    <div className="flex w-full h-full items-center min-h-[50vh]">
      <div className="flex m-auto">
        <img src='/correct_icon.png' className='w-10 h-10 mr-3'/>
        <div className="">
          <h1 className='font-semibold text-2xl mb-2'>{user.firstname.capitalize() + " " + user.lastname.capitalize()}</h1>
          <h2 className='font-semibold text-xl mb-2'></h2>
          <div className='flex mb-2'>
            <p className='mr-2'> 
              <span className='font-semibold'>Hostel Type: </span> {listing.gender}
            </p>
            {/* <p className='mr-2'> 
              <span className='font-semibold'>Age: </span> 22
            </p>
            <p className='mr-2'> 
              <span className='font-semibold'>College: </span> NMIMS
            </p> */}
          </div>
          
          <p className='mb-2'> 
            <span className='font-semibold'>Term: </span> 1 Academic year
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Property: </span> {listing.name}
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Floor: </span> {selectedFloor || '__'}
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Appartment No: </span> {selectedAppartment.appartment_number || "__"} 
          </p>

          <p className='mb-2'> 
            <span className='font-semibold'>Bed No: </span> {selectedBed.bed_no || '__'}
          </p>
          
          {
            selectedCollege && 
            <p className='mb-2'> 
              <span className='font-semibold'>College: </span> {selectedCollege}
            </p>
          }
          {
            selectedCourse && 
            <p className='mb-2'> 
              <span className='font-semibold'>Course: </span> {selectedCourse}
            </p>
          }
          {
            selectedYear && 
            <p className='mb-2'> 
              <span className='font-semibold'>Year: </span> {selectedYear}
            </p>
          }

          <div className="relative flex items-start mb-3">
            <div className="flex h-5 items-center">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={agree}
                onChange={e => setAgree(e.target.checked)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="comments" className="font-medium text-gray-700">
                I agree to the <a href='/terms-and-conditions' target='_blank' className='text-blue-300 hover:text-blue-400'>terms and conditions</a>
              </label>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row'>
            {/* <button
              type="button"
              className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => onBack(steps.ROOM_SELECTION)}
            >
              Back
            </button> */}
           <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!agree}
              onClick={() => { 
                onProceed(); 
                completePayment(); 
              }}
            >
              Proceed to Payment
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
    const { getListing, updateListing, availableBeds, getBeds, createPaymentSession, updateBed, studentsByListing } = useApi();
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
    const [selectedCollege, setSelectedCollege] = useState("NMIMS");
    const [selectedCourse, setSelectedCourse] = useState("BCOM"); 
    const [studentStats, setStudentStats] = useState({});
    const [studentsStatsFloor, setStudentStatsFloor] = useState({});
    const [selectedYear, setSelectedYear] = useState("1"); 
    const [bookByCourse, setBookByCourse] = useState(false); 
    const [loading, setLoading] = useState(false); 
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [bookingError, setBookingError] = useState(""); 
    const [virtualTourOpen, setVirtualTourOpen] = useState(false); 
    const [lockErrorModalOpen, setLockErrorModalOpen] = useState(false); 

    useEffect(() => { 
      if(bookByCourse) { 
        getStudentStats(); 
      }
    }, [bookByCourse, selectedCollege, selectedCourse, selectedYear]);

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

    const getStudentStats = async () => { 
      const stats = await studentsByListing({ 
        listing_id: id, 
        year: selectedYear, 
        course: selectedCourse, 
        college: selectedCollege
      }); 
      const result = {};

      for (const key in stats) {
        result[key] = Object.values(stats[key]).reduce((acc, val) => {
          if (typeof val === 'number') {
            return acc + val;
          }
          return acc;
        }, 0);
      }

      setStudentStats(stats);
      setStudentStatsFloor(result);
    }

    const onBack = (prev_step) => { 
      setCurrentStep(prev_step); 
    };

    const completePayment = async () => { 
      setLoading(true); 

      const create_order_response = await createPaymentSession({ 
        user: user.id, 
        appartment: selectedAppartment.id, 
        bed: selectedBed.id, 
        course: bookByCourse ? selectedCourse : "", 
        year: bookByCourse ? selectedYear : "",
        college: bookByCourse ? selectedCollege : "",
        floor: selectedFloor, 
        listing: id, 
        amount: listing.price
      }); 
      console.log("Payment session response: ", create_order_response);

      if(typeof create_order_response === 'object') { 
        console.log("Error occured while booking: ", create_order_response.errors); 
        setBookingError(create_order_response.errors[0].message);
        setErrorModalOpen(true);
      }
      else{ 
        window.location.href = create_order_response; 
      }

      setLoading(false);
    }

    const handleErrorModalClose = () => { 
      setErrorModalOpen(false); 
      setBookingError("");
      router.push('/listings'); 
    }

    const fetchBeds = async () => { 
      const beds = await getBeds(selectedAppartment.id); 
      console.log("Got beds for the selected appartment: ", beds); 
      
      setBedsInAppartment(
        beds.map(bed => ({ 
          bb: bed.bounding_box, 
          id: bed.id, 
          bed_no: bed.bed_no,
          available: bed.available, 
          locked: bed.locked, 
          deleted: bed.deleted 
        })
      )); 
    }

    const lockBed = async () => { 
      const update_bed_response = await updateBed(selectedBed.id, { locked: true, locked_by: user.id }); 
      console.log("update bed response: ", update_bed_response); 

      if("errors" in update_bed_response) { 
        setLockErrorModalOpen(true); 
      }
    }

    const handleLockErrorModalClose = () => { 
      setLockErrorModalOpen(false); 
      router.push('/listings'); 
    }

    return (
      <Layout>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3'> 
          <Modal title={bookingError} open={errorModalOpen} onClose={handleErrorModalClose}>
            <div className='mb-3'> 
              <span>Please return to the listing page to make a new booking.</span>
            </div>
            <button
              type='button'
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600  px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-indigo-700 bg-[#ffcc29] hover:bg-[#fad45a]"
              onClick={handleErrorModalClose}
            >
              Ok
            </button>
          </Modal>

          <Modal title="Cannot book bed" open={lockErrorModalOpen} onClose={handleLockErrorModalClose}>
            <div className='mb-3'> 
              <span>The bed you are trying to book has been reserved by another user. Please return to the listing page to make a new booking</span>
            </div>
            <button
              type='button'
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600  px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-indigo-700 bg-[#ffcc29] hover:bg-[#fad45a]"
              onClick={handleLockErrorModalClose}
            >
              Ok
            </button>
          </Modal>

          <Modal title={"360 degree virtual tour"} open={virtualTourOpen} onClose={() => setVirtualTourOpen(false)}>
            <VirtualTour 
              width={'100%'}
              height='500px' 
              virtual_tour_link={selectedAppartment.walkthrough_url || ""}
            />
          </Modal>

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
                selectedCollege={selectedCollege}
                setSelectedCollege={setSelectedCollege}
                bookByCourse={bookByCourse}
                setBookByCourse={setBookByCourse}
                studentsStatsFloor={studentsStatsFloor}
                getStudentStats={getStudentStats}
              />
              || 
              currentStep === steps.APPARTMENT_SELECTION && 
              <AppartmentSelection  
                listing={listing}   
                selectedFloor={selectedFloor} 
                selectedAppartment={selectedAppartment}
                setSelectedAppartment={setSelectedAppartment}
                onProceed={onProceed}
                studentStats={studentStats}
                availableBeds={availableBedsOnFloor}
                onBack={onBack}
                bookByCourse={bookByCourse}
                selectedCourse={selectedCourse}
                selectedCollege={selectedCollege}
                selectedYear={selectedYear}
              /> 
              || 
              currentStep === steps.ROOM_SELECTION && 
              <BedSelection 
                // floor_plan={floor_plan} 
                // beds={beds}
                setVirtualTourOpen={setVirtualTourOpen}
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
                selectedYear={selectedYear}
                selectedCourse={selectedCourse}
                selectedCollege={selectedCollege}
                selectedBed={selectedBed}
                onProceed={onProceed}
                completePayment={completePayment}
                loading={loading}
                onBack={onBack}
                user={user}
                listing={listing}
              /> 
              || 
              <></>
          }
        </div>
      </Layout>
    )
}
import React from 'react'
import Layout from '../components/Layout'

const rules = [ 
    'Accommodation is available only to out-station student as a paying guest.',
    'The PG accommodation will be cancelled if incomplete or false information is furnished.', 
    'Accommodation will be available only for one academic year. i.e. July to April / January to November, every year.',
    'Students are allowed to stay in the flat during the summer vacations by paying proportionate extra fees.',
    'Students are required to give their consent about continuing the paying guest facilities in the next year, when asked by Host. Rent for the next academic year is required to be paid in the month of April.',
    'Host reserve its right to cancel admission of undeserving students without giving any reason or shift to some other Location.',
    'Host reserves its right to increase Rent, if necessary every year.',
    'Refund is only possible in case of College Admission is cancelled or if there is any medical emergency. In both cases proper documents are required.',
    'Host will not be responsible for any mishap happening.',
    'Paying guest accommodation in premises is tentative, which depends on availability of premises .',
    'Student residing in the flat shall strictly observe all the Rules and Regulations in force from time to time. Breach of rules / regulations may invite rustication / fine',
    'Smoking, consumption of alcoholic drinks, drugs, spitting and MALE /FEMALE FRIENDS are strictly prohibited in the flat premises. Strict action will be taken against defaulter (as per rule).',
    'No guest or visitor of the inmate will be permitted to visit the premises.',
    'Every student shall be in his / her flat by 10.30 p.m. Students, the deadline for entering the premises are 10.00 pm. If he / she have to stay out after the said timing owing to any special reason, he / she must obtain prior permission from the Administrator and Parents. The application for leave of absence from the hostel shall be made in writing. Late entry will be permitted only through permission form  & call from parents.',
    "Students will not enter rooms of other students without permission of the inmates. Students should not go to other student's room after 11.00 p.m. in the night.",
    'Every case of illness and accident must be reported immediately to Host of premises.',
    'No functions or celebrations shall be organized except with the permission of the owner.',
    'Students suffering from any contagious disease will not be allowed to stay in the hostel. Decision of the Administrator in this regard will be final and binding.',
    'Allotment of the room, furniture etc. will be entirely at the discretion of the owner and no complaint in this regard will be entertained.',
    'Every student shall keep the room allotted to him neat and clean. He / She shall take proper care of the furniture and fixtures handed over to him / her. The Administrator has the right to enter and inspect the rooms at any time, even in the absence of students.',
    'All matters relating to differences among students and complaints about the servants shall be brought to the notice of the owner, who will take such action as may be necessary. No police complaint will be lodged by the students before taking prior permission from the Host.',
    'Students must switch off the lights, fans AC and Bathroom Geyser in their rooms every time they go out and take precautions to economize electricity consumption. Air-condition can be used 24×7 but it must be switched off if there is no one in the room.',
    'Charges for any damages to the property as well as to the furniture and fixtures caused by student/students negligence will be recovered from the student/students staying in the said premises.',
    'Student should not drive nails, screws etc. into the wall or doors. No repair shall be done by the students themselves. They should approach the Administrator who will arrange for repairs.',
    'PG is meant only for the use of bonafide students of that particular room. Visitors are not allowed to enter any room. They have to sit in Hall area.',
    'The Administrator did not hold themselves responsible for the safe custody of the property of the students staying in the hostel. Students should provide their own locks and should take proper care of their belongings. They should not leave the key of the room anywhere around. Administrator/Host will not be responsible for the loss of personal belongings of the students.',
    'All the facilities including additional facilities like T.V., Magazines, News paper, Internet etc., misused, shall be discontinued without given any notice and disciplinary action will be taken against the students involved.',
    'Before leaving the PG Accommodation, a student must pay all dues and hand over the charges of rooms and other material in satisfactory condition to the owner of the premises.',
    'If any student is found misbehaving and misconducting himself, he/she will be expelled from the Accommodation immediately and the Rent paid by him / her will be forfeited.',
    'Permission for night outs (only for local guardian and parent’s house) should be taken from administrator and the call by parents should be made before 8.30pm',
    'No music system is allowed in the premises',
    'Any complaint (indecent behavior/noisy) from the neighbors/society will result in severe action.',
    'Room is required to be vacated with luggage in every summer vacation.',
    'No permission to take any plates for the meal to be taken in the room. Student have to seat in a dining area only and if it’s found they have to clean it by their own self. Student will have to follow the timings of breakfast,lunch and dinner, the Request of the food beyond these timings will not be entertained.',
    'Ragging is strictly prohibited inside the premises',
    'Accommodation will also be available monthly in summer vacations.'
];

export default function TermsAndConditions() {
  return (
    <Layout>
        <h1 className='text-3xl capitalize font-semibold mx-auto max-w-7xl px-6 lg:px-8 mb-5'>Hostel Rules and policies</h1>
        <ul className='list-disc mx-auto max-w-7xl px-6 lg:px-8'>
            {rules.map(rule => ( 
                <li className='text-md text-gray-600 ml-5 mb-3'>
                    {rule}
                </li>
            ))}
        </ul>
    </Layout>
  )
}
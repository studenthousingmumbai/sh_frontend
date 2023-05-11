import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

// function Container({ className, ...props }) {
//     return (
//         <div
//             className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
//             {...props}
//         />
//     )
// }

const reviews = [
  {
    // title: 'It really works.',
    body: 'Wonderful place to stay. The managing team really goes out of their way to make sure everyone gets what they need. I was greeted with such kindness and this continued throughout my stay. I had a great time staying',
    author: 'Devanshi Vaidya ',
    rating: 5,
  },
  {
    // title: 'You need this app.',
    body: "Amazing place to stay if you're studying in NMIMS. They provide 3 meals a day and do all your laundry and ironing. It is 1 minute away from campus and is very conveniently located.",
    author: 'Krishna Kankani',
    rating: 5,
  },
  {
    // title: 'This shouldn’t be legal.',
    body: "Been here for 4 months now, very much satisfied and happy with all the facilities provided. Best thing of all is that they provide trial, they let students and parents stay before booking to experience the stay and comfort level",
    author: 'Yashasvi Agarwal',
    rating: 5,
  },
  {
    // title: 'Screw financial advisors.',
    body: 'This hostel is really comfortable, very affordable relative to others, the owners are really cool. Feels like home with delicious meals.I recommend to just look in before you decide to join others as they provide us with free trials along with food so that one finds it cozy and then decides.',
    author: 'Om Jha',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "My stay here has been very comforting. The facilities in the pg made my stay much easier. The caretakers take care of all my needs and keep the pg clean everyday. They had also given us a trial stay with our parents in the pg to know the experience.",
    author: 'Kunal Mody',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Great accommodation and hospitality by the entire team. The chefs cook really amazing food ❤️. Food is not repeated that much which is great.View from the accommodation was also good, you can see the Juhu airport. Overall great 💯",
    author: 'Ankit Gupta',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Student Housing hostels happen to be one of the finest accommodations for students to live. It's near Juhu, in Vile Parle West, Mumbai. Especially if you are planning to Study at NMIMS or Mithibai college, then this is the go-to place you should prefer to stay. Good food, clean rooms, regular housekeeping and the perfect location.",
    author: 'Prem Raval',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Very luxurious student housing truly a home away from home 5 stars!",
    author: 'Shubham More',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "It is one of the best hostels for students living in Mumbai. Offers all the necessities in price. It provides good quality food, caretaker services 24*7 and zumba classes too.",
    author: 'Vrinda Agarwal',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "This hostel is absolutely superb, the team is friendly, helpful, full of knowledge and goes the extra mile. The rooms are cleaned daily, rooms are spacious, air conditioned with all required facilities with 24*7 housekeepers. The best part is they allow a trial of 2-3 days with food and stay for us to get comfortable and then book. I think they are very keen to give the best services hence this place makes the best of hostels. ",
    author: 'Shivani Jha',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Very good place to live, good food and comfortable stay. I always refer others to this hostel, and the facilities are THE BEST!",
    author: 'Bhavya Bhasin',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Crazy rooms and reasonable prices, easily accessible with proper rules and hygiene. Best 5 years of my life. Thank you Student Housing!",
    author: 'Harsh Srivastava',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Comfortable place to stay. Would definitely recommend non-mumbaikars to avail this luxury.",
    author: 'Josna Mathews',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "I have spent a good amount of time here, people are very nice, everyone is friendly and it definitely is a very homely environment! From services to food, everything was just perfect!",
    author: 'Vaishnavi Ahuja',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Great services. Would highly recommend.",
    author: 'Khushi Kharwa',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Very good housing, would highly recommend",
    author: 'Anushka Kapoor',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Very good housing, 10/10 would recommend",
    author: 'Saakshi Mishra',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Truly amazing and very professional",
    author: 'Aan Chandra',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Hospitable environment and professional services",
    author: 'Abhinav Bhushan',
    rating: 5,
  },
  {
    // title: 'Too good to be true.',
    body: "Clean and quiet place which gives you a feeling of home away from home.",
    author: 'Niharika Singh',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-[#FBCF5F]' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        {/* <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p> */}
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32" />
      {/* bg-gradient-to-b from-gray-50 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-16"
    >
        {/* <Container> */}
        <div className='flex'>
          <div className='m-auto text-center'> 
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-full mb-3">
            Hear it from our students
            </h2>
            <div className='border-[5px] w-[60px] border-b border-brandColor text-center'></div> 
          </div>
        </div>

            {/* <p className="mt-2 text-lg text-gray-600 sm:text-center">
                Thousands of people have doubled their net-worth in the last 30 days.
            </p> */}
            <ReviewGrid />
        {/* </Container> */}
    </section>
  )
}
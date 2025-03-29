import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    name: "housekeeping",
    src: "/am-4.png",
    content: "daily professional cleaning services",
  },
  {
    name: "24x7 security",
    src: "/am-2.png",
    content: "your safety is our priority always",
  },
  {
    name: "indoor games",
    src: "/am-1.png",
    content: "entertainment zones for recreation",
  },
  {
    name: "laundry services",
    src: "/am-3.png",
    content: "steam ironing & pickup & drop services",
  },
];

const textVariantLeftToRight = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const imageVariantFadeIn = {
  hidden: { opacity: 0, translateY: "50px" },
  visible: {
    opacity: 1,
    translateY: "0px",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Example() {
  const animate_once = true;

  return (
    <div className="w-full max-h-full my-6 px-4 sm:px-16">
      <motion.div
        className="w-full h-full flex flex-col lg:flex-row items-start lg:items-center mb-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: animate_once }}
      >
        <motion.div
          className="flex lg:hidden text-start lg:text-end"
          variants={textVariantLeftToRight}
        >
          <div className="w-full mb-3 lg:pb-3">
            <h2 className="font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end">
              Need to move in with your friends?
            </h2>
            <h2 className="font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]">
              Say no more!
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={imageVariantFadeIn}
          className="w-full h-full lg:mr-3 mb-3 lg:mb-0 border-2 border-gray-200 bg-white rounded-lg p-2 shadow-lg"
        >
          <img
            className="w-full object-contain rounded-lg"
            src="/book-by-course.jpg"
            alt="book by course banner"
          />
        </motion.div>

        <motion.div className="w-full h-full">
          <motion.div
            className="hidden lg:flex text-center lg:text-end"
            variants={textVariantLeftToRight}
          >
            <div className="w-full lg:pb-3">
              <h2 className="font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end">
                Need to move in with your friends?
              </h2>
              <h2 className="font-bold text-3xl lg:text-2xl lg1:text-4xl text-start lg:text-end text-[#FBCF5F]">
                Say no more!
              </h2>
            </div>
          </motion.div>

          <motion.div className="px-3 lg:p-0" variants={textVariantLeftToRight}>
            <p className="text-xl lg1:text-3xl text-left lg:text-end text-[#A5A3A3] mb-3">
              While booking a bed, Use our newest <b>“Book by course”</b>{" "}
              feature to filter out your college & share the same room with your
              college buddies!
            </p>

            <div className="text-left lg:text-end">
              <Link href="/listings" legacyBehavior>
                <a
                  href="#"
                  className="w-[250px] inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent px-4 py-2 text-xl  text-gray-700 shadow-sm bg-[#ffcc29] hover:bg-[#fad45a] "
                >
                  Book Now
                </a>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-2 xs:grid-cols-[40%_40%] sm:grid-cols-[40%_40%] gap-6 xs:gap-8 md:grid-cols-[30%_30%] justify-center lg:grid-cols-4 md:gap-12 lg:gap-8 lg1:gap-16 lg2:gap-24 mb-10 w-full place-items-stretch py-5">
        {/* bg-[url('/am-4.png')] */}
        {features.map((ele) => (
          <div>
            <div className="relative flex items-end justify-center shadow-lg rounded-xl truncate">
              <img
                className="w-full h-full object-cover rounded-xl "
                src={ele.src}
                alt={ele.name}
              />
              <div className="absolute flex flex-col justify-center items-center py-8 px-4 bg-gradient-to-b from-transparent to-white w-full rounded-xl">
                <div className="hidden lg:block font-bold text-sm xs:text-base sm:text-lg lg1:text-xl lg2:text-2xl uppercase">
                  {ele.name}
                </div>
                <div className="hidden lg:flex items-center justify-center font-bold text-[8px] lg:leading-[0.75rem] lg1:text-[10px] lg1:leading-[0.75rem] lg2:text-xs uppercase break-normal bg-[#FBCF5F] rounded-md px-2">
                  {ele.content}
                </div>
              </div>
            </div>
            <div className="flex lg:hidden font-bold justify-center uppercase text-center text-sm xs:text-base sm:text-lg md:text-xl">
              {ele.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

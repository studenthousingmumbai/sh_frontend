export default function Example() {
    return (
      <div className="bg-white mx-auto max-w-7xl">
        <div className="py-6 px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 flex flex-col lg:flex-row justify-center items-center">
              <img className="h-6 md:h-8 lg1:h-10 lg2:h-12" src="/furniture1.png" alt="Tuple" />
              <h2 className="text-md md:text-base lg:text-xl lg1:text-2xl px-3 py-3">200+ Beds</h2>
            </div>
            <div className="col-span-1 flex flex-col lg:flex-row justify-center items-center">
              <img className="h-6 lg:h-8 lg1:h-10 lg2:h-12" src="/home-2-1.png" alt="Tuple" />
              <h2 className="text-md md:text-base lg:text-xl lg1:text-2xl px-3 py-3">20+ Hostels</h2>
            </div>
            <div className="col-span-1 flex flex-col lg:flex-row justify-center items-center">
              <img className="h-6 lg:h-8 lg1:h-10 lg2:h-12" src="/multiple-users-silhouette-1.png" alt="Tuple" />
              <h2 className="text-xs md:text-sm lg:text-xl lg1:text-2xl px-3 py-3 text-center break-normal">2467+ Happy Students</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
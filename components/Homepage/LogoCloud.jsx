export default function Example() {
    return (
      <div className="bg-white mx-auto">
        <div className="py-6 px-6 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col lg:flex-row justify-center items-center">
              <img className="h-10" src="/furniture1.png" alt="Tuple" />
              <h2 className="text-lg px-3 py-2 md:py-3 font-bold">200+ Beds</h2>
            </div>
            <div className="col-span-1 flex flex-col lg:flex-row justify-center items-center">
              <img className="h-10" src="/home-2-1.png" alt="Tuple" />
              <h2 className="text-lg px-3 py-2 md:py-3 font-bold">20+ Hostels</h2>
            </div>
            <div className="col-span-1 flex flex-col lg:flex-row justify-center items-center">
              <img className="h-10" src="/multiple-users-silhouette-1.png" alt="Tuple" />
              <h2 className="text-lg px-3 py-2 md:py-3 text-center break-normal font-bold">2467+ Happy Students</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
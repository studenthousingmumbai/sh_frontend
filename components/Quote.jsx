export default function Quote() {
  return (
    <div className="h-auto lg:h-[440px] bg-[linear-gradient(to_left,#194128,#194128CC)] flex justify-center items-center lg:flex-row px-12 lg:px-48">
      {/* Text Content */}
      <div className="relative py-12 flex flex-col justify-center items-start gap-4">
        <div className="absolute left-1/2 -translate-x-1/2 w-[186px] h-[186px] lg:w-[250px] lg:h-[250px] opacity-40 lg:left-0 lg:translate-x-0">
          <img
            src="/double-quotes.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="font-cedarville font-[400] text-[32px] lg:text-[48px] text-center text-white leading-[150%]">
          "A comfortable space isn&#39;t just where you stay; it&#39;s where you
          grow, learn, and thrive."
        </div>
      </div>
    </div>
  );
}

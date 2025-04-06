export default function SectionTitle({ title, className }) {
  console.log(className);
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <div className={` pageTitle flex flex-col`}>
        <div className={`${className?.includes("text-white") && "text-white"}`}>
          {title}
        </div>
        <div className="w-[30%] h-1.5 rounded-sm bg-[#F8C14C]" />
      </div>
    </div>
  );
}

export default function SectionTitle({ title, className }) {
  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <div className="pageTitle flex flex-col">
        {title}
        <div className="w-[40%] h-1.5 rounded-sm bg-[#F8C14C]" />
      </div>
    </div>
  );
}

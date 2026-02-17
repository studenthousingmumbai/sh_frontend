export default function SectionTitle({ 
  title, 
  className, 
  tag = "h2" 
}) {
  const Tag = tag;

  return (
    <div className={`${className} flex flex-col justify-center items-center`}>
      <div className="pageTitle flex flex-col">
        <Tag className={`${className?.includes("text-white") && "text-white"}`}>
          {title}
        </Tag>
        <div className="w-[30%] h-1.5 rounded-sm bg-[#F8C14C]" />
      </div>
    </div>
  );
}

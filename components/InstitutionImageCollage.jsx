export default function InstitutionImageCollage({ images }) {
  return (
    <div className="relative w-full h-[466px]">
      <div className="w-[70%] h-[352px] relative top-10 rounded-[8px]">
        <img
          className="w-full h-full object-cover rounded-[8px]"
          src={images[0]}
        ></img>
      </div>

      <div className="w-[40%] h-[192px] absolute top-0 right-10 overflow-hidden rounded-tl-[8px] rounded-tr-[999px] rounded-br-[8px] rounded-bl-[8px]">
        <img className="w-full h-full object-cover" src={images[1]} />
      </div>

      <div className="w-[40%] h-[192px] absolute bottom-0 right-0 overflow-hidden rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[999px]">
        <img className="w-full h-full object-cover" src={images[2]} />
      </div>
    </div>
  );
}

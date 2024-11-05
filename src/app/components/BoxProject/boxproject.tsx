
type Props = {
  title: string
  area: string
  details: string
}

export default function BoxProject({title, area, details} : Props) {
  return (
    <div className="p-[10px]">
    <div className="bg-white rounded-lg 
    shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl
    duration-300 ease-out cursor-pointer w-[290px] h-[200px]">
      {/* Parte superior roxa */}
      <div className="bg-purple-400 h-[90px]"></div>
      {/* Conteúdo do projeto */}
      <div className="p-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-slate-600 mb-2">{area}</p>
        <p className="text-slate-400">{details}</p>
      </div>
    </div>
    </div>
  );
}

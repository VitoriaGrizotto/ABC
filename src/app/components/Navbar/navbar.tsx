import Image from "next/image";
import logo from "/public/Logo.svg"; 
import Link from "next/link"; 

export default function Navbar() {
  return (
    <>
      <header className="bg-white border-b border-gray-300 p-4 px-10 flex justify-between items-center">
        <div className="flex items-center">
        <Link href="/">
              <Image 
                src={logo} 
                alt="Logo BOSCH|ABC" 
                width={180}
                height={50}
              />
        </Link>
        </div>
        <div className="flex items-center">
          <button className="bg-btnazul text-white px-6 py-2 rounded font-bold hover:bg-btnazulhover">
            Criar Evento
          </button>
        </div>
      </header>
    </>
  );
}

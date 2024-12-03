import BoxNewProject from "../components/BoxNewProject";
// import BoxProject from "../components/BoxProject/boxproject";
import Navbar from "../components/Navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-10">
        <BoxNewProject/>
      </main>
      
    </>
  );
}
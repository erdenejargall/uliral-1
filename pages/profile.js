import Image from "next/image";

export default function Profile() {
  return (
    <div>
      <a href="http://localhost:3000/" className="w-36 border-2 border-bg-red-300 rounded-lg p-4 bg-blue-400"> 
 go back
 </a>
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/asasasa.jpg')" }}>
      <div className="text-black border-black border-4 w-2/3 h-4/5 bg-blue-100 bg-opacity-80 rounded-lg flex">
        {/* zuun heseg */}
        <div className="p-16">
 <Image src="/portrait.png" width={450} height={18}/>
        </div>

        {/* baruun heseg */}
        <div className="flex flex-col justify-start pt-16 pl-36 pr-12 space-y-4">
          <p className="text-3xl font-bold">Name: Erdenejargal</p>
          <p className="text-3xl font-bold">School: Nest</p>
          <p className="text-3xl font-bold">Age: 16</p>
          <p className="text-3xl font-bold">Gender: Male</p>
          <p className="text-3xl font-bold">Pet:</p>
          <Image src="/catter.jpg" width={300} height={300}/>
        </div>
      </div>
    </div></div>
  );
}
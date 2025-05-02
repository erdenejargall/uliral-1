import Image from "next/image";

export default function Shop() {
  return (
    <div className="h-screen bg-gray-200 text-white flex">
      <div className="w-1/5 bg-gray-100 flex flex-col p-4"> <Image
      src="/images/nest.jpg"
      width={100}
      height={100}
      /></div>

      <div className="w-4/5 flex flex-col justify-between py-16 px-6 shadow-xl">

        <div className="w-full h-full bg-zinc-300 shadow-md rounded-md mb-6 p-4">

          <div className="h-[15%] w-full bg-white shadow-md rounded-md mb-4"></div>

          <div className="h-[15%] w-full bg-white shadow-md rounded-md mb-4"></div>

          <div className="h-[15%] w-full bg-white shadow-md rounded-md mb-4"></div>

          <div className="h-[15%] w-full bg-white shadow-md rounded-md mb-4"></div>

          <div className="h-[15%] w-full bg-white shadow-md rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

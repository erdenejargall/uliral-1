import Image from "next/image";

export default function CV() {
  return (
    <div>
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/prof_bg.jpg')" }}
    >
      <div className="text-black border-black border-4 w-2/3 h-4/5 bg-white bg-opacity-90 rounded-lg shadow-lg flex">
        <div className="w-1/3 p-8 flex flex-col items-center space-y-4">
          <Image
            src="/portrait.png"
            width={150}
            height={150}

          />
          <h1 className="text-2xl font-bold">Erdenejargal</h1>
          <p className="text-gray-600 text-center">
            Age: 16 <br />
            Gender: Male
          </p>
        </div>

        <div className="w-2/3 p-8 space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-blue-600">Batragchaa Erdenejargal</h2>
            <p className="text-gray-600">Student at Nest School</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Contacts</h3>
            <p className="text-gray-700">Email: batragchaaerdenejargal@gmail.com</p>
            <p className="text-gray-700">Phone: +976 9595 5222</p>
            <p className="text-gray-700">Location: Ulaanbaatar, Mongolia</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Defenestrating</li>
              <li>Amateur Art</li>
              <li>Basic Coding Skills</li>
              <li>Persistence</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Hobbies and Interests</h3>
            <p className="text-gray-700">
              Enjoys being alone, trying out new video games and learning new stuff.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

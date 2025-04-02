import Image from "next/image";

export default function Weather() {
  return (
    <div className="h-screen bg-gray-900 text-white flex">
      <div className="w-1/5 bg-gray-800 p-6 flex flex-col space-y-6">
      <Image src="/umbrella.png" width={50} height={50} />
        <nav className="flex flex-col space-y-4">
          <a className="text-gray-300 hover:text-white">Weather</a>
          <a className="text-gray-300 hover:text-white">Cities</a>
          <a className="text-gray-300 hover:text-white">Map</a>
          <a className="text-gray-300 hover:text-white">Settings</a>
        </nav>
      </div>

      <div className="w-4/5 p-8">
        <div className="w-full mb-6">
          <input
            type="text"
            placeholder="Search for cities"
            className="w-full p-4 text-gray-900 rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold">Madrid</h1>
            <p className="text-gray-400">Chance of rain: 0%</p>
            <p className="text-6xl font-bold mt-4">31°</p>
          </div>
          <div>
            <Image src="/sunny.png" width={100} height={100} />
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-bold mb-4">Today's Forecast</h3>
          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-gray-400">6:00 AM</p>
              <Image src="/cloud.png" width={40} height={40} />
              <p>25°</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">9:00 AM</p>
              <Image src="/cloudy.png" width={40} height={40} />
              <p>28°</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">12:00 PM</p>
              <Image src="/sunny.png" width={40} height={40} />
              <p>33°</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">3:00 PM</p>
              <Image src="/sunny.png" width={40} height={40} />
              <p>34°</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">6:00 PM</p>
              <Image src="/sunny.png" width={40} height={40} />
              <p>32°</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">9:00 PM</p>
              <Image src="/cloudy.png" width={40} height={40} />
              <p>30°</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg flex justify-between items-center mb-6">
          <div>
            <p>Real Feel: <span className="font-bold">30°</span></p>
            <p>Chance of Rain: <span className="font-bold">0%</span></p>
          </div>
          <div>
            <p>Wind: <span className="font-bold">0.2 km/h</span></p>
            <p>UV Index: <span className="font-bold">3</span></p>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-lg">See More</button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">7-Day Forecast</h3>
          <div className="flex justify-between items-center mb-2">
            <p>Today</p>
            <Image src="/sunny.png" width={40} height={40} />
            <p>36/22</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Tue</p>
            <Image src="/sunny.png" width={40} height={40} />
            <p>37/21</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Wed</p>
            <Image src="/sunny.png" width={40} height={40} />
            <p>37/21</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Thu</p>
            <Image src="/cloud.png" width={40} height={40} />
            <p>37/21</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Fri</p>
            <Image src="/cloud.png" width={40} height={40} />
            <p>37/21</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Sat</p>
            <Image src="/rainy.png" width={40} height={40} />
            <p>37/21</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Sun</p>
            <Image src="/sunny.png" width={40} height={40} />
            <p>37/21</p>
          </div>
        </div>
      </div>
    </div>
  );
};
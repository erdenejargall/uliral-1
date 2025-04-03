import { useState } from "react"; 

export default function Home() {
    const [counter, setCounter] = useState(0);
    const [initialCount, setInitialCount] = useState(0);
    
    const handleInitialCountChange = (event) => {
        setInitialCount(Number(event.target.value));
    };
    
    const handleClick = () => {
        setCounter(counter + 1);
    };
    
    return (
        <div className="pt-20 h-screen w-screen bg-gray-200">
            <a href="https://erdenejargal.vercel.app/" className="absolute top-2 left-4 w-36 border-2 border-red-300 rounded-lg p-4 bg-blue-400"> 
                go back
            </a>
            
            <div className="bg-blue-700 w-full h-16 flex items-center justify-center">
                <p className="text-white text-xl flex justify-center">
                    Nest high school
                </p>
            </div>
            <div>
                <p className="pt-10 flex justify-center text-4xl font-[600] text-black">
                    Welcome to Nest school
                </p>
                <div className="flex justify-center pt-4">
                    <p className="text-s text-black font-[10] text-center w-11/12 md:w-2/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div className="flex justify-center pt-4">
                <button className="text-white bg-blue-600 pt-4 pb-4 px-6 border rounded-xl" onClick={handleClick}>
                    Click me
                </button>
                <a className="pl-4 text-black pt-2">
                    Clicked {counter} times
                </a>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-5 pt-8">
                <div className="bg-white text-black pt-4 pl-4 md:pl-16 w-full md:w-80 h-48 border rounded-xl drop-shadow-lg mb-4 md:mb-0">
                    <p className="text-2xl font-bold">
                        Why choose us?
                    </p>
                    <p className="">High performance</p>
                    <p>Responsive Design</p>
                    <p>Easy to Use</p>
                    <p>Scalable Solutions</p>
                    <p>24/7 Support</p>
                </div>
                <div className="bg-white pt-4 text-black pl-4 md:pl-16 w-full md:w-80 border rounded-xl drop-shadow-lg mb-4 md:mb-0">
                    <p className="text-2xl font-bold">
                        Why choose us?
                    </p>
                    <p className="">High performance</p>
                    <p>Responsive Design</p>
                    <p>Easy to Use</p>
                    <p>Scalable Solutions</p>
                    <p>24/7 Support</p>
                </div>
                <div className="bg-white pt-4 text-black pl-4 md:pl-16 w-full md:w-80 border rounded-xl drop-shadow-lg">
                    <p className="text-2xl font-bold">
                        Why choose us?
                    </p>
                    <p className="">High performance</p>
                    <p>Responsive Design</p>
                    <p>Easy to Use</p>
                    <p>Scalable Solutions</p>
                    <p>24/7 Support</p>
                </div>
            </div>
        </div>
    );
}
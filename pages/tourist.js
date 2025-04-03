import { useState, useEffect } from "react";

export default function Tourist() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://mongol-api-rest.vercel.app/touristAttractions"
                );
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-6"> 
            <div className="mb-6 ml-6">
            <a href="https://erdenejargal.vercel.app/" className="w-36 border-2 border-bg-red-300 rounded-lg p-4 bg-blue-400"> 
        go back
      </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
                {data?.touristAttractions?.map((item) => (
                    <div 
                        key={item.id}
                        className="border-2 rounded-md shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                        <div className="flex justify-center">
                            <img 
                                className="rounded-xl w-full h-40 object-cover p-1 pt-2" 
                                src={item.images} 
                            />
                        </div>
                        <div className="p-4">
                            <p className="font-bold text-center text-sm mb-2">{item.name}</p>
                            <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                            <p className="text-xs text-gray-500">{item.address?.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
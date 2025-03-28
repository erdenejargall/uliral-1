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

    console.log(data);

    return (
        <div className="grid grid-cols-4 gap-4 m-4">
            {data?.touristAttractions?.map((item) => (
                <div className="border border-2 rounded-md drop-shadow-sm ">
                    <div className="flex justify-center"><img className="rounded-xl w-80 h-40 p-1 pt-2  " src={item.images}/></div>
                    <p className="font-bold flex justify-center text-xs">{item.name}</p>
                    <div className="p-2"><h1 className="text-xs">{item.description}</h1>
                    <h2 className="text-xs pt-4">{item.address.country}</h2></div>
                
                </div>
            ))}
        </div>
    );
}
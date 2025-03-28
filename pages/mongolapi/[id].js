import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ID() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response1 = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
                    const response2 = await fetch("https://mongol-api-rest.vercel.app/Instruments");
                    const response3 = await fetch("https://mongol-api-rest.vercel.app/Clothes");
                    const response4 = await fetch("https://mongol-api-rest.vercel.app/HistoricalTools");
                    const response5 = await fetch("https://mongol-api-rest.vercel.app/EthnicGroups");
                    const response6 = await fetch("https://mongol-api-rest.vercel.app/Provinces");
                    const response7 = await fetch("https://mongol-api-rest.vercel.app/HistoricalFigures");

                    const result1 = await response1.json();
                    const result2 = await response2.json();
                    const result3 = await response3.json();
                    const result4 = await response4.json();
                    const result5 = await response5.json();
                    const result6 = await response6.json();
                    const result7 = await response7.json();

                    setData([
                    ...result1.touristAttractions,
                    ...result2.instruments,
                    ...result3.clothes,
                    ...result4.historicalTools,
                    ...result5.ethnicGroups,
                    ...result6.provinces,
                    ...result7.historicalFigures]

                );

                setLoading(false);
             } 
             catch (error) {
                console.log(error);
                setLoading(false);
             }
            };

            fetchData();
        },
     []);
     console.log(data);


    return (
        <div>
            {loading &&<p>...loading</p>}
            <button className="border p-4 bg-blue-200" onClick={() => router.back()}>
                back
            </button>
             {(data || [])?.map((item) => router.query.id === item.id && (
                
                <div>
                    <p>
                        {item.id}</p>
                        <p>
                        {item.name}
                        <p>
                        {item.description}
                        </p><p>
                        {item.address?.country}
                        </p><p>
                        {item.timePeriod}
                        </p><p>
                        {item.materials}</p>
                        <p>
                        {item.linguistic}
                        </p><p>
                        {item.population}
                        </p><p>
                        {item.area} km²
                        </p><p>
                        {item.capital}
                        </p><p>
                        {item.accomplishment}
                        </p><p>
                        {item.dateOfBirth}
                        </p><p>
                        {item.countryOfBirth}
                        </p><p>
                        {item.usage}
                        </p><p>
                        {item.dateOfDeath}</p>
                    </p>
                    <img src={item?.images} className="w-40"/>
                </div>
                
            ))}
        </div>
    );
}
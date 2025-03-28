import { useState, useEffect } from "react";

export default function Mongol() {
    const [data, setData] = useState();
    const [grid, setGrid] = useState(false);
    const [search, setSearch] = useState("");

    const fallbackImage = "https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/326498436_1574880736364874_3080204893058889679_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Rls32vHAqdUQ7kNvgEU5FTN&_nc_oc=AdgsGkCJwFCRWKOx2eub5I-vLm02WRPbg6iv6iYVF694Y3123LohUJMCfN60fbkKBQI&_nc_zt=23&_nc_ht=scontent.fuln6-1.fna&_nc_gid=ArEWqPRTjg2itF3ALXnQ9oN&oh=00_AYBadGH06YydKUxhMqMUnMI9LtsJ3EFAQ8NMLAlFUvJOkA&oe=67BEFCD8";

    useEffect(() => {
        const fetchData = async () => {
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

                setData({
                    touristAttractions: result1.touristAttractions,
                    Instruments: result2.instruments,
                    Clothes: result3.clothes,
                    HistoricalTools: result4.historicalTools,
                    EthnicGroups: result5.ethnicGroups,
                    Provinces: result6.provinces,
                    HistoricalFigures: result7.historicalFigures
                });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    const filterData = (items, searchTerm) => {
        return items?.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-6">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border bg-white p-2 text-gray-700 rounded-lg"
                    placeholder="Search by name..."
                />
                <button
                    onClick={() => setGrid(!grid)}
                    className="ml-4 p-4 bg-blue-300 text-white rounded-lg hover:bg-red-500 transition"
                >
                    Go to {grid ? "List" : "Grid"}
                </button>
            </div>
            <p className="text-2xl font-bold mb-4">Tourist Attractions:</p>
            <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
                {filterData(data?.touristAttractions, search)?.map((item) => (
                    <div   className="border border-2 rounded-md drop-shadow-sm p-4">
                        <div className="flex justify-center">
                            <img
                                className="rounded-xl w-full h-40 object-cover"
                                src={item.images || fallbackImage}
                                alt={item.name}
                            />
                        </div>
                        <p className="font-bold text-center mt-2">{item.name}</p>
                        <div className="p-2">
                            <p className="text-sm">{item.description}</p>
                            <p className="text-sm mt-2">{item.address?.country}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-2xl font-bold mt-8 mb-4">Instruments:</p>
            <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
                {filterData(data?.Instruments, search)?.map((item) => (
                    <div   className="border border-2 rounded-md drop-shadow-sm p-4">
                        <div className="flex justify-center">
                            <img
                                className="rounded-xl w-full h-40 object-cover"
                                src={item.images || fallbackImage}
                                alt={item.name}
                            />
                        </div>
                        <p className="font-bold text-center mt-2">{item.name}</p>
                        <div className="p-2">
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-2xl font-bold mt-8 mb-4">Clothes:</p>
            <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
                {filterData(data?.Clothes, search)?.map((item) => (
                    <div   className="border border-2 rounded-md drop-shadow-sm p-4">
                        <div className="flex justify-center">
                            <img
                                className="rounded-xl w-full h-40 object-cover"
                                src={item.images || fallbackImage}
                                alt={item.name}
                            />
                        </div>
                        <p className="font-bold text-center mt-2">{item.name}</p>
                        <div className="p-2">
                            <p className="text-sm">{item.description}</p>
                            <p className="text-sm mt-2">{item.timePeriod}</p>
                            <p className="text-sm mt-2">{item.materials}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-2xl font-bold mt-8 mb-4">Historical Tools:</p>
            <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
                {filterData(data?.HistoricalTools, search)?.map((item) => (
                    <div   className="border border-2 rounded-md drop-shadow-sm p-4">
                        <div className="flex justify-center">
                            <img
                                className="rounded-xl w-full h-40 object-cover"
                                src={item.images || fallbackImage}
                                alt={item.name}
                            />
                        </div>
                        <p className="font-bold text-center mt-2">{item.name}</p>
                        <div className="p-2">
                            <p className="text-sm">{item.description}</p>
                            <p className="text-sm mt-2">{item.timePeriod}</p>
                            <p className="text-sm mt-2">{item.materials}</p>
                            <p className="text-sm mt-2">{item.usage}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-2xl font-bold mt-8 mb-4">Ethnic Groups:</p>
            <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
                {filterData(data?.EthnicGroups, search)?.map((item) => (
                    <div   className="border border-2 rounded-md drop-shadow-sm p-4">
                        <div className="flex justify-center">
                            <img
                                className="rounded-xl w-full h-40 object-cover"
                                src={item.images || fallbackImage}
                                alt={item.name}
                            />
                        </div>
                        <p className="font-bold text-center mt-2">{item.name}</p>
                        <div className="p-2">
                            <p className="text-sm">{item.linguistic}</p>
                            <p className="text-sm mt-2">{item.population}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-2xl font-bold mt-8 mb-4">Provinces:</p>
            <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
                {filterData(data?.Provinces, search)?.map((item) => (
                    <div   className="border border-2 rounded-md drop-shadow-sm p-4">
                        <div className="flex justify-center">
                            <img
                                className="rounded-xl w-full h-40 object-cover"
                                src={item.images || fallbackImage}
                                alt={item.name}
                            />
                        </div>
                        <p className="font-bold text-center mt-2">{item.name}</p>
                        <div className="p-2">
                            <p className="text-sm"><strong>Area:</strong> {item.area} km²</p>
                            <p className="text-sm"><strong>Population:</strong> {item.population}</p>
                            <p className="text-sm"><strong>Capital:</strong> {item.capital}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-2xl font-bold mt-8 mb-4">Historical Figures:</p>
            <div className={grid ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "space-y-4"}>
                {filterData(data?.HistoricalFigures, search)?.map((item) => (
                    <div   className="border border-2 rounded-md drop-shadow-sm p-4">
                        <div className="flex justify-center">
                            <img
                                className="rounded-xl w-full h-40 object-cover"
                                src={item.images || fallbackImage}
                                alt={item.name}
                            />
                        </div>
                        <p className="font-bold text-center mt-2">{item.name}</p>
                        <div className="p-2">
                            <p className="text-sm">{item.accomplishment}</p>
                            <p className="text-sm mt-2">{item.dateOfBirth}</p>
                            <p className="text-sm mt-2">{item.countryOfBirth}</p>
                            <p className="text-sm mt-2">{item.dateOfDeath}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
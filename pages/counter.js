import { useState, useEffect } from "react";

export default function Counter() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((previous) => {
                if (previous > 9) {

                    clearInterval(interval);

                    return "'s up" ;
                }
                return previous + 1;
            });
        }, 500);
    }, []);

    return (
        <p className="flex justify-center pt-10 font-bold text-xl">Time {time}</p>
    );
}
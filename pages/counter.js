import { useState, useEffect } from "react";

export default function Counter() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((previous) => {
                if (previous > 9) {
                    clearInterval(interval);
                    return "'s up";
                }
                return previous + 1;
            });
        }, 500);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <p className={`text-5xl font-bold transition-all duration-300 ${time === "'s up" ? "text-green-500 scale-110 animate-pulse" : ""}`}>
                Time {time}
            </p>
        </div>
    );
}
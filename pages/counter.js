import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Counter() {
    const [time, setTime] = useState(0);
    const router = useRouter();

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
        <div className="p-8 m-6">
            <a href="https://erdenejargal.vercel.app/" className="w-36 border-2 border-bg-red-300 rounded-lg p-4 bg-blue-400"> 
        go back
      </a>

            <div className="fixed inset-0 flex items-center justify-center">
                <p className={`text-5xl font-bold transition-all duration-300 ${time === "'s up" ? "text-green-500 scale-110 animate-pulse" : ""}`}>
                    Time {time}
                </p>
            </div>
        </div>
    );
}
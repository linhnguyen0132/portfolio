"use client";

import { useEffect, useState } from "react";
import HomeScene from "../components/HomeScene";

export default function Home() {
    const [isOpeningAbout, setIsOpeningAbout] = useState(false);

    const openAbout = () => {
        if (isOpeningAbout) return;

        setIsOpeningAbout(true);

        setTimeout(() => {
            window.location.href = "/about";
        }, 1200);
    };

    useEffect(() => {
        const handleFocus = () => {
            console.log("Portfolio reprend le focus");
        };

        window.addEventListener("focus", handleFocus);

        return () => {
            window.removeEventListener("focus", handleFocus);
        };
    }, []);

    return (
        <main className="relative h-screen w-screen overflow-hidden">

            <HomeScene />

            {/* Transition vers About - on la garde pour plus tard */}
            {isOpeningAbout && (
                <div className="pointer-events-none fixed inset-0 z-[9999]">
                    <div className="absolute inset-0 bg-[#080a09]" />
                </div>
            )}

        </main>
    );
}
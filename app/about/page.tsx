"use client";

import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { translations } from "@/components/translations";
import Model3D from "@/components/Model3D";
import { useEffect, useState } from "react";

export default function About() {
    const router = useRouter();
    const { language } = useLanguage();

    const t = translations[language].about;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);
    return (
        <main
            className={`
                min-h-screen
                bg-[#080a09]
                transition-opacity
                duration-700
                ease-out
                ${visible ? "opacity-100" : "opacity-0"}
            `}
        >

            {/* Header */}

            <header className="px-6 pt-6 md:px-12 md:pt-8">
                <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.07] bg-white/[0.025] px-5 py-3">

                    <button
                        onClick={() => router.push("/")}
                        className="rounded-full px-3 py-1.5 font-mono text-xs tracking-[0.15em] text-white/40 transition hover:bg-[#a8d5ba]/10 hover:text-[#a8d5ba]"
                    >
                        {t.back}
                    </button>

                    <span className="hidden font-mono text-[10px] tracking-[0.3em] text-[#a8d5ba]/50 md:block">
                        {t.label}
                    </span>

                    <LanguageSwitcher />

                </div>
            </header>


            {/* Hero */}

            <section className="relative">

                <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#a8d5ba]/[0.045] blur-[120px]" />

                <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#b8a9d9]/[0.035] blur-[110px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-8 py-24 md:grid-cols-2 md:px-14 md:py-32">

                    <div>

                        <p className="mb-6 font-mono text-[10px] tracking-[0.25em] text-[#a8d5ba]/55">
                            a little corner of the internet
                        </p>

                        <p className="font-mono text-sm tracking-[0.12em] text-white/50">
                            {t.greeting}
                        </p>

                        <h1 className="mt-3 text-7xl font-semibold tracking-[-0.065em] text-[#a8d5ba] md:text-9xl">
                            {t.name}
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-8 text-white/45 md:text-lg">
                            {t.subtitle}
                        </p>

                        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#a8d5ba]/15 bg-[#a8d5ba]/[0.04] px-4 py-2 font-mono text-[9px] tracking-[0.15em] text-[#a8d5ba]/60">

                            <span className="h-1.5 w-1.5 rounded-full bg-[#a8d5ba] shadow-[0_0_10px_rgba(168,213,186,0.5)]" />

                            quietly online

                        </div>

                    </div>


                    {/* Photo */}

                    <div className="relative mx-auto w-full max-w-sm">

                        <div className="absolute -inset-10 rounded-[40px] bg-[#a8d5ba]/[0.045] blur-3xl" />

                        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#101310] p-2">

                            <div className="relative overflow-hidden rounded-[26px]">

                                <img
                                    src="/images/about-me.png" 
                                    alt="Linh"
                                    className="aspect-[3/4] h-full w-full object-cover grayscale-[25%] transition duration-700 hover:scale-[1.02]"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-[#a8d5ba]/[0.025]" />

                            </div>

                        </div>

                        <div className="absolute -bottom-4 -right-3 rounded-full border border-[#e8b4a0]/20 bg-[#12100f] px-4 py-2 font-mono text-[9px] tracking-[0.15em] text-[#e8b4a0]/60">
                            hello :)
                        </div>

                    </div>

                </div>

            </section>


            {/* About */}

            <section className="px-6 md:px-12">

                <div className="mx-auto max-w-7xl rounded-[36px] border border-white/[0.07] bg-white/[0.018] px-8 py-20 md:px-14">

                    <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">

                        <div>

                            <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-[#a8d5ba]/55">
                                {t.label}
                            </p>

                            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                                {t.title}
                                <span className="terminal-cursor">_</span>
                            </h2>

                            <div className="mt-7 h-px w-12 bg-[#a8d5ba]/40" />

                            <p className="mt-8 max-w-xl text-base leading-8 text-white/50 md:text-lg">
                                {t.description}
                            </p>

                        </div>


                        <div className="relative flex h-64 items-center justify-center">

                            <div className="absolute h-56 w-56 rounded-full border border-[#b8a9d9]/10" />

                            <div className="absolute h-40 w-40 rounded-full border border-[#a8d5ba]/10" />

                            <div className="absolute h-20 w-20 rounded-full bg-[#a8d5ba]/5 blur-xl" />

                            <div className="relative h-3 w-3 rounded-full bg-[#a8d5ba] shadow-[0_0_20px_rgba(168,213,186,0.5)]" />

                            <span className="absolute bottom-2 right-0 font-mono text-[9px] text-white/20">
                                little signal
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            {/* Cards */}

            <section className="px-6 py-24 md:px-12">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-10 flex items-end justify-between">

                        <div>

                            <p className="font-mono text-[10px] tracking-[0.25em] text-[#a8d5ba]/50">
                                a few things about me
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                                little pieces of my world
                            </h2>

                        </div>

                        <span className="hidden font-mono text-[9px] text-white/20 md:block">
                            03 OBJECTS
                        </span>

                    </div>


                    <div className="grid gap-5 md:grid-cols-3">


                        {/* Education */}

                        <div className="group rounded-[30px] border border-white/[0.07] bg-white/[0.018] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#a8d5ba]/20 hover:bg-[#a8d5ba]/[0.025]">

                            <div className="flex items-center justify-between">

                                <span className="font-mono text-xs text-[#a8d5ba]">
                                    01
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#a8d5ba]/70 shadow-[0_0_10px_rgba(168,213,186,0.25)]" />

                            </div>


                            <div className="my-5 h-52 overflow-hidden rounded-2xl bg-[#0c0f0d]">

                                <Model3D
                                    model="/models/retro_computer_1.glb"
                                    rotation={[0, 0.5, 0]}
                                    position={[0, -0.3, 0]}
                                    scale={2.5}
                                />

                            </div>
                            <p className="mt-5 font-mono text-[7px] leading-4 text-white/15">
                                                            "Retro computer" by Tobalation — Sketchfab
                                                        </p>

                            <p className="font-mono text-[9px] tracking-[0.25em] text-[#a8d5ba]/55">
                                {t.education}
                            </p>

                            <h3 className="mt-4 text-xl">
                                {t.educationTitle}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/35">
                                {t.educationSubtitle}
                            </p>
                            <h3 className="mt-4 text-xl">
                                {t.educationTitle2}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/35">
                                {t.educationSubtitle2}
                            </p>

                            

                        </div>


                        {/* Interests */}

                        <div className="group rounded-[30px] border border-white/[0.07] bg-white/[0.018] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#b8a9d9]/20 hover:bg-[#b8a9d9]/[0.025]">

                            <div className="flex items-center justify-between">

                                <span className="font-mono text-xs text-[#b8a9d9]">
                                    02
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#b8a9d9]/70" />

                            </div>


                            <div className="my-5 h-52 overflow-hidden rounded-2xl bg-[#0c0d10]">

                                <Model3D
                                    model="/models/kirby_arcade.glb"
                                    rotation={[0, 0.65, 0]}
                                    position={[0, -0.5, 0]}
                                    scale={0.08}
                                />

                            </div>

                            <p className="mt-5 font-mono text-[7px] leading-4 text-white/15">
                                                            "Kirby Arcade" by Leon Da Kimchi — Sketchfab
                                                        </p>

                            <p className="font-mono text-[9px] tracking-[0.25em] text-[#b8a9d9]/55">
                                {t.interests}
                            </p>

                            <h3 className="mt-4 text-xl">
                                {t.interestsTitle}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/35">
                                {t.interestsSubtitle}
                            </p>

                            

                        </div>


                        {/* Currently */}

                        <div className="group rounded-[30px] border border-white/[0.07] bg-white/[0.018] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#e8b4a0]/20 hover:bg-[#e8b4a0]/[0.025]">

                            <div className="flex items-center justify-between">

                                <span className="font-mono text-xs text-[#e8b4a0]">
                                    03
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#e8b4a0]/70" />

                            </div>


                            <div className="my-5 h-52 overflow-hidden rounded-2xl bg-[#100d0c]">

                                <Model3D
                                    model="/models/bruno.glb"
                                    rotation={[0, 0.5, 0]}
                                    position={[0, 0, 0]}
                                    scale={0.4}
                                />

                            </div>
                            <p className="mt-5 font-mono text-[7px] leading-4 text-white/15">
                                                            "Bruno" by iank2z — Sketchfab
                                                        </p>

                            <p className="font-mono text-[9px] tracking-[0.25em] text-[#e8b4a0]/55">
                                {t.currently}
                            </p>

                            <h3 className="mt-4 text-xl">
                                {t.currentlyTitle}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-white/35">
                                {t.currentlySubtitle}
                            </p>

                            

                        </div>

                    </div>

                </div>

            </section>


            {/* Footer */}

            <footer className="px-6 pb-6 md:px-12">

                <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[28px] border border-white/[0.07] bg-white/[0.018] px-6 py-7 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-center gap-3 font-mono text-[9px] tracking-[0.15em] text-white/25">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#a8d5ba]" />

                        made with curiosity

                    </div>


                    <div className="flex gap-6 font-mono text-[9px] tracking-[0.18em] text-white/25">

                        <a
                            href="https://github.com/linhnguyen0132"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-[#a8d5ba]"
                        >
                            GITHUB
                        </a>

                        <a
                            href="https://www.linkedin.com/in/linh-nguyen-0132/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-[#b8a9d9]"
                        >
                            LINKEDIN
                        </a>

                        <a
                            href="mailto:ton-email@email.com"
                            className="transition hover:text-[#e8b4a0]"
                        >
                            GMAIL
                        </a>

                    </div>


                    <button
                        onClick={() => router.push("/")}
                        className="self-start rounded-full border border-white/[0.07] px-4 py-2 font-mono text-sm text-white/30 transition hover:border-[#a8d5ba]/20 hover:text-[#a8d5ba] md:self-auto"
                    >
                        ↑
                    </button>

                </div>

            </footer>

        </main>
    );
}
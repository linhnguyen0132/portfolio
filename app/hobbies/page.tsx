"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { translations } from "@/components/translations";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useRouter } from "next/dist/client/components/navigation";

export default function Hobbies() {
    const { language } = useLanguage();
    const t = translations[language].hobbies;

    const [visible, setVisible] = useState(false);
    const router = useRouter();
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
                text-[#e8e5dc]
                transition-opacity
                duration-700
                ease-out
                ${visible ? "opacity-100" : "opacity-0"}
            `}
        >

            {/* HEADER */}
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


            {/* HERO */}
            <section className="mx-auto w-[90%] max-w-6xl pb-20 pt-16">

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#b8a9d9]">
                    {t.label}
                </p>

                <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
                    {t.title}
                    <span className="text-[#a8d5ba]">_</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#e8e5dc]/60">
                    {t.description}
                </p>

            </section>


            {/* HOBBIES */}
            <section className="mx-auto grid w-[90%] max-w-6xl gap-8 pb-32 md:grid-cols-2">


                {/* POP-UPS */}
                <article
                    className="
                        group
                        overflow-hidden
                        rounded-[2rem]
                        border border-[#e8e5dc]/10
                        bg-[#0d100f]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#e8b4a0]/50
                    "
                >

                    <div className="relative aspect-[4/3] overflow-hidden">

                        <Image
                            src="/images/hobbies/pop_up.jpg"
                            alt={t.popups}
                            fill
                            className="
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#080a09]/50 to-transparent" />

                    </div>


                    <div className="p-8">

                        {/*<p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#e8b4a0]">
                            {t.popupsSubtitle}
                        </p>*/}

                        <h2 className="text-3xl font-medium">
                            {t.popups}
                        </h2>

                        <p className="mt-4 leading-relaxed text-[#e8e5dc]/60">
                            {t.popupsDescription}
                        </p>

                        <a
                            href="https://www.instagram.com/madeby_sicuenoz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                text-[#e8b4a0]
                                transition
                                hover:text-[#e8e5dc]
                            "
                        >
                            ↗ {t.popupsInstagram}
                        </a>

                    </div>

                </article>


                {/* NAIL ART */}
                <article
                    className="
                        group
                        overflow-hidden
                        rounded-[2rem]
                        border border-[#e8e5dc]/10
                        bg-[#0d100f]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#b8a9d9]/50
                    "
                >

                    <div className="relative aspect-[4/3] overflow-hidden">

                        <Image
                            src="/images/hobbies/nails.jpg"
                            alt={t.nails}
                            fill
                            className="
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                            "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#080a09]/50 to-transparent" />

                    </div>


                    <div className="p-8">

                        {/*<p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#b8a9d9]">
                            {t.nailsSubtitle}
                        </p>*/}

                        <h2 className="text-3xl font-medium">
                            {t.nails}
                        </h2>

                        <p className="mt-4 leading-relaxed text-[#e8e5dc]/60">
                            {t.nailsDescription}
                        </p>

                        <a
                            href="https://www.instagram.com/nailsby_sicuenoz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                text-[#b8a9d9]
                                transition
                                hover:text-[#e8e5dc]
                            "
                        >
                            ↗ {t.nailsInstagram}
                        </a>

                    </div>

                </article>

            </section>


            {/* FOOTER */}
            <footer className="border-t border-[#e8e5dc]/10">

                <div className="mx-auto flex w-[90%] max-w-6xl items-center justify-between py-8">

                    <p className="text-sm text-[#e8e5dc]/40">
                        Made with curiosity & coffee ☕
                    </p>

                    <Link
                        href="/"
                        className="
                            text-sm
                            text-[#e8e5dc]/40
                            transition
                            hover:text-[#a8d5ba]
                        "
                    >
                        Back to home ↑
                    </Link>

                </div>

            </footer>

        </main>
    );
}
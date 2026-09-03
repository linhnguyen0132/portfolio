"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 text-sm">
            <button
                onClick={() => changeLanguage("fr")}
                className={
                    language === "fr"
                        ? "text-white"
                        : "text-white/40 hover:text-white"
                }
            >
                FR
            </button>

            <span className="text-white/20">/</span>

            <button
                onClick={() => changeLanguage("en")}
                className={
                    language === "en"
                        ? "text-white"
                        : "text-white/40 hover:text-white"
                }
            >
                EN
            </button>
        </div>
    );
}
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
    language: Language;
    changeLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [language, setLanguage] = useState<Language>("fr");

    // Récupérer la langue sauvegardée
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");

        if (savedLanguage === "fr" || savedLanguage === "en") {
            setLanguage(savedLanguage);
        }
    }, []);

    // Changer et sauvegarder la langue
    const changeLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                changeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage doit être utilisé à l'intérieur de LanguageProvider"
        );
    }

    return context;
}
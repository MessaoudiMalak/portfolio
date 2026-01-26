"use client";

import { useLanguage } from "@/context/language-context";

export function LangSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-1 border rounded-full p-1 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === "en"
                    ? "bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${language === "fr"
                    ? "bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
            >
                FR
            </button>
        </div>
    );
}

import { useParams } from "next/navigation";

export const useTranslations = async (lang: string, namespace: string = 'common') => {

    const translations = await import(`../locales/${lang}/${namespace}.json`);

    return translations.default;
};
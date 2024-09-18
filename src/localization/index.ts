import {useLanguage} from '../context/LanguageContext'

const cs = {
	'Hi I am Lenka': 'Ahoj, já jsem Lenka',
} as const

export type LocalisationString = keyof typeof cs

const esp: Record<LocalisationString, string> = {
	'Hi I am Lenka': 'Hola, soy Lenka',
} as const

const de: Record<LocalisationString, string> = {
	'Hi I am Lenka': 'Hallo, ich bin Lenka',
} as const

const en: Record<LocalisationString, string> = {
	'Hi I am Lenka': 'Hi, I am Lenka',
} as const

const strings = {
	de,
	cs,
	en,
	esp,
}

export function useTranslation() {
	const {lang} = useLanguage() as { lang: keyof typeof strings }

	return {
		t: (key: LocalisationString): string => {
			return strings[lang]?.[key] || key
		},
	}
}
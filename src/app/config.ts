import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;

export const pathnames = {
	'/': '/',
	'/new-book': {
		en: '/new-book',
		de: '/neues-buch',
	},
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

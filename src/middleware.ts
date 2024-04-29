import createMiddleware from 'next-intl/middleware';
import { locales, pathnames, localePrefix } from './app/config';

export default createMiddleware({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale: 'en',
	localePrefix,
	pathnames,
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(de|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};

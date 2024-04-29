/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: '*',
			},
		],
	},
};

export default withNextIntl(nextConfig);

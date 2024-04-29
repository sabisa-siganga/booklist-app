import { locales } from '@/app/config';
import { usePathname, useRouter } from '@/app/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

const Language = () => {
	const t = useTranslations('localeSwitcher');
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const pathname = usePathname();
	const params = useParams();

	const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				{ pathname, params },
				{ locale: e.target.value }
			);
		});
	};

	return (
		<select
			defaultValue={locale}
			disabled={isPending}
			onChange={onSelectChange}
			className={`rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isPending ? 'opacity-50' : ''}`}
		>
			{locales.map((cur) => (
				<option key={cur} value={cur}>
					{t('locale', { locale: cur })}
				</option>
			))}
		</select>
	);
};

export default Language;

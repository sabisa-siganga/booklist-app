'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Language from '../Language/Language';
import { useTranslations } from 'next-intl';
import { Link } from '@/app/navigation';

const Nav = () => {
	const pathname = usePathname();
	const t = useTranslations("nav");

	return (
		<nav className='bg-white text-black w-full flex gap-x-10 items-center py-4 mb-7'>
			<div className='grow text-center'>
				{/* Logo  */}
				<Link href='/' className='text-black text-2xl font-bold'>
					{t('title')}
				</Link>
			</div>
			{/*  Navigation Links */}
			<div className='flex pr-2 gap-x-2'>
				<Link
					href='/'
					className={`text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium ${
						pathname === '/' ? 'bg-gray-200' : ''
					}`}
				>
					{t('home')}
				</Link>
				<Link
					href='/new-book'
					className={`text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium ${
						pathname === '/new-book' ? 'bg-gray-200' : ''
					}`}
				>
					{t('addBook')}
				</Link>
				<Language />
			</div>
		</nav>
	);
};

export default Nav;

'use client';
import Link from 'next/link';
import BookItem from '../../components/BookItem/BookItem';
import { useEffect, useState } from 'react';
import { fetchData } from '../request';
import { BookInterface } from '../../interfaces/book';
import { useTranslations } from 'next-intl';

export default function Home() {
	const [loading, setLoading] = useState<boolean>(false);
	const [booksData, setBooksData] = useState<BookInterface[]>([]);
	const t = useTranslations('home');

	useEffect(() => {
		setLoading(true);

		// Fetch data from the storage
		fetchData()
			.then((data) => {
				setBooksData(data);
			})
			.catch((error) => {
				console.log('Error fetching data', error);
			})
			.finally(() => {
				// Simulating loading data for 2 seconds
				setTimeout(() => {
					setLoading(false);
				}, 2000);
			});
	}, []);

	return (
		<div className='max-w-screen-xl pt-10'>
			<ul className='flex flex-wrap gap-x-5 justify-center gap-y-10'>
				{!loading &&
					booksData.map((book, index) => {
						return (
							<li key={index} className='w-1/6'>
								<BookItem
									image={book.image}
									title={book.title}
									author={book.author}
									price={book.price}
								/>
							</li>
						);
					})}
			</ul>
			{loading && <p>{t('loading')}</p>}
		</div>
	);
}

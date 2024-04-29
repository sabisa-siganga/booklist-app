'use client';

import { useState } from 'react';
import Input from '../../../components/Input/Input';
import {
	BookFormInterface,
	BookInterface,
	FormValues,
} from '../../../interfaces/book';
import { updateData } from '../../request';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const defaultFormData = {
	title: {
		value: '',
		error: '',
	},
	author: {
		value: '',
		error: '',
	},
	price: {
		value: '',
		error: '',
	},
	image: {
		value: '',
		error: '',
	},
};

const AddBook = () => {
	const router = useRouter();
	const t = useTranslations('addBook');
	const [form, setForm] = useState<BookFormInterface>(defaultFormData);

	const isValidForm = () => {
		const data = Object.entries(form).map(([key, value]) => {
			const error = value.value.trim()
				? ''
				: t('required', { key: t(`form.${key}`) });

			return [key, { ...value, error }];
		});

		setForm(Object.fromEntries(data));

		// Check if there are any errors in the form
		return !data.some(([, value]) => value.error);
	};

	const addBookFunc = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!isValidForm()) {
			console.log('Form is invalid');

			return;
		}

		const formValues = Object.entries(form).reduce((acc, [key, value]) => {
			return { ...acc, [key]: value.value.trim() };
		}, {} as BookInterface);

		updateData(formValues);

		router.replace('/');
	};

	/**
	 * Handles the change event of an input element.
	 * Updates the form state with the new input value.
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const error = value.trim()
			? ''
			: t('required', { key: t(`form.${name}`) });

		setForm((prev) => ({
			...prev,
			[name]: {
				value,
				error,
			},
		}));
	};

	return (
		<>
			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='text-2xl mb-4 font-semibold text-slate-100'>
					{t('title')}
				</h2>
				<form className='space-y-6' onSubmit={addBookFunc}>
					<Input
						label={t('form.title')}
						name='title'
						autoComplete='title'
						placeholder={t('form.titlePlaceholder')}
						value={form.title.value}
						error={form.title.error}
						onChange={handleChange}
					/>

					<Input
						label={t('form.author')}
						name='author'
						autoComplete='author'
						placeholder={t('form.authorPlaceholder')}
						value={form.author.value}
						error={form.author.error}
						onChange={handleChange}
					/>

					<Input
						label={t('form.price')}
						type='number'
						name='price'
						autoComplete='price'
						placeholder={t('form.pricePlaceholder')}
						value={form.price.value}
						error={form.price.error}
						onChange={handleChange}
					/>

					<Input
						label={t('form.image')}
						name='image'
						autoComplete='image'
						placeholder={t('form.imagePlaceholder')}
						value={form.image.value}
						error={form.image.error}
						onChange={handleChange}
					/>

					<div>
						<button
							type='submit'
							className='w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							{t('form.submit')}
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddBook;

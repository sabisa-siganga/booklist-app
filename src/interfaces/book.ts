import { StaticImageData } from 'next/image';

export interface BookInterface {
	id?: number;
	image: StaticImageData | string;
	title: string;
	author: string;
	price: string;
}

export type FormValues = { value: string; error: string };

export interface BookFormInterface {
	image: FormValues;
	title: FormValues;
	author: FormValues;
	price: FormValues;
}

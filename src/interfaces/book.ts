import { StaticImageData } from 'next/image';

export interface BookInterface {
	id?: number;
	image: StaticImageData | string;
	title: string;
	author: string;
	price: string;
}


import { BookInterface } from '../interfaces/book';
import booksData from './data.json';

// Function to fetch data from a local JSON file
export const fetchData = (): Promise<BookInterface[]> => {
	return new Promise((resolve, reject) => {
		try {
			const data = sessionStorage.getItem('data');

			// Check if data exists in sessionStorage
			if (data) {
				// Resolve the promise with the data
				resolve(JSON.parse(data));
				return;
			}

			sessionStorage.setItem('data', JSON.stringify(booksData, null, 2));

			resolve(booksData);
		} catch (error) {
			// Reject the promise with the error
			reject(error);
		}
	});
};

// Function to update data with a new book
export const updateData = (newBook: BookInterface): void => {
	try {
		// Fetch the current data
		const currentData = JSON.parse(
			sessionStorage.getItem('data') || '[]'
		) as BookInterface[];

		// Add the new object to the beginning of the array
		currentData.unshift({
			...newBook,
			price: `$${newBook.price}`,
			id: currentData.length + 1,
		});

		// Convert the array back to JSON
		const updatedData = JSON.stringify(currentData, null, 2);

		// Write the updated JSON data to sessionStorage
		sessionStorage.setItem('data', updatedData);
	} catch (error) {
		// Handle any errors
		console.error('Error updating data:', error);
	}
};

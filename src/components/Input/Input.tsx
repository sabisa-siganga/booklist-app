import React from 'react';

interface InputProps {
	label: string;
	type?: 'text' | 'file' | 'number';
	name: string;
	autoComplete: string;
	required?: boolean;
	placeholder?: string;
	value?: string;
	error?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
	const {
		label,
		placeholder,
		value,
		error,
		type,
		name,
		autoComplete,
		required,
		onChange,
	} = props;
	return (
		<div>
			<label
				htmlFor={name}
				className='block text-sm font-medium leading-6 text-slate-50'
			>
				{label}
			</label>
			<div className='mt-1'>
				<input
					id={name}
					name={name}
					type={type}
					value={value}
					placeholder={placeholder}
					autoComplete={autoComplete}
					required={required}
					onChange={onChange}
					className='block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				/>
			</div>
			{error && (
				<p className='mt-1 capitalize text-xs text-red-500' id='email-error'>
					{error}
				</p>
			)}
		</div>
	);
};

export default Input;

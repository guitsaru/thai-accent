import React, { FunctionComponent } from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick: React.MouseEventHandler;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			{children}
		</button>
	)
}

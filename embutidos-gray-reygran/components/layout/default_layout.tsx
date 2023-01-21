import React from 'react';

interface DefaultProps {
	children: React.ReactChild | React.ReactChild[];
	className: string;
}

function DefaultLayout(props: DefaultProps): JSX.Element {
	const { children, className } = props;

	return (
		<div
			className={`${className} container mx-auto xs:px-2 xl:max-w-[1280px] bg-white py-12`}
		>
			{children}
		</div>
	);
}

export default DefaultLayout;

import Link from 'next/link';

interface LinkProps {
	textLink: string;
	active: boolean;
	hrefLink: string;
}

function LinkComponent(props: LinkProps): JSX.Element {
	const { hrefLink, textLink, active } = props;

	return (
		<Link
			href={hrefLink}
			className={`text-white font-thin text-sm mr-8 ${
				active ? 'text-red font-bold' : ''
			}`}
		>
			{/* {active && <div className='w-[10px] h-[5px] bg-red-dark' />} */}
			{textLink}
		</Link>
	);
}

export default LinkComponent;

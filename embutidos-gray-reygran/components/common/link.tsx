import Link from 'next/link';

interface LinkProps {
	textLink: string;
	active: boolean;
	hrefLink: string;
	hidden?: boolean;
}

function LinkComponent(props: LinkProps): JSX.Element {
	const { hrefLink, textLink, active, hidden } = props;

	return (
		<Link
			href={hrefLink}
			className={`text-white font-thin text-sm mr-4 md:mr-8 ${
				active ? 'text-red font-bold' : ''
			} ${hidden ?? false ? 'hidden' : ''}`}
		>
			{/* {active && <div className='w-[10px] h-[5px] bg-red-dark' />} */}
			{textLink}
		</Link>
	);
}

export default LinkComponent;

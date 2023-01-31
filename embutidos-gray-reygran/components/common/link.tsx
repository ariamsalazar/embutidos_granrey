import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

interface LinkProps {
	textLink: string;
	show: boolean;
	hrefLink: string;
	hidden?: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

function LinkComponent(props: LinkProps): JSX.Element {
	const { hrefLink, textLink, show, hidden, onMouseEnter, onMouseLeave } =
		props;
	console.log(show);

	return (
		<AnchorLink
			className={`relative text-white font-thin text-sm mr-4 md:mr-8 ${
				hidden ?? false ? 'hidden' : ''
			}`}
			href={hrefLink}
			onMouseEnter={() => {
				onMouseEnter();
			}}
			onMouseLeave={() => {
				onMouseLeave();
			}}
		>
			<span className={`relative pt-2 ${show ? 'text-red' : ''}`}>
				{show && (
					<>
						<div className='w-[20px] h-auto border-y-[2px] mb-1 text-red left-0 top-0 absolute' />
					</>
				)}
				{textLink}
			</span>
		</AnchorLink>
	);
}

export default LinkComponent;

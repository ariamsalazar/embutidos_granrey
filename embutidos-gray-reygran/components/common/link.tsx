import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

interface LinkProps {
	textLink: string;
	hrefLink: string;
	hidden?: boolean;
}

function LinkComponent(props: LinkProps): JSX.Element {
	const { hrefLink, textLink, hidden } = props;

	return (
		<AnchorLink
			className={`link-anchor relative text-white font-thin text-sm mr-4 md:mr-8 ${
				hidden ?? false ? 'hidden' : ''
			}`}
			href={hrefLink}
		>
			<span className={`relative pt-2 'text-red'`}>{textLink}</span>
		</AnchorLink>
	);
}

export default LinkComponent;

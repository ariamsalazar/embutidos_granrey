interface SubtitleProps {
	titleText: string;
	color: string;
}

function SubtitleComponent(props: SubtitleProps): JSX.Element {
	const { titleText, color } = props;

	return (
		<>
			<div className={`w-[27px] h-auto border-y-2 mb-1 text-${color}`} />
			<span className={`font-normal text-[16px] text-${color}`}>
				{titleText}
			</span>
		</>
	);
}

export default SubtitleComponent;

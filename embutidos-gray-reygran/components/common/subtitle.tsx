interface SubtitleProps {
	titleText: string;
	color: string;
}

function SubtitleComponent(props: SubtitleProps): JSX.Element {
	const { titleText, color } = props;

	return (
		<>
			<div
				className={`w-[25px] h-auto border-y-[2px] mb-1 text-${color}`}
			/>
			<span className={`font-normal text-[16px] text-${color}`}>
				{titleText}
			</span>
		</>
	);
}

export default SubtitleComponent;

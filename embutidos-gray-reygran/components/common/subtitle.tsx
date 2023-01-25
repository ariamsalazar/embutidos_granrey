interface SubtitleProps {
	titleText: string;
	color: string;
	center?: boolean;
}

function SubtitleComponent(props: SubtitleProps): JSX.Element {
	const { titleText, color, center } = props;

	return (
		<>
			<span className={`font-normal text-[16px] text-${color}`}>
				<div
					className={`w-[25px] h-auto border-y-[2px] mb-1 text-${color} ${
						center ?? false ? 'ml-[47%]' : ''
					}`}
				/>
				{titleText}
			</span>
		</>
	);
}

export default SubtitleComponent;

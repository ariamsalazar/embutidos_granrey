interface TitleProps {
	titleText: string;
	classNameText: string;
}

function TitleComponent(props: TitleProps): JSX.Element {
	const { titleText, classNameText } = props;

	return (
		<h5 className={`${classNameText} uppercase font-bold`}>{titleText}</h5>
	);
}

export default TitleComponent;

import { urlSocial } from '../../components/constants/constants';

interface ButtonProps {
	text: string;
	className: string;
	handleClick: (route: string) => void;
}

function ButtonComponent(props: ButtonProps): JSX.Element {
	const { text, className, handleClick } = props;

	return (
		<button
			className={className}
			onClick={() => {
				handleClick(urlSocial);
			}}
		>
			{text}
		</button>
	);
}

export default ButtonComponent;

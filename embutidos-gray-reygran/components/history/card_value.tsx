interface CardValueProps {
	title: string;
	description: string;
	color: string;
}
function CardValue(props: CardValueProps): JSX.Element {
	const { title, description, color } = props;
	return (
		<div
			className={`w-full flex items-end w-[90%] md:w-[32%] lg:w-[30%] bg-${color} pt-24 px-4 pb-4 rounded-[5px] w-shadow relative mt-4 md:mt-0 ml-[5%] md:ml-0 `}
		>
			<h1 className='absolute uppercase text-white rotate-text text-[28px] md:text-[26px]'>
				{title}
			</h1>
			<p className='text-yellow-light opacity-7 font-light text-[15px] md:text-[13px] w-[85%]'>
				{description}
			</p>
		</div>
	);
}

export default CardValue;

interface CarouselProductHistoryProps {
	description: string;
	image: string;
}
function CarouselHistoryItems(props: CarouselProductHistoryProps): JSX.Element {
	const { description, image } = props;
	return (
		<div className='flex w-full space-around md:text-[14px] lg:text-[16px] mt-12 justify-around'>
			<div className='!w-[45%]'>{description}</div>
			<div
				className='!w-[45%] bg-history-item md:h-[150px] lg:h-[200px]'
				style={{
					backgroundImage: `url(/images/${image})`,
				}}
			/>
		</div>
	);
}

export default CarouselHistoryItems;

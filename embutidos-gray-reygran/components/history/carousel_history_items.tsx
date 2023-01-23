interface CarouselProductHistoryProps {
	date: string;
	textHistory: string;
	photoHistory: string;
}
function CarouselHistoryItems(props: CarouselProductHistoryProps): JSX.Element {
	const { date, textHistory, photoHistory } = props;
	return (
		<div className='flex w-full space-around'>
			{/* //TO DO: MAP FILTER BY CATEGORY */}
			<div className='!w-[20%] h-[100px] bg-red-dark'>
				{date} {textHistory} {photoHistory}
			</div>
			<div className='!w-[20%] h-[100px] bg-red-dark'>
				{date} {textHistory} {photoHistory}
			</div>

			<div className='!w-[20%] h-[100px] bg-red-dark'>
				{date} {textHistory} {photoHistory}
			</div>
			<div className='!w-[20%] h-[100px] bg-red-dark'>
				{date} {textHistory} {photoHistory}
			</div>
		</div>
	);
}

export default CarouselHistoryItems;

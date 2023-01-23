import CarouselHistory from './history/carousel_history';
import DefaultLayout from './layout/default_layout';

function History(): JSX.Element {
	return (
		<div className='bg-gray-light w-full h-auto'>
			<DefaultLayout className='h-[80vh]'>
				<span>History Section</span>
				<CarouselHistory />
			</DefaultLayout>
		</div>
	);
}

export default History;

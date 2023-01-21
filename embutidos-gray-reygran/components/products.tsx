import DefaultLayout from './layout/default_layout';
import SubtitleComponent from '../components/common/subtitle';
import CarouselProduct from './products/carousel_prod';

function Products(): JSX.Element {
	return (
		<div className='bg-yellow-dark w-full h-auto'>
			<DefaultLayout className='h-[80vh]'>
				<SubtitleComponent titleText='Products' color='black' />
				<CarouselProduct />
			</DefaultLayout>
		</div>
	);
}

export default Products;

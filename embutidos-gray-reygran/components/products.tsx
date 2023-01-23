import DefaultLayout from './layout/default_layout';
import CarouselProduct from './products/carousel_prod';

function Products(): JSX.Element {
	return (
		<div className='w-full h-auto background-product relative'>
			<DefaultLayout className='h-auto py-20 md:py-16'>
				<CarouselProduct />
			</DefaultLayout>
		</div>
	);
}

export default Products;

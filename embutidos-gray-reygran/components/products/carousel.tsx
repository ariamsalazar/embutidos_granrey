import * as React from 'react';
import ProductModal from './product_modal';

interface CarouselProductProps {
	category: string;
	numberOfItems: number;
}

function Carousel(props: CarouselProductProps): JSX.Element {
	const { category, numberOfItems } = props;
	const items = new Array(numberOfItems).fill(null);
	const [open, setOpen] = React.useState(false);

	const handleOpen = (): any => {
		setOpen(true);
	};

	const handleClose = (): any => {
		setOpen(false);
	};

	return (
		<>
			<div className='flex w-full space-around justify-around mt-5 md:mt-10 overflow-hidden'>
				{/* //TO DO: MAP FILTER BY CATEGORY */}
				{items?.map(key => {
					return (
						<div
							className='!w-[20%] h-auto cursor-pointer'
							key={category}
						>
							<div
								onClick={handleOpen}
								className='prod-item !w-[100%] h-[80px] md:h-[230px] rounded-[6px] bg-prod-item hover:opacity-[70%]'
							/>
							<span className='!w-[100%] block text-red text-[15px] font-light text-center mt-4 tracking-[0.12rem]'>
								Product Name {category}
							</span>
							<span className='!w-[100%] block text-black text-[15px] md:text-[18px] font-light text-center mt-[0px] tracking-[0.12rem] uppercase'>
								Ref. 10
							</span>
						</div>
					);
				})}
			</div>
			<ProductModal
				open={open}
				handleClose={handleClose}
				idProduct={79799}
				name='CHORIZO TIPO CARUPANERO'
				price='20'
				presentation='Ristra de 7 piezas'
				weight='4kg'
				curation='Larga'
				description=' El Chorizo Tipo Carupanero es un embutido artesanal fresco, tradicionalmente elaborado en Carúpano, ciudad del oriente de Venezuela, y muy cotizado en todo el país.

				Se elabora con carne de cerdo con especias recubierta con tripa natural.  Es uno de los preferidos a la hora de preparar parrillas, además, es usado como sofrito para el relleno de nuestras típicas arepas o empanadas.'
				image='product.jpg'
			/>
		</>
	);
}

export default Carousel;

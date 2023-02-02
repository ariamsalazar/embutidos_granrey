import LinkComponent from 'components/common/link';
import Image from 'next/image';
import Logo from '../../public/images/old_logo.png';

function Menu(): JSX.Element {
	return (
		<div className='absolute top-[30px] right-0 md:right-[20px] flex items-center justify-between w-[100%] md:w-[90%] lg:w-[50%] z-10'>
			<div className='w-[10%]'>
				<Image
					src={Logo}
					alt='Logo Embutidos Gran Rey'
					width={100}
					height={110}
					className='mr-0 ml-4 md:ml-0 md:mr-12'
				/>
			</div>
			<div className='w-[90%] bg-yellow text-right'>
				<LinkComponent textLink='Productos' hrefLink='#product' />
				<LinkComponent textLink='Quienes somos' hrefLink='#whoweare' />
				<LinkComponent textLink='Historia' hrefLink='#history' />
				<LinkComponent textLink='Redes' hrefLink='#social' hidden />
				<LinkComponent textLink='Contacto' hrefLink='#contact' />
			</div>
		</div>
	);
}

export default Menu;

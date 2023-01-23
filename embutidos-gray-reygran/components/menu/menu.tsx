import LinkComponent from 'components/common/link';
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';

function Menu(): JSX.Element {
	return (
		<div className='absolute top-[30px] right-0 md:right-[20px] flex items-center justify-between w-[100%] md:w-[90%] lg:w-[85%]'>
			<div className='w-[10%]'>
				<Image
					src={Logo}
					alt='Logo Embutidos Gran Rey'
					width={62}
					height={73}
					className='mr-0 ml-5 md:ml-0 md:mr-12'
				/>
			</div>
			<div className='w-[90%] bg-yellow text-right'>
				<LinkComponent
					textLink='Productos'
					hrefLink='/quienes-somos'
					active={false}
				/>
				<LinkComponent
					textLink='Quienes somos'
					hrefLink='/quienes-somos'
					active
				/>
				<LinkComponent
					textLink='Historia'
					hrefLink='/quienes-somos'
					active={false}
					hidden
				/>
				<LinkComponent
					textLink='Redes'
					hrefLink='/quienes-somos'
					active={false}
				/>
				<LinkComponent
					textLink='Contacto'
					hrefLink='/quienes-somos'
					active={false}
				/>
			</div>
		</div>
	);
}

export default Menu;

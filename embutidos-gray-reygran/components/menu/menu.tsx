import LinkComponent from 'components/common/link';
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';

function Menu(): JSX.Element {
	return (
		<div className='absolute top-[30px] right-[20px] flex items-center w-[80%] justify-between w-[95%] md:w-[90%] lg:w-[85%]'>
			<div className=' w-[10%]'>
				<Image
					src={Logo}
					alt='Logo Embutidos Gran Rey'
					width={62}
					height={73}
					className='mr-12'
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

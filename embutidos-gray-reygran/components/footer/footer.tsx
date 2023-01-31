import Image from 'next/image';
import DefaultLayout from '../layout/default_layout';
import LogoBlack from '../../public/images/LogoBlack.png';

function Footer(): JSX.Element {
	return (
		<div className='bg-gray-footer w-full h-auto'>
			<DefaultLayout className='h-auto py-5 flex items-center'>
				<div className='w-[35%] md:w-[33%] text-center'>
					<Image
						src={LogoBlack}
						alt='Logo Embutidos Gran Rey'
						width={62}
						height={40}
						className='ml-4'
					/>
				</div>
				<div className='w-[50%] md:hidden text-center'>
					<span className='text-[14px] font-light text-black leading-5'>
						Embutidos <b>Gran Rey</b> C.A. <br /> RIF: J-00114115-4.{' '}
					</span>
					<span className='text-[13px] font-light text-black text-center w-full block mt-1'>
						Caracas, Venezuela ©.{' '}
						<span className='text-red-dark font-bold'>2023</span>
					</span>
				</div>
				<div className='hidden md:block w-[33%] text-center'>
					<span className='text-[12px] font-light text-black '>
						Embutidos <b>Gran Rey</b> C.A. RIF: J-00114115-4.{' '}
					</span>
				</div>
				<div className='hidden md:block w-[33%] text-center'>
					<span className='text-[12px] font-light text-black text-center w-full block'>
						Caracas, Venezuela ©.{' '}
						<span className='text-red-dark font-bold'>2023</span>
					</span>
				</div>
			</DefaultLayout>
		</div>
	);
}

export default Footer;

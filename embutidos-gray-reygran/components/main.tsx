import Image from 'next/image';
import TitleComponent from '../components/common/title';
import Menu from '../components/menu/menu';
import MainImage from '../public/images/mainImage.jpg';
import ButtonComponent from '../components/common/button';

function Main(): JSX.Element {
	const openInNewTab = (url: string): any => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow != null) newWindow.opener = null;
	};
	return (
		<div className='h-[100vh] flex'>
			<div className='w-0 lg:w-[40%] bg-gray-dark h-full'>
				<Image
					src={MainImage}
					alt='Main Embutidos Gran Rey'
					width='0'
					height='0'
					className='w-full h-full'
				/>
			</div>
			<div className='w-full lg:w-[60%] background-main h-full relative'>
				<Menu />
				<div className='h-auto w-[95%] md:w-[90%] lg:w-[85%] absolute right-0 md:right-[20px] top-[35%]'>
					<TitleComponent
						titleText='Ordena tu'
						classNameText='text-red-light text-[56px] md:text-[64px]'
					/>
					<TitleComponent
						titleText='comida favorita'
						classNameText='pl-0 md:pl-10 text-white text-[64px]'
					/>
					<div className='text-white text-[18px] md:text-[16px] justify w-[90%] md:w-[70%] font-light mt-6'>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industrs
						standard dummy text ever since{' '}
						<span className='font-bold text-yellow-dark'>
							the 1500s.
						</span>
						<ButtonComponent
							className='bg-yellow-dark text-white hover:bg-red-dark uppercase button-general '
							text='Ordena aqui'
							handleClick={openInNewTab}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;

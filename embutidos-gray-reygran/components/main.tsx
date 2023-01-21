import Image from 'next/image';
import TitleComponent from '../components/common/title';
import Menu from '../components/menu/menu';
import MainImage from '../public/images/mainImage.jpg';

function Main(): JSX.Element {
	return (
		<div className='h-[100vh] flex'>
			<div className='w-0 md:w-[30%] lg:w-[40%] bg-yellow-dark h-full'>
				<Image
					src={MainImage}
					alt='Main Embutidos Gran Rey'
					width='0'
					height='0'
					className='w-full h-full'
				/>
			</div>
			<div className='w-[100%] md:w-[70%] lg:w-[60%] backgroundImage h-full relative'>
				<Menu />
				<div className='h-auto w-[95%] md:w-[90%] lg:w-[85%] absolute right-[20px] top-[50%]'>
					<TitleComponent
						titleText='Order your'
						classNameText='text-white text-[64px]'
					/>
				</div>
			</div>
		</div>
	);
}

export default Main;

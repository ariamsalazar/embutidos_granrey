import DefaultLayout from './layout/default_layout';
import TitleComponent from '../components/common/title';
import SubtitleComponent from './common/subtitle';
import ButtonComponent from '../components/common/button';

function Social(): JSX.Element {
	const openInNewTab = (url: string): any => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow != null) newWindow.opener = null;
	};

	return (
		<div className='bg-social-media w-full relative h-auto md:h-[620px]'>
			<div className='relative md:absolute w-[100%] md:w-[50%] h-[400px] md:h-[100%] left-0 top-0 bg-social-phone' />
			<DefaultLayout className='h-auto md:h-[100%] md:flex md:justify-evenly md:items-center py-12'>
				<div className='w-full md:w-[50%] lg:w-[50%]' />
				<div className='w-full md:w-[50%] lg:w-[40%] p-4'>
					<SubtitleComponent titleText='Instagram' color='black' />
					<TitleComponent
						titleText='ENCUENTRANOS EN NUESTRO INSTAGRAM'
						classNameText='text-white text-[48px] md:text-[50px] lg:text-[54px] mt-4'
					/>
					<ButtonComponent
						className='bg-white text-black hover:bg-gray-light normal-case button-general'
						text='S&iacute;guenos en @_embutidosgranrey'
						handleClick={openInNewTab}
					/>
				</div>
			</DefaultLayout>
		</div>
	);
}

export default Social;

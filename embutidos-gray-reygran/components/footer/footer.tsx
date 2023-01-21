import DefaultLayout from '../layout/default_layout';

function Footer(): JSX.Element {
	return (
		<div className='bg-gray-dark w-full h-auto'>
			<DefaultLayout className='h-[5vh]'>
				<span>Footer</span>
			</DefaultLayout>
		</div>
	);
}

export default Footer;

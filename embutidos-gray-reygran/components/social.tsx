import DefaultLayout from './layout/default_layout';

function Social(): JSX.Element {
	return (
		<div className='bg-yellow-dark w-full h-auto'>
			<DefaultLayout className='h-[80vh]'>
				<span>Instagram Section</span>
			</DefaultLayout>
		</div>
	);
}

export default Social;

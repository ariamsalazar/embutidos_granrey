import DefaultLayout from './layout/default_layout';

function Who(): JSX.Element {
	return (
		<div className='bg-black w-full h-auto'>
			<DefaultLayout className='h-[80vh]'>
				<span>Quienes somos Section</span>
			</DefaultLayout>
		</div>
	);
}

export default Who;

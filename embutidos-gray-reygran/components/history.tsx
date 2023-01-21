import DefaultLayout from './layout/default_layout';

function History(): JSX.Element {
	return (
		<div className='bg-red-dark w-full h-auto'>
			<DefaultLayout className='h-[80vh]'>
				<span>History Section</span>
			</DefaultLayout>
		</div>
	);
}

export default History;

import DefaultLayout from './layout/default_layout';

function Contact(): JSX.Element {
	return (
		<div className='bg-white w-full h-auto'>
			<DefaultLayout className='h-[80vh]'>
				<span>Contact Section</span>
			</DefaultLayout>
		</div>
	);
}

export default Contact;

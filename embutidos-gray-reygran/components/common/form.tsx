import ButtonComponent from './button';
import InputComponent from './input';

function FormComponent(): JSX.Element {
	const submit = (url: string): any => {};
	return (
		<form className='w-full mt-4'>
			<div className='flex justify-between w-full'>
				<div className='w-[48%]'>
					<InputComponent label='Nombre' className='text-black' />
				</div>
				<div className='w-[48%]'>
					<InputComponent label='Apellido' className='text-black' />
				</div>
			</div>
			<div className='flex justify-between w-full'>
				<div className='w-[48%]'>
					<InputComponent label='Email' className='text-black' />
				</div>
				<div className='w-[48%]'>
					<InputComponent
						label='Interesado en'
						className='text-black'
					/>
				</div>
			</div>
			<div className='block w-full'>
				<InputComponent
					label='Motivo de mensaje'
					className='text-black'
					textArea
				/>
			</div>
			<div className='flex w-full justify-end'>
				<ButtonComponent
					className='bg-red text-white uppercase font-bold hover:bg-red-dark button-general btn-send'
					text='Enviar'
					handleClick={submit}
				/>
			</div>
		</form>
	);
}

export default FormComponent;

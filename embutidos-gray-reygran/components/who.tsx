import DefaultLayout from './layout/default_layout';
import SubtitleComponent from '../components/common/subtitle';
import TitleComponent from './common/title';
function Who(): JSX.Element {
	return (
		<div className='bg-black w-full relative'>
			<div className='relative md:absolute w-[100%] md:w-[50%] h-[350px] md:h-[100%] right-0 top-0 bg-who-we-are' />
			<DefaultLayout className='h-auto py-20 md:flex md:justify-space px-4 md:px-0'>
				<div className='w-full md:w-[50%] lg:w-[40%]'>
					<SubtitleComponent
						titleText='Qui&eacute;nes somos'
						color='yellow-dark'
					/>
					<TitleComponent
						titleText='CONOCE UN POCO
						MÁS DE NOSOTROS'
						classNameText='text-gray-light text-[48px] md:text-[54px] mt-4'
					/>
					<p className='text-white justify opacity-90	text-[15px] lg:text-[17px] my-12 font-light'>
						<span className='text-gray-light underline'>
							Embutidos Gran Rey
						</span>{' '}
						es el resultado del esfuerzo sostenido durante años de
						trabajo, logrando en la formulación de sus productos el
						sabor característico de la auténtica gastronomía
						ibérica. <br /> <br />
						La empresa cuenta con dos líneas de productos:{' '}
						<span className='text-gray-light underline'>
							Gran Rey
						</span>
						, ofreciendo embutidos clásicos, como lo es el Chorizo
						Tipo Canario el cual se comercializa en la empresa desde
						sus inicios; y{' '}
						<span className='text-gray-light underline'>
							Gran Rey La Piara
						</span>
						, línea de productos Premium que cuenta con embutidos
						elaborados especialmente para los paladares más
						exigentes.
					</p>
				</div>
				<div className='w-full md:w-[50%]' />
			</DefaultLayout>
		</div>
	);
}

export default Who;

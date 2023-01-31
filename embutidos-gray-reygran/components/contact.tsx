import DefaultLayout from './layout/default_layout';
import SubtitleComponent from '../components/common/subtitle';
import TitleComponent from './common/title';
import ButtonComponent from '../components/common/button';
import FormComponent from './common/form';

function Contact(): JSX.Element {
	const openInNewTab = (url: string): any => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow != null) newWindow.opener = null;
	};
	return (
		<div className='bg-gray-contact w-full h-auto'>
			<DefaultLayout className='h-[auto] py-12 md:flex md:justify-between items-end'>
				<div className='w-[90%] ml-[5%] lg:ml-0 md:w-[48%] lg:w-[45%]'>
					<div className='flex w-full pl-4 md:pl-8 items-center justify-start'>
						<div className='contact-title w-[20%]' />
						<div className='w-[80%] md:w-[60%]'>
							<span className='text-red-dark pt-4 text-[16px] md:text-[14px] font-bold'>
								Escr&iacute;benos un mensaje
							</span>
							<span className='text-black font-light text-[15px] md:text-[13px] text-left mt-4 mt-2 block'>
								Si desea mayor informaci&oacute;n sobre nuestros
								productos y/o servicios, no dude en
								contactarnos.
							</span>
						</div>
					</div>
					<div className='w-full block mt-4'>
						<FormComponent />
					</div>
				</div>
				<div className='w-[90%] ml-[5%] lg:w-[45%] mt-10 md:mt-0'>
					<SubtitleComponent titleText='Contacto' color='black' />
					<TitleComponent
						titleText='PONTE EN CONTACTO CON NOSOTROS'
						classNameText='text-red text-[48px] md:text-[50px] lg:text-[54px] mt-4'
					/>
					<div className='border-l-2 border-l-gray-dark mt-8 pt-4 pr-4 pl-10'>
						<span className='text-red-dark text-[16px] md:text-[14px] font-bold'>
							¿D&oacute;nde estamos?
						</span>
						<div className='map-google h-[200px] w-full rounded-[5px] w-shadow mt-6'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15695.291357297365!2d-66.8658251!3d10.435629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebad0a20b8ea65be!2sClover%20Venezuela!5e0!3m2!1ses-419!2sve!4v1674657833577!5m2!1ses-419!2sve'
								width='100%'
								height='100%'
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							></iframe>
						</div>
						<div className='w-full flex justify-between mt-8'>
							<div className='w-[48%] md:w-[45%]'>
								<span className='item-contact text-red-dark text-[16px] md:text-[14px] font-bold pl-8 w-full block'>
									Tel&eacute;fonos
								</span>
								<span className='text-black font-light text-[15px] md:text-[13px] text-left mt-4 mt-2 block'>
									Comun&iacute;quese con nosotros
								</span>
								<p className='text-black font-bold text-[15px] md:text-[13px] text-left mt-4 mt-2 block'>
									+ 58 (0212).550.21.90 <br />
									+58 (0412).429.499
								</p>
								<ButtonComponent
									className='bg-green text-white font-bold hover:bg-red-dark button-general btn-whatsapp'
									text='Whastapp'
									handleClick={openInNewTab}
								/>
							</div>
							<div className='w-[48%] md:w-[45%]'>
								<span className='item-contact second text-red-dark text-[16px] md:text-[14px] font-bold pl-8 w-full block'>
									Ubicaci&oacute;n
								</span>
								<span className='text-black font-light text-[15px] md:text-[13px] text-left mt-4 mt-2 block'>
									Urb. El Rosal, Av. Venezuela, Edificio
									Frontera, Piso 2, Oficina Nro 2.
								</span>
								<p className='text-black font-bold text-[15px] md:text-[13px] text-left mt-4 mt-2 block'>
									Caracas, Venezuela.
								</p>
							</div>
						</div>
					</div>
				</div>
			</DefaultLayout>
		</div>
	);
}

export default Contact;

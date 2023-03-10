import Box from '@mui/material/Box';
import SubtitleComponent from '../common/subtitle';
import TitleComponent from '../common/title';
import Modal from '@mui/material/Modal';
import ButtonComponent from '../../components/common/button';

interface ModalProps {
	open: boolean;
	handleClose: () => void;
	name: string;
	idProduct: number;
	price: string;
	description: string;
	presentation: string;
	curation: string;
	weight: string;
	image: string;
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '820px',
	height: '650px',
	borderRadius: '8px',
	border: '0px solid #000',
	p: 4,
	outline: 'none',
};

function ProductModal(props: ModalProps): JSX.Element {
	const {
		open,
		idProduct,
		handleClose,
		name,
		description,
		curation,
		presentation,
		weight,
		image,
	} = props;

	const openInNewTab = (url: string): any => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
		if (newWindow != null) newWindow.opener = null;
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box
				sx={style}
				style={{
					backgroundImage: `url(/images/${image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
				className='relative overflow-hidden border-0 width-[90%] md:!width-[820px]'
			>
				<div className='w-full md:w-[50%] px-10 py-12 h-full absolute right-0 top-0 bg-gray-dark opacity-90'>
					<div className='container-product'>
						<SubtitleComponent
							titleText={`Product #${idProduct}`}
							color='white'
						/>
						<TitleComponent
							titleText={name}
							classNameText='text-yellow-dark text-[40px] md:text-[45px] lg:text-[50px] mt-4 mb-2'
						/>
						<ButtonComponent
							className='bg-green text-white font-normal hover:bg-red-dark button-general btn-whatsapp'
							text='Precio aqui'
							handleClick={openInNewTab}
						/>
						<p className='text-white text-[13px] font-light mt-5'>
							{description}
						</p>
						<div className='item-details flex mt-5'>
							<div className='h-[40px] w-[20%] bg-presentation' />
							<div className='h-[40px] w-[80%]'>
								<span className='uppercase text-gray-light text-[12px] w-full block'>
									Presentaci&oacute;n
								</span>
								<span className='text-white font-light text-[12px] w-full block'>
									{presentation}
								</span>
							</div>
						</div>
						<div className='item-details flex mt-5'>
							<div className='h-[40px] w-[20%] bg-weight' />
							<div className='h-[40px] w-[80%]'>
								<span className='uppercase text-gray-light text-[12px] w-full block'>
									Peso
								</span>
								<span className='text-white font-light text-[12px] w-full block'>
									{weight} KG Aprox.
								</span>
							</div>
						</div>
						<div className='item-details flex mt-5'>
							<div className='h-[40px] w-[20%] bg-curation' />
							<div className='h-[40px] w-[80%]'>
								<span className='uppercase text-gray-light text-[12px] w-full block'>
									Curaci&oacute;n
								</span>
								<span className='text-white font-light text-[12px] w-full block'>
									{curation}
								</span>
							</div>
						</div>
					</div>
				</div>
			</Box>
		</Modal>
	);
}

export default ProductModal;

import CarouselHistory from './history/carousel_history';
import DefaultLayout from './layout/default_layout';
import SubtitleComponent from './common/subtitle';
import TitleComponent from './common/title';
import CardValue from '../components/history/card_value';
import { values } from './data/values';

function History(): JSX.Element {
	return (
		<div className='bg-gray-light w-full h-auto bg-history'>
			<div className='w-full h-auto bg-yellow-history'>
				<DefaultLayout className='h-auto py-12'>
					<div className='w-full text-center flex justify-center'>
						<div className='w-[95%] md:w-[60%] lg:w-[40%]'>
							<SubtitleComponent
								titleText='Historia'
								color='red-dark'
								center
							/>
							<TitleComponent
								titleText='GRAN REY DESDE LOS INICIOS'
								classNameText='text-black text-[48px] md:text-[50px] lg:text-[54px] mt-4'
							/>
						</div>
					</div>
					<div className='w-full flex justify-center mt-8'>
						<div className='w-full md:w-[80%] lg:w-[60%]'>
							<CarouselHistory />
							<div className='bg-separator-black w-[90%] !ml-[5%] md:ml-0 md:w-full' />
							<div className='w-full md:flex md:justify-between'>
								{values?.map(val => {
									return (
										// eslint-disable-next-line react/jsx-key
										<CardValue
											title={val.title}
											description={val.description}
											color={val.color}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</DefaultLayout>
			</div>
		</div>
	);
}

export default History;
